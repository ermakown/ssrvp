// components/Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            Лабораторные работы
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
