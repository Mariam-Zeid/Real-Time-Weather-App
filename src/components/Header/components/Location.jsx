import useGeolocation from "../../../hooks/useGeolocation";
import Loading from "../../Loading Screen/Loading";

export default function LocationBtn({ setCoords }) {
  const { getLocation, loading, disabled } = useGeolocation(setCoords);

  if (loading) return <Loading />;

  return (
    <button
      className="current-location-btn"
      onClick={getLocation}
      disabled={disabled}
    >
      <span className="m-icon">my_location</span>
      <span className="location-text">Current Location</span>
    </button>
  );
}
