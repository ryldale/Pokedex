import { BaseContainer } from "@/shared/components/container";
import PokeList from "../components/pokelist";
import Header from "@/shared/components/header";

const PokemonPage = () => {
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
        <PokeList />
      </BaseContainer>
    </>
  );
};

export default PokemonPage;
