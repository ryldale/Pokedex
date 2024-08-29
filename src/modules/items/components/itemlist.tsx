"use client";
import {
  Box,
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
import { color } from "@/shared/constant/color";
import { ItemHeader, Items } from "../constant/items-header_table";
import { MouseEvent, useState } from "react";
import ItemRow from "./item-row";
import { ItemInitStateType } from "../reducer/item_init";

type propType = {
  state: ItemInitStateType;
  onPageChange: (page: number) => void;
};

const ItemList = ({ state, onPageChange }: propType) => {
  const itemsPerPage = 10;

  const getCurrentPage = (
    nextUrl: string | null,
    previousUrl: string | null
  ) => {
    let url: URL;

    if (nextUrl) {
      url = new URL(nextUrl);
    } else if (previousUrl) {
      url = new URL(previousUrl);
    } else {
      return 1;
    }

    const offset = parseInt(url.searchParams.get("offset") || "0", 10);
    return Math.floor(offset / itemsPerPage) + 1;
  };

  const page = getCurrentPage(state.next, state.previous);
  const currentPage = page - 1;
  const totalPages = Math.ceil((state.count || 0) / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, state.count || 0);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {ItemHeader.map((pokemon, index) => (
                <TableCell key={index}>{pokemon.header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {state.detailedResults.map((item, index) => (
              <ItemRow key={index} item={item} />
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
            {`Showing ${startIndex} to ${endIndex} of ${
              state.count || 0
            } results`}
          </Typography>
        </Box>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => {
            event.preventDefault();
            onPageChange(value);
          }}
        />
      </Box>
    </>
  );
};

export default ItemList;
