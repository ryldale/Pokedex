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
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";

const ItemList = () => {
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
            {Items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img
                    src={item.sprite}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.effect}</TableCell>
                <TableCell>
                  <IconButton onClick={handleClick}>
                    <EllipsisHorizontalCircleIcon
                      width={"1.5rem"}
                      height={"1.5rem"}
                    />
                  </IconButton>
                  <Menu
                    id="pokemon-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Action 1</MenuItem>
                    <MenuItem onClick={handleClose}>Action 2</MenuItem>
                    <MenuItem onClick={handleClose}>Action 3</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
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
          <Typography variant="caption" color={color.n4}>
            {`Showing ${`1`}  to ${`10`} of ${`100`} results`}
          </Typography>
        </Box>
        <Pagination
          count={10}
          page={1}
          color="primary"
          //   onChange={PageHandler}
        />
      </Box>
    </>
  );
};

export default ItemList;
