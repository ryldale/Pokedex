import { pokemonAPI } from "@/core/api/api";
import { ReducerActionType } from "@/shared/types/ReducerAction";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";

export const PokemonInitData = (dispatch: Dispatch<ReducerActionType>) => {
  pokemonAPI
    .get(`pokemon?limit=${"10"}&offset=${"0"}`)
    .then((res: AxiosResponse) => {
      console.log(res.data);
      dispatch({ type: "FETCH_SUCCESS", data: { axiosData: res } });
    })
    .catch((err) => {
      console.log(err);
    });
};
