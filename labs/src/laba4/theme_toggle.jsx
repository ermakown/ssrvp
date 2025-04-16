// src/components/ThemeToggle.jsx
import React from 'react';
import { IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeMode } from 'D:/React/ssrvp/labs/src/laba4/theme_context.jsx';

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Box sx={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Box>
  );
}
