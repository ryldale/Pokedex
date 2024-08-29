"use client";
import { BaseContainer } from "@/shared/components/container";
import ItemList from "../components/itemlist";
import Header from "@/shared/components/header";
import { useEffect, useReducer } from "react";
import ItemReducer from "../reducer/item_reducer";
import { ItemInitState } from "../reducer/item_init";
import { ItemInitData } from "../functions/item_init";

const ItemPage = () => {
  const [state, dispatch] = useReducer(ItemReducer, ItemInitState);

  useEffect(() => {
    ItemInitData(dispatch, `item?limit=10&offset=0`);
  }, []);

  const handlePageChange = (page: number) => {
    const offset = (page - 1) * 10;
    ItemInitData(dispatch, `item?limit=10&offset=${offset}`);
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
        <Header
          title={"List of Pokémons Items"}
          caption={"Complete Pokémon item list"}
        />
        <ItemList state={state} onPageChange={handlePageChange}/>
      </BaseContainer>
    </>
  );
};

export default ItemPage;
