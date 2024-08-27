import { color } from "@/shared/constant/color";
import { Components, Theme } from "@mui/material";

export const component: Components<Omit<Theme, "components">> = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      contained: {
        color: color.n1,

        "&.MuiButton-containedPrimary": {
          background: color.primary,
        },

        "&:disabled": {
          background: color.n2,
          color: color.n3,
        },
      },
      root: {
        borderRadius: "0.5rem",
        padding: "0.8rem 1rem",
        textTransform: "unset",
      },
    },
  },
};
