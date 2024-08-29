"use client";
import { BaseContainer } from "@/shared/components/container";
import PokeList from "../components/pokelist";
import Header from "@/shared/components/header";
import { PokemonInitData } from "../functions/pokemon_Init";
import { useEffect, useReducer } from "react";
import PokemonReducer from "../reducer/pokemon_reducer";
import { PokemonInitState } from "../reducer/pokemon_init";

const PokemonPage = () => {
  const [state, dispatch] = useReducer(PokemonReducer, PokemonInitState);

  useEffect(() => {
    PokemonInitData(dispatch, `pokemon?limit=10&offset=0`);
  }, []);

  const handlePageChange = (page: number) => {
    const offset = (page - 1) * 10;
    PokemonInitData(dispatch, `pokemon?limit=10&offset=${offset}`);
  };

  return (
    <>
      <BaseContainer
        width={"100%"}
        display={"flex"}
        padding={"1.5rem 1rem"}
        flexDirection={"column"}
        overflow={"auto"}
        gap={"1rem"}
      >
        <Header title={"List of Pokemon"} caption={"Complete Pokémon list"} />
        <PokeList state={state} onPageChange={handlePageChange} />
      </BaseContainer>
    </>
  );
};

export default PokemonPage;
