import { color } from "@/shared/constant/color";
import { Box, Typography } from "@mui/material";

const PokeHeader = () => {
  return (
    <Box>
      <Typography variant="h2"> List of Pokémons </Typography>
      <Typography variant="body2" color={color.n4}>
        Complete Pokémon list
      </Typography>
    </Box>
  );
};

export default PokeHeader;
