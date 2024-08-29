import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import { IconButton, TableCell, TableRow } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import ActionMenu from "@/shared/components/action";
import { ItemDetails } from "../reducer/item_init";
import { formatName } from "@/shared/components/formatname";
import { color } from "@/shared/constant/color";

type propType = {
  item: ItemDetails;
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
  const effect = item.effect_entries.map((effect) => effect.short_effect);

  return (
    <TableRow key={item.id}>
      <TableCell style={{ width: "5%" }}>
        <img
          src={item.sprites.default}
          alt={item.name}
          width={50}
          height={50}
          style={{
            border: `1px solid ${color.n3}`,
            background: `${color.n1}`,
            borderRadius: "4px",
          }}
        />
      </TableCell>
      <TableCell style={{ width: "10%" }}>{formatName(item.name)}</TableCell>
      <TableCell style={{ width: "80%" }}>{effect}</TableCell>
      <TableCell style={{ width: "5%" }}>
        <IconButton onClick={handleClick}>
          <EllipsisHorizontalCircleIcon width={"1.5rem"} height={"1.5rem"} />
        </IconButton>
        <ActionMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </TableCell>
    </TableRow>
  );
};

export default ItemRow;
