import { ReducerActionType } from "@/shared/types/ReducerAction";
import { Reducer } from "react";
import { ItemInitStateType } from "./item_init";

const ItemReducer: Reducer<ItemInitStateType, ReducerActionType> = (
  state: ItemInitStateType,
  action: ReducerActionType
) => {
  switch (action.type) {
    case "ITEM_DATA":
      const { count, next, previous, results } = action.data.axiosData.data;
      return {
        ...state,
        count,
        next,
        previous,
        result: results,
        detailedResults: [],
      };
    case "ITEM_DETAILS_SUCCESS":
      return {
        ...state,
        detailedResults: action.data,
      };
    default: {
      return state;
    }
  }
};

export default ItemReducer;
