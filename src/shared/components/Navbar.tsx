import Image from "next/image";
import { BaseContainer } from "./container";
import {
  Box,
  Button,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { StarIcon } from "@heroicons/react/24/solid";
import { color } from "../constant/color";

const Navbar = () => {
  return (
    <BaseContainer
      display={"flex"}
      padding={"14px 16px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      marginBottom={"24px"}
    >
      <Box>
        <Image src="/img/Logo.png" alt="pokemon-logo" width={122} height={46} />
      </Box>
      <Box>
        <ListItem>
          <ListItemButton style={{ marginRight: "16px" }}>
            <Typography variant="h3">Pokémons</Typography>
          </ListItemButton>
          <ListItemButton>
            <Typography variant="h3">Items</Typography>
          </ListItemButton>
        </ListItem>
      </Box>
      <Box>
        <Button variant="text">
          <StarIcon
            width={"1.5rem"}
            height={"1.5rem"}
            style={{ marginRight: "8px" }}
          />
          <Typography variant="h3">List of Favorites</Typography>
        </Button>
      </Box>
    </BaseContainer>
  );
};

export default Navbar;
