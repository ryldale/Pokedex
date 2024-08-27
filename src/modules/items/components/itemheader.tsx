import { color } from "@/shared/constant/color";
import { Box, Typography } from "@mui/material";

const ItemHeader = () => {
  return (
    <Box>
      <Typography variant="h2"> List of Items </Typography>
      <Typography variant="body2" color={color.n4}>
        Complete Pokémon item list
      </Typography>
    </Box>
  );
};

export default ItemHeader;
