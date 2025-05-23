import { useEffect, useReducer } from "react";
import { dataReducer, initialFetchingState } from "./useDataReducer";
import { API_KEY, BASE_URL } from "../lib/config";

export const useFetchData = (endPoint, isSearching = false) => {
  const [state, dispatch] = useReducer(dataReducer, initialFetchingState);

  // for cleaning outdated search
  const controller = new AbortController();

  const fetchData = async () => {
    dispatch({ type: "fetchStarted" });
    try {
      const searchConfig = isSearching ? { signal: controller.signal } : {};
      const res = await fetch(`${BASE_URL}/${endPoint}&appid=${API_KEY}`, searchConfig);
      if (!res.ok) throw new Error("Something went wrong");
      const resData = await res.json();
      dispatch({ type: "dataReceived", payload: resData });
    } catch (err) {
      const errMsg = err.message;
      dispatch({ type: "dataFailed", payload: errMsg });
    }
  };

  useEffect(() => {
    if (!endPoint) {
      dispatch({ type: "dataCleared" });
      return;
    }

    fetchData();

    return () => controller.abort();
  }, [endPoint]);

  return state;
};
