import { ReducerActionType } from "@/shared/types/ReducerAction";
import { Reducer } from "react";
import { PokemonInitStateType } from "./pokemon_init";

const PokemonReducer: Reducer<PokemonInitStateType, ReducerActionType> = (
  state: PokemonInitStateType,
  action: ReducerActionType
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default PokemonReducer;
