"use client";

import { Box, styled } from "@mui/material";
import { color } from "../constant/color";

type propType = {
  clickable?: string;
};

export const BaseContainer = styled(Box)(({ clickable }: propType) => ({
  backgroundColor: color.n1,
  borderRadius: "1rem",
}));
