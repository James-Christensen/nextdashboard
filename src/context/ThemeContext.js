"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export default ThemeProvider;
