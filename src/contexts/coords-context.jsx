import { createContext, useState } from "react";

export const CoordsContext = createContext();

export default function CoordsProvider({ children }) {
  const [coords, setCoords] = useState({ lat: 51.5073219, lon: -0.1276474 });

  const values = { coords, setCoords };
  return (
    <CoordsContext.Provider value={values}>{children}</CoordsContext.Provider>
  );
}

