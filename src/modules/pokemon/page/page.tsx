"use client";
import { BaseContainer } from "@/shared/components/container";
import PokeList from "../components/pokelist";
import Header from "@/shared/components/header";
import { PokemonInitData } from "../functions/pokemon_Init";
import { useReducer } from "react";
import PokemonReducer from "../reducer/pokemon_reducer";
import { PokemonInitState } from "../reducer/pokemon_init";

const PokemonPage = () => {
  const [state, dispatch] = useReducer(PokemonReducer, PokemonInitState);
  PokemonInitData(dispatch);

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
        <Header
          title={"List of Items"}
          caption={"Complete Pokémon item list"}
        />
        <PokeList state={state} />
      </BaseContainer>
    </>
  );
};

export default PokemonPage;
