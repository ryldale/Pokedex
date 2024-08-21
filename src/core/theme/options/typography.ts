import { TypographyOptions } from "@mui/material/styles/createTypography";
import { SxProps } from "@mui/material";

interface CustomTypographyOptions extends TypographyOptions {
    label1?: SxProps;
    label2?: SxProps;
  }

export const Typography: CustomTypographyOptions  = {
  fontSize: 16,
  h1: {
    fontFamily: "Galindo, sans-serif",
    fontWeight: 400,
    lineHeight: "normal",
    fontStyle: "normal",
    fontSize: "1.75rem",
    overflowWrap: "break-word",
  },
  h2: {
    fontFamily: "Galindo, sans-serif",
    fontWeight: 400,
    lineHeight: "normal",
    fontStyle: "normal",
    fontSize: "1.25rem",
    overflowWrap: "break-word",
  },
  h3: {
    fontFamily: "Galindo, sans-serif",
    fontWeight: 400,
    lineHeight: "normal",
    fontStyle: "normal",
    fontSize: "1rem",
    overflowWrap: "break-word",
  },
  h4: {
    fontFamily: "Galindo, sans-serif",
    fontWeight: 400,
    lineHeight: "normal",
    fontStyle: "normal",
    fontSize: "0.875rem",
    overflowWrap: "break-word",
  },
  body1: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    lineHeight: "normal",
    fontStyle: "normal",
    fontSize: "1rem",
    overflowWrap: "break-word",
  },
  body2: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    lineHeight: "normal",
    fontStyle: "normal",
    fontSize: "1rem",
    overflowWrap: "break-word",
  },
  label1: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    lineHeight: "normal",
    fontStyle: "normal",
    fontSize: "0.875rem",
    overflowWrap: "break-word",
  },
  label2: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    lineHeight: "normal",
    fontStyle: "normal",
    fontSize: "0.875rem",
    overflowWrap: "break-word",
  },
  button: {
    fontFamily: "Galindo, sans-serif",
    fontWeight: 400,
    lineHeight: "normal",
    fontStyle: "normal",
    fontSize: "1.75rem",
    overflowWrap: "break-word",
  },
};
