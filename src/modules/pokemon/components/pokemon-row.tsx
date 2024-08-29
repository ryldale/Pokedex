import ActionMenu from "@/shared/components/action";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { PokemonType } from "../types/pokemon-table_types";
import { PokemonDetails } from "../reducer/pokemon_init";
import { color } from "@/shared/constant/color";
import { formatName } from "@/shared/components/formatname";

type propType = {
  pokemon: PokemonDetails;
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
      <TableCell style={{ width: "5%" }}>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={50}
          height={50}
          style={{
            border: `1px solid ${color.n3}`,
            background: `${color.n1}`,
            borderRadius: "4px",
          }}
        />
      </TableCell>
      <TableCell style={{ width: "45%" }}>
        <Typography variant="body1">{formatName(pokemon.name)}</Typography>
      </TableCell>
      <TableCell style={{ width: "45%" }}>
        <Typography variant="body1">{pokemon.weight} kg</Typography>
      </TableCell>
      <TableCell style={{ width: "5%" }}>
        <IconButton onClick={handleClick}>
          <EllipsisHorizontalCircleIcon width={"1.5rem"} height={"1.5rem"} />
        </IconButton>
        <ActionMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </TableCell>
    </TableRow>
  );
};

export default PokemonRow;
