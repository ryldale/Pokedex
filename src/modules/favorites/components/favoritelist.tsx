"use client";
import { color } from "@/shared/constant/color";
import { Box, Grid, IconButton, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import axios, { AxiosResponse } from "axios";
import { Favorite } from "@/modules/pokemon/types/pokemon-table_types";
import { ConfirmModal, StatusModal } from "./modal";
import { formatName } from "@/shared/components/formatname";

const FavoriteList = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState<boolean>(false);
  const [item, setItem] = useState<Favorite | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const controller = new AbortController();
    Promise.all([
      axios.get(
        "https://pokedexdb-d9d0c-default-rtdb.firebaseio.com/pokemon/favorites.json",
        { signal: controller.signal }
      ),
      axios.get(
        "https://pokedexdb-d9d0c-default-rtdb.firebaseio.com/item/favorites.json",
        { signal: controller.signal }
      ),
    ])
      .then(([pokemonRes, itemRes]) => {
        const pokemonFavorites = Object.keys(pokemonRes.data || {}).map(
          (key) => ({
            id: key,
            ...pokemonRes.data[key],
            type: "pokemon",
          })
        );

        const itemFavorites = Object.keys(itemRes.data || {}).map((key) => ({
          id: key,
          ...itemRes.data[key],
          type: "item",
        }));

        setFavorites([...pokemonFavorites, ...itemFavorites]);
      })
      .catch((err) => {
        console.error("Error fetching favorites:", err);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const handleDeleteFavorite = (id: string, type: "pokemon" | "item") => {
    const favoriteItem = favorites.find(
      (fav) => String(fav.id) === id && fav.type === type
    );
    setItem(favoriteItem || null);
    setIsConfirmModalOpen(true);
  };
  const handleConfirm = () => {
    if (item) {
      const controller = new AbortController();
      axios
        .delete(
          `https://pokedexdb-d9d0c-default-rtdb.firebaseio.com/${item.type}/favorites/${item.id}.json`,
          { signal: controller.signal }
        )
        .then(() => {
          setFavorites((prevFavorites) =>
            prevFavorites.filter(
              (favorite) =>
                favorite.id !== item.id || favorite.type !== item.type
            )
          );
          setIsConfirmModalOpen(false);
          setIsStatusModalOpen(true);
        })
        .catch((err) => {
          console.error("Error deleting favorite:", err);
        });

      return () => {
        controller.abort();
      };
    }
  };

  const handleStatusClose = () => {
    setIsStatusModalOpen(false);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const paginatedFavorites = favorites
    .filter((fav) => fav && fav.sprite)
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const getName = (favorite: Favorite) => {
    return favorite.name || "Unknown Name";
  };

  return (
    <>
      {isConfirmModalOpen && item && (
        <ConfirmModal
          closeHandler={() => setIsConfirmModalOpen(false)}
          onConfirm={handleConfirm}
          name={getName(item)}
        />
      )}
      {isStatusModalOpen && item && (
        <StatusModal
          closeHandler={handleStatusClose}
          onConfirm={handleStatusClose}
          name={getName(item)}
        />
      )}
      <Grid container spacing={2}>
        {paginatedFavorites.map((favorite, index) => (
          <Grid key={index} item xs={2}>
            <Box
              padding={"0.375rem"}
              sx={{
                height: 150,
                width: 200,
                border: `1px solid ${color.n3}`,
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <IconButton
                onClick={() =>
                  handleDeleteFavorite(String(favorite.id), favorite.type)
                }
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  color: "gold",
                }}
              >
                <StarIcon width={"1.5rem"} height={"1.5rem"} />
              </IconButton>
              <img
                src={favorite.sprite}
                alt={favorite.name}
                style={{ width: "100px", height: "auto" }}
              />
              <Typography variant="body1">{favorite.id}</Typography>
              <Typography variant="h3">{formatName(favorite.name)}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        alignSelf={"stretch"}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Typography variant="caption" color={color.primary}>
            {`Showing ${(page - 1) * itemsPerPage + 1} to ${Math.min(
              page * itemsPerPage,
              favorites.length
            )} of ${favorites.length} results`}
          </Typography>
        </Box>
        <Pagination
          count={Math.ceil(favorites.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default FavoriteList;
