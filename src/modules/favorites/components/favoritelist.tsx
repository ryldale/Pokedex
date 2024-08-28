"use client";
import { color } from "@/shared/constant/color";
import {
  Box,
  Grid,
  IconButton,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { FavoritePokemons } from "../constant/sampledata";
import { StarIcon } from "@heroicons/react/24/solid";

const FavoriteList = () => {
  return (
    <>
      <Grid container spacing={2}>
        {FavoritePokemons.map((favorite, index) => (
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
                onClick={(e) => {
                  console.log("Star Clicked");
                }}
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
              <Typography variant="body1">{favorite.number}</Typography>
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
            {`Showing ${`1`}  to ${`10`} of ${`100`} results`}
          </Typography>
        </Box>
        <Pagination
          count={10}
          page={1}
          //   onChange={PageHandler}
        />
      </Box>
    </>
  );
};

export default FavoriteList;
