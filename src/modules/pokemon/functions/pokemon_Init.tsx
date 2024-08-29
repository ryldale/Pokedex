import { pokemonAPI } from "@/core/api/api";
import { ReducerActionType } from "@/shared/types/ReducerAction";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { Pokemon } from "../reducer/pokemon_init";

export const PokemonInitData = (
  dispatch: Dispatch<ReducerActionType>,
  url: string
) => {
  pokemonAPI
    .get(url)
    .then((res: AxiosResponse) => {
      console.log(res.data);
      dispatch({ type: "POKEMON_DATA", data: { axiosData: res } });

      const pokemonDetailsPromises = res.data.results.map((pokemon: Pokemon) =>
        pokemonAPI.get(pokemon.url)
      );

      Promise.all(pokemonDetailsPromises)
        .then((responses) => {
          const detailedData = responses.map((response) => response.data);
          dispatch({ type: "POKEMON_DETAILS_SUCCESS", data: detailedData });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
