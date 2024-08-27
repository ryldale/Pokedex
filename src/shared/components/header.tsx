import { color } from "@/shared/constant/color";
import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type propType = {
  title: ReactNode;
  caption: ReactNode;
};

const Header = ({ title, caption }: propType) => {
  return (
    <Box>
      <Typography variant="h2"> {title} </Typography>
      <Typography variant="body2" color={color.n4}>
        {caption}
      </Typography>
    </Box>
  );
};

export default Header;
