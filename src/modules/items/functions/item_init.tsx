import { pokemonAPI } from "@/core/api/api";
import { ReducerActionType } from "@/shared/types/ReducerAction";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { Item } from "../reducer/item_init";

export const ItemInitData = (
  dispatch: Dispatch<ReducerActionType>,
  url: string
) => {
  pokemonAPI
    .get(url)
    .then((res: AxiosResponse) => {
      console.log(res.data);
      dispatch({ type: "ITEM_DATA", data: { axiosData: res } });

      const itemDetailsPromises = res.data.results.map((item: Item) =>
        pokemonAPI.get(item.url)
      );

      Promise.all(itemDetailsPromises)
        .then((responses) => {
          const detailedData = responses.map((response) => response.data);
          dispatch({ type: "ITEM_DETAILS_SUCCESS", data: detailedData });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
