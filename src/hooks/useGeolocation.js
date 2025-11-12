import { useState } from "react";

export default function useGeolocation(onSuccess) {
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onSuccess({ lat: latitude, lon: longitude });
        setLoading(false);
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Unable to get your location. Using default location.");
        setLoading(false);
      }
    );
  };

  return { getLocation, loading };
}
