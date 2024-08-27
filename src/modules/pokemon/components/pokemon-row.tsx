import ActionMenu from "@/shared/components/action";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import { IconButton, TableCell, TableRow } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { PokemonType } from "../types/pokemon-table_types";

type propType = {
  pokemon: PokemonType;
};

const PokemonRow = ({ pokemon }: propType) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <TableRow key={pokemon.id}>
      <TableCell>
        <img src={pokemon.sprite} alt={pokemon.name} width={50} height={50} />
      </TableCell>
      <TableCell>{pokemon.name}</TableCell>
      <TableCell>{pokemon.weight}</TableCell>
      <TableCell>
        <IconButton onClick={handleClick}>
          <EllipsisHorizontalCircleIcon width={"1.5rem"} height={"1.5rem"} />
        </IconButton>
        <ActionMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </TableCell>
    </TableRow>
  );
};

export default PokemonRow;
