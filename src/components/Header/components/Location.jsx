import { useState } from "react";
import { useCoords } from "../../../hooks/useCoords";
import useGeolocation from "../../../hooks/useGeolocation";
import Loading from "../../Loading Screen/Loading";

export default function LocationBtn() {
  const { coords, setCoords } = useCoords();
  const [geoCoords, setGeoCoords] = useState(null);
  const { getLocation, loading } = useGeolocation((loc) => {
    setCoords(loc);
    setGeoCoords(loc);
  });

  const currentLocation = geoCoords && coords.lat === geoCoords.lat && coords.lon === geoCoords.lon;

  if (loading) return <Loading />;

  return (
    <button
      className="current-location-btn"
      onClick={getLocation}
      disabled={currentLocation || loading}
    >
      <span className="m-icon">my_location</span>
      <span className="location-text">
        {loading ? "Getting location..." : "Current Location"}
      </span>
    </button>
  );
}
