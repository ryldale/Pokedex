"use client";
import { color } from "@/shared/constant/color";
import { Box, Grid, IconButton, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import axios, { AxiosResponse } from "axios";
import { Favorite } from "@/modules/pokemon/types/pokemon-table_types";

const FavoriteList = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(
        "https://pokedexdb-d9d0c-default-rtdb.firebaseio.com/favorites.json",
        { signal: controller.signal }
      )
      .then((res: AxiosResponse) => {
        const favoritesData = Object.keys(res.data)
          .map((key) => ({ id: key, ...res.data[key] }))
          .filter((item) => item && item.name && item.sprite);

        setFavorites(favoritesData);
      })
      .catch((err: any) => {});

    return () => {
      controller.abort();
    };
  }, []);

  const handleDeleteFavorite = (id: string) => {
    const controller = new AbortController();
    axios
      .delete(
        `https://pokedexdb-d9d0c-default-rtdb.firebaseio.com/favorites/${id}.json`,
        { signal: controller.signal }
      )
      .then(() => {
        setFavorites((prevFavorites) =>
          prevFavorites.filter((favorite) => String(favorite.id) !== id)
        );
      })
      .catch((err: any) => {
        console.error("Error deleting favorite:", err);
      });

    return () => {
      controller.abort();
    };
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const paginatedFavorites = favorites.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <>
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
                onClick={() => handleDeleteFavorite(String(favorite.id))}
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
              <Typography variant="h3">{favorite.name}</Typography>
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
