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
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    return (
      pathname === path ||
      (path === "/pokemons" &&
        (pathname === "/" || pathname.startsWith("/pokemons")))
    );
  };

  const handleNavigate = (path: string) => () => {
    router.push(path);
  };

  return (
    <BaseContainer
      display={"flex"}
      padding={"14px 16px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      marginBottom={"24px"}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Image src="/img/Logo.png" alt="pokemon-logo" width={122} height={46} />
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <ListItem>
          <ListItemButton
            style={{ marginRight: "16px" }}
            selected={isActive("/pokemons")}
            onClick={handleNavigate("/pokemons")}
          >
            <Typography variant="h3">Pokémons</Typography>
          </ListItemButton>
          <ListItemButton
            selected={isActive("/items")}
            onClick={handleNavigate("/items")}
          >
            <Typography variant="h3">Items</Typography>
          </ListItemButton>
        </ListItem>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Button variant="text" onClick={handleNavigate("/favorites")}>
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
