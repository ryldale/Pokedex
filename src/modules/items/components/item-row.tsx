import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import { IconButton, TableCell, TableRow } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { ItemType } from "../types/item-table_types";
import ActionMenu from "@/shared/components/action";

type propType = {
  item: ItemType;
};

const ItemRow = ({ item }: propType) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("Item Name:", item.name);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <TableRow key={item.id}>
      <TableCell>
        <img src={item.sprite} alt={item.name} width={50} height={50} />
      </TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.effect}</TableCell>
      <TableCell>
        <IconButton onClick={handleClick}>
          <EllipsisHorizontalCircleIcon width={"1.5rem"} height={"1.5rem"} />
        </IconButton>
        <ActionMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </TableCell>
    </TableRow>
  );
};

export default ItemRow;
