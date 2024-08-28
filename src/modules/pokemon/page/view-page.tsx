import { BaseContainer } from "@/shared/components/container";
import { color } from "@/shared/constant/color";
import { StarIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Box, Button, Typography } from "@mui/material";

const PokemonViewPage = () => {
  return (
    <>
      <BaseContainer
        display={"flex"}
        padding={"20px 16px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBottom={"24px"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Button variant="text">
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
      >
        <Box
          display="flex"
          justifyContent="space-between"
          borderBottom={"2px dashed"}
          borderColor="divider"
          borderRadius={1}
          padding={"1.5rem 1rem"}
        >
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                alt="Bulbasaur"
                style={{ width: 175, height: "auto", objectFit: "cover" }}
              />
            </Box>
            <Box>
              <Typography variant="body1" color={color.n4}>
                #0001
              </Typography>
              <Typography variant="h1">Bulbasaur</Typography>
              <Typography variant="body1" color={color.n4}>
                Weight:
              </Typography>
              <Typography variant="h3">15.2 lbs</Typography>
              <Typography variant="body1" color={color.n4}>
                Abilities:
              </Typography>
              <Typography variant="h3">
                Overgrow, Chlorophyll (hidden ability)
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"start"}>
            <Button variant="text">
              <StarIcon
                width={"1.5rem"}
                height={"1.5rem"}
                style={{ marginRight: "8px" }}
              />
              <Typography variant="h3">Mark as Favorites</Typography>
            </Button>
          </Box>
        </Box>
        <Box></Box>
        <Box></Box>
      </BaseContainer>
    </>
  );
};

export default PokemonViewPage;
