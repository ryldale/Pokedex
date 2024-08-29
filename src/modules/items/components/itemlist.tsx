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
};

const ItemList = ({ state }: propType) => {
  console.log(state.detailedResults);
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
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

export default ItemList;
