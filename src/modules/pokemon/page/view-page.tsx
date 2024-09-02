"use client";
import { pokemonAPI } from "@/core/api/api";
import { BaseContainer } from "@/shared/components/container";
import { color } from "@/shared/constant/color";
import { StarIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Box, Button, Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../reducer/pokemon_init";
import { formatName } from "@/shared/components/formatname";
import { markAsFavorite } from "../functions/markasfavorite";
import { ConfirmModal, StatusModal } from "../components/modal";

const PokemonViewPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const [pokemonData, setPokemonData] = useState<PokemonDetails | null>(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      pokemonAPI
        .get(`pokemon/${id}`)
        .then((res: AxiosResponse) => {
          setPokemonData(res.data);
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
  }, [id]);
  const formattedId = id.toString().padStart(6, "0");

  const abilities = pokemonData?.abilities
    .map((ability) => ability.ability.name)
    .join(", ");

  const calculateTotalStats = (stats: any) => {
    return stats.reduce((total: any, stat: any) => total + stat.base_stat, 0);
  };
  const totalStats = pokemonData ? calculateTotalStats(pokemonData.stats) : 0;

  const handleMarkAsFavorite = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirm = async () => {
    await markAsFavorite(pokemonData, pokemonData?.name || "Unknown Pokémon");
    setIsConfirmModalOpen(false);
    setIsStatusModalOpen(true);
  };

  const handleStatusClose = () => {
    setIsStatusModalOpen(false);
  };
  return (
    <>
      {isConfirmModalOpen && (
        <ConfirmModal
          closeHandler={() => setIsConfirmModalOpen(false)}
          onConfirm={handleConfirm}
          pokemonName={pokemonData?.name || "Unknown Pokémon"}
        />
      )}

      {isStatusModalOpen && (
        <StatusModal
          closeHandler={handleStatusClose}
          onConfirm={handleStatusClose}
          pokemonName={pokemonData?.name || "Unknown Pokémon"}
        />
      )}
      <BaseContainer
        display={"flex"}
        padding={"20px 16px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBottom={"24px"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            variant="text"
            onClick={() => {
              router.back();
            }}
          >
            <ChevronLeftIcon width={"1.5rem"} height={"1.5rem"} />
            <Typography variant="body1" sx={{ ml: 1 }}>
              BACK
            </Typography>
          </Button>
        </Box>
      </BaseContainer>
      <BaseContainer
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        overflow={"auto"}
        gap={"1rem"}
        padding={"1.5rem 1rem"}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          pb={"32px"}
          borderBottom={"2px dashed"}
          borderColor="divider"
          borderRadius={1}
        >
          <Box display="flex" alignItems="center">
            <Box
              mr={2}
              sx={{
                borderRadius: "4px",
                border: `1px solid ${color.n3}`,
                display: "flex",
              }}
            >
              <img
                src={pokemonData?.sprites.front_default}
                alt={pokemonData?.name}
                style={{ width: 175, height: "auto", objectFit: "cover" }}
              />
            </Box>
            <Box>
              <Typography variant="body1" color={color.n4}>
                {`#${formattedId}`}
              </Typography>
              <Typography variant="h1">
                {formatName(pokemonData?.name)}
              </Typography>
              <Typography variant="body1" color={color.n4}>
                Weight:
              </Typography>
              <Typography variant="h3">{pokemonData?.weight} kg</Typography>
              <Typography variant="body1" color={color.n4}>
                Abilities:
              </Typography>
              <Typography variant="h3">{abilities}</Typography>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"start"}>
            <Button variant="text" onClick={handleMarkAsFavorite}>
              <StarIcon
                width={"1.5rem"}
                height={"1.5rem"}
                style={{ marginRight: "8px" }}
              />
              <Typography variant="h3">Mark as Favorites</Typography>
            </Button>
          </Box>
        </Box>
        <Box
          pb={"32px"}
          borderBottom={"2px dashed"}
          borderColor="divider"
          borderRadius={1}
        >
          <Typography variant="h2">Base Stats</Typography>
          {pokemonData?.stats.map((stats) => (
            <Box
              display="flex"
              padding={"8px 16px"}
              border={`1px solid ${color.n2}`}
            >
              <Box width={"140px"} mr={"24px"}>
                <Typography variant="body1" fontWeight={600}>
                  {formatName(stats.stat.name)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">{stats.base_stat}</Typography>
              </Box>
            </Box>
          ))}
          <Box
            display="flex"
            padding={"8px 16px"}
            border={`1px solid ${color.n2}`}
          >
            <Box width={"140px"} mr={"24px"}>
              <Typography variant="h3" fontWeight={600}>
                Total
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3">{totalStats}</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h2">Base Stats</Typography>
          <audio controls key={pokemonData?.cries.latest}>
            <source src={pokemonData?.cries.latest} type="audio/ogg" />
          </audio>
          <audio controls key={pokemonData?.cries.legacy}>
            <source src={pokemonData?.cries.legacy} type="audio/ogg" />
          </audio>
        </Box>
      </BaseContainer>
    </>
  );
};

export default PokemonViewPage;
