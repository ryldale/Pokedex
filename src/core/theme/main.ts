import { ThemeOptions } from "@mui/material";
import { palette } from "./options/palette";
import { breakpoints } from "./options/breakpoints";
import { zIndex } from "./options/zIndex";
import { Typography } from "./options/typography";

export const MainTheme: ThemeOptions = {
    typography: Typography,
    // components: component,
    zIndex: zIndex,
    palette: palette,
    breakpoints: breakpoints
  };
  