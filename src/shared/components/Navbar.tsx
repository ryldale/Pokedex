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
      marginBottom={'24px'}
    >
      <Box>
        <Image src="/img/Logo.png" alt="pokemon-logo" width={122} height={46} />
      </Box>
      <Box>
        <ListItem>
          <ListItemButton
            sx={{ background: color.bgPrimary, marginRight: "8px" }}
          >
            Pokemon
          </ListItemButton>
          <ListItemButton
            sx={{ background: color.bgPrimary, marginLeft: "8px" }}
          >
            Items
          </ListItemButton>
        </ListItem>
      </Box>
      <Box>
        <Button variant="text">
          <StarIcon width={17.84} height={17.84} />
          <Typography variant="h3">List of Favorites</Typography>
        </Button>
      </Box>
    </BaseContainer>
  );
};

export default Navbar;
