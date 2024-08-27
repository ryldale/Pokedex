import Image from "next/image";
import { BaseContainer } from "./BaseContainer";
import {
  Box,
  Button,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { StarIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <BaseContainer>
      <Box>
        <Image src="/img/Logo.png" alt="pokemon-logo" width={122} height={46} />
      </Box>
      <Box>
        <ListItem>
          <ListItemButton>Pokemon</ListItemButton>
          <ListItemButton>Items</ListItemButton>
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
