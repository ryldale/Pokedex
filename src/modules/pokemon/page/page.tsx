import { BaseContainer } from "@/shared/components/container";
import PokeList from "../components/pokelist";
import PokeHeader from "../components/pokeheader";

const PokemonPage = () => {
  return (
    <>
      {/* <Typography variant="h1">TESTING</Typography> */}
      {/* <ConfirmModal></ConfirmModal> */}
      <BaseContainer
        height={"100%"}
        width={"100%"}
        display={"flex"}
        padding={"1.5rem 1rem"}
        flexDirection={"column"}
        overflow={"auto"}
        gap={"1rem"}
      >
        <PokeHeader />
        <PokeList />
      </BaseContainer>
    </>
  );
};

export default PokemonPage;
