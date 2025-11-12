import { useState } from "react";
import { useCoords } from "../../../hooks/useCoords";
import useGeolocation from "../../../hooks/useGeolocation";
import Loading from "../../Loading Screen/Loading";

// export default function LocationBtn() {
//   const { setCoords } = useCoords();
//   const { getLocation, loading, disabled } = useGeolocation(setCoords);

//   if (loading) return <Loading />;

//   return (
//     <button
//       className="current-location-btn"
//       onClick={getLocation}
//       disabled={disabled}
//     >
//       <span className="m-icon">my_location</span>
//       <span className="location-text">Current Location</span>
//     </button>
//   );
// }
// export default function LocationBtn() {
//   const { setCoords } = useCoords();
//   const { getLocation, loading } = useGeolocation(setCoords);

//   return (
//     <button
//       className="current-location-btn"
//       onClick={getLocation}
//       disabled={loading} // disables while loading
//     >
//       <span className="m-icon">my_location</span>
//       <span className="location-text">
//         {loading ? "Getting location..." : "Current Location"}
//       </span>
//     </button>
//   );
// }

// export default function LocationBtn() {
//   const { coords, setCoords } = useCoords();
//   const [geoCoords, setGeoCoords] = useState(null); // last geolocation
//   const { getLocation, loading } = useGeolocation((loc) => {
//     setCoords(loc);
//     setGeoCoords(loc); // store geolocation
//   });

//   // Button is disabled if current coords match last geolocation
//   const disabled =
//     geoCoords && coords.lat === geoCoords.lat && coords.lon === geoCoords.lon;

//   return (
//     <button
//       className="current-location-btn"
//       onClick={getLocation}
//       disabled={loading || disabled} // disabled if fetching or already at current location
//     >
//       <span className="m-icon">my_location</span>
//       <span className="location-text">
//         {loading ? "Getting location..." : "Current Location"}
//       </span>
//     </button>
//   );
// }

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
      disabled={currentLocation}
    >
      <span className="m-icon">my_location</span>
      <span className="location-text">
        {loading ? "Getting location..." : "Current Location"}
      </span>
    </button>
  );
}
