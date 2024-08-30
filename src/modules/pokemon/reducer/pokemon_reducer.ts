import { ReducerActionType } from "@/shared/types/ReducerAction";
import { Reducer } from "react";
import { PokemonInitStateType } from "./pokemon_init";

const PokemonReducer: Reducer<PokemonInitStateType, ReducerActionType> = (
  state: PokemonInitStateType,
  action: ReducerActionType
) => {
  switch (action.type) {
    case "POKEMON_DATA":
      const { count, next, previous, results } = action.data.axiosData.data;
      return {
        ...state,
        count,
        next,
        previous,
        result: results,
        detailedResults: [],
      };
    case "POKEMON_DETAILS_SUCCESS": {
      return {
        ...state,
        detailedResults: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default PokemonReducer;
