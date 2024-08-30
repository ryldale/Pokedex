import { color } from "@/shared/constant/color";
import { Components, Theme } from "@mui/material";

export const component: Components<Omit<Theme, "components">> = {
  // =================================================
  //  Button
  // =================================================
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      contained: {
        color: color.n1,

        "&.MuiButton-containedPrimary": {
          background: color.bgPrimary,
        },

        "&:disabled": {
          background: color.n2,
          color: color.n3,
        },
      },
      root: {
        borderRadius: "0.125rem",
        padding: "0.8rem 1rem",
        textTransform: "unset",
      },
    },
  },
  // =================================================
  // List Item Button
  // =================================================
  MuiListItemButton: {
    styleOverrides: {
      root: {
        padding: "0.8rem 1rem",
        textTransform: "unset",
        background: "tranparent",
        color: color.primary,
        "&.Mui-selected": {
          backgroundColor: color.bgPrimary,
          color: color.primary,
          border: `1px solid ${color.primary}`,
        },
      },
    },
  },
  // =================================================
  // Icon Button
  // =================================================
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: color.primary,
      },
    },
  },
  // =================================================
  // Pagination
  // =================================================
  MuiPagination: {
    styleOverrides: {
      root: {
        display: "flex",
        alignItems: "center",
        fontSize: "0.875rem",
      },
      ul: {
        padding: 0,
        margin: 0,
        display: "flex",
        listStyle: "none",
      },
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        borderRadius: "0.25rem",
        color: color.n4,
        fontSize: "0.875rem",
        "&:hover, &.Mui-selected": {
          backgroundColor: color.primary,
          color: color.n1,
          borderRadius: "0.25rem",
        },
      },
      previousNext: {
        color: color.primary,
        fontSize: "0.875rem",
        "&:hover": {
          backgroundColor: color.primary,
        },
      },
      ellipsis: {
        color: color.n4,
        "&:hover": {
          backgroundColor: "transparent",
          color: color.n4,
        },
      },
    },
  },
  // =================================================
  // Table
  // =================================================
  MuiTable: {
    styleOverrides: {
      root: {
        borderCollapse: "collapse",
        width: "100%",
      },
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        borderRadius: "0.25rem",
        border: `2px solid ${color.n2}`,
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        "& th": {
          backgroundColor: color.lightBlue,
          fontFamily: "Galindo, sans-serif",
          fontWeight: 400,
          fontSize: "0.875rem",
          textTransform: "uppercase",
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {},
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        "&:nth-of-type(odd)": {
          backgroundColor: color.n1,
        },
        "&:nth-of-type(even)": {
          backgroundColor: color.n2,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: "0.8rem 1rem",
        border: "none",
      },
    },
  },
  // =================================================
  //  Modal
  // =================================================
  MuiModal: {
    styleOverrides: {
      root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
};
