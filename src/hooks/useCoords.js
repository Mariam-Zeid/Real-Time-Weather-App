import { useContext } from "react";
import { CoordsContext } from "../contexts/coords-context";

export const useCoords = () => useContext(CoordsContext);
