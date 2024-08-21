import { color } from "@/shared/constant/color";
import { PaletteOptions } from "@mui/material";

export const palette:PaletteOptions ={
  background:{
    default: color.n1,
  },
  primary: {
    main: color.primary,
    light: color.primary, 
    dark: color.primary
  },
  error:{
    main: color.error,
    light: color.error,
    dark: color.error,
  },
  success:{
    main: color.success,
    light: color.success,
    dark: color.success,
  },
  warning:{
    main: color.warning,
    light: color.warning,
    dark: color.warning,
  }
}