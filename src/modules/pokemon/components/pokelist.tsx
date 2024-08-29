"use client";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { PokemonHeader, Pokemons } from "../constant/pokemon-header_table";
import { color } from "@/shared/constant/color";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import { MouseEvent, useState } from "react";
import ActionMenu from "@/shared/components/action";
import PokemonRow from "./pokemon-row";
import { PokemonInitStateType } from "../reducer/pokemon_init";

type propType = {
  state: PokemonInitStateType;
};

const PokeList = ({ state }: propType) => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {PokemonHeader.map((pokemon, index) => (
                <TableCell key={index}>{pokemon.header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {state.detailedResults.map((pokemon) => (
              <PokemonRow key={pokemon.id} pokemon={pokemon} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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

export default PokeList;
