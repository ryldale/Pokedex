"use client";

import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "../theme/main";
import Navbar from "@/shared/components/Navbar";

type PropType = {
  children: ReactNode;
  hideNavbar?: boolean;
};

export const MUITheme = ({ children, hideNavbar = false }: PropType) => {
  const theme = createTheme(MainTheme);
  return (
    <ThemeProvider theme={theme}>
      {!hideNavbar && <Navbar />}
      {children}
    </ThemeProvider>
  );
};
