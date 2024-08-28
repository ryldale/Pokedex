export type ReducerActionType = {
  type: "FETCH_INIT" | "FETCH_SUCCESS" | "FETCH_FAILURE" | "MODAL" | string;
  data?: any;
};
