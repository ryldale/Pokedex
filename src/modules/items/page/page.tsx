import { BaseContainer } from "@/shared/components/container";
import ItemList from "../components/itemlist";
import ItemHeader from "../components/itemheader";

const ItemPage = () => {
  return (
    <>
      <BaseContainer
        height={"100%"}
        width={"100%"}
        display={"flex"}
        padding={"1.5rem 1rem"}
        flexDirection={"column"}
        overflow={"auto"}
        gap={"1rem"}
      >
        <ItemHeader />
        <ItemList />
      </BaseContainer>
    </>
  );
};

export default ItemPage;
