import { BaseContainer } from "@/shared/components/container";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Box, Button, Typography } from "@mui/material";
import Header from "@/shared/components/header";
import FavoriteList from "../components/favoritelist";

const FavoritePage = () => {
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
        padding={"1.5rem 1rem"}
        flexDirection={"column"}
        overflow={"auto"}
        gap={"1rem"}
      >
        <Header
          title={"List of Favorites"}
          caption={"Explore your Pokémon favorites"}
        />
        <FavoriteList />
      </BaseContainer>
    </>
  );
};

export default FavoritePage;
