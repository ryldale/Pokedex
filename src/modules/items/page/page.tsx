import { BaseContainer } from "@/shared/components/container";
import ItemList from "../components/itemlist";
import Header from "@/shared/components/header";

const ItemPage = () => {
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
          title={"List of Pokémons Items"}
          caption={"Complete Pokémon item list"}
        />
        <ItemList />
      </BaseContainer>
    </>
  );
};

export default ItemPage;
