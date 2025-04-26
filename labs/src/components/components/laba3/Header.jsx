// src/components/components/laba3/Header.jsx

import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from "D:/React/ssrvp/labs/src/laba4/theme_toggle.jsx"; // путь может отличаться, проверь!

export default function Header({ onDrawerToggle }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onDrawerToggle} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">Главная</Button>
          <Button color="inherit" component={Link} to="/about">О себе</Button>
        </Box>

        {/* Кнопка смены темы */}
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
