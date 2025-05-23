import { useState } from "react";
import Loading from "../../Loading Screen/Loading";

export default function LocationBtn({ setCoords }) {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setDisabled(true);
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lon: longitude });
        setLoading(false);
      },
      (error) => {
        console.error("Location error:", error);
        alert("Unable to get your location. Using default location.");
        setLoading(false);
        setDisabled(false); // allow retry
      }
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <button
      className="current-location-btn"
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="m-icon">my_location</span>
      <span className="location-text">Current Location</span>
    </button>
  );
}
