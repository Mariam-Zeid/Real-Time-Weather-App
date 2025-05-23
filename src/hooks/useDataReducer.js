export const initialFetchingState = {
  data: [],
  status: "pending",
  errorMessage: null,
};
export const fetchingActionTypes = {
  fetchStarted: "fetchStarted",
  dataReceived: "dataReceived",
  dataFailed: "dataFailed",
  dataCleared: "dataCleared",
};
export const dataReducer = (state, action) => {
  switch (action.type) {
    case fetchingActionTypes.fetchStarted:
      return { ...state, status: "loading" };
    case fetchingActionTypes.dataReceived:
      return { ...state, data: action.payload, status: "ready" };
    case fetchingActionTypes.dataFailed:
      return { ...state, status: "error", errorMessage: action.payload };
    case fetchingActionTypes.dataCleared:
      return { ...initialFetchingState };
    default:
      throw new Error("Unkown action");
  }
};
