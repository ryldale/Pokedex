import ActionMenu from "@/shared/components/action";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { PokemonType } from "../types/pokemon-table_types";
import { Pokemon, PokemonDetails } from "../reducer/pokemon_init";
import { color } from "@/shared/constant/color";
import { formatName } from "@/shared/components/formatname";
import { useRouter } from "next/navigation";
import { pokemonAPI } from "@/core/api/api";
import { AxiosResponse } from "axios";

type propType = {
  pokemon: Pokemon;
};

const PokemonRow = ({ pokemon }: propType) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  );

  useEffect(() => {
    const controller = new AbortController();
    pokemonAPI
      .get(pokemon.url, { signal: controller.signal })
      .then((res: AxiosResponse) => {
        console.log(res.data);
        setPokemonDetails(res.data);
      })
      .catch((err: any) => {});

    return () => {
      controller.abort();
    };
  }, [pokemon.url]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewClick = () => {
    router.push(`/pokemons/${pokemonDetails?.id}`);
  };

  const handleMarkAsFavotire = () => {
    console.log("mark as favorite");
  };

  const open = Boolean(anchorEl);

  return (
    <TableRow>
      <TableCell style={{ width: "5%" }}>
        <img
          src={pokemonDetails?.sprites.front_default}
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
        <Typography variant="body1">{pokemonDetails?.weight} kg</Typography>
      </TableCell>
      <TableCell style={{ width: "5%" }}>
        <IconButton onClick={handleClick}>
          <EllipsisHorizontalCircleIcon width={"1.5rem"} height={"1.5rem"} />
        </IconButton>
        <ActionMenu
          anchorEl={anchorEl}
          open={open}
          onMarkAsFavorite={handleMarkAsFavotire}
          onViewClick={handleViewClick}
          handleClose={handleClose}
        />
      </TableCell>
    </TableRow>
  );
};

export default PokemonRow;
