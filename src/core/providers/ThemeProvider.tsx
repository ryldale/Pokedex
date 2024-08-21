"use client";

import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "../theme/main";

type PropType = {
  children: ReactNode;
};

export const MUITheme = ({ children }: PropType) => {
  const theme = createTheme(MainTheme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
