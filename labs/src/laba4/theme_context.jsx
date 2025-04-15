// src/ThemeContext.jsx
import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const ThemeContext = createContext();

export function useThemeMode() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? '#ffffff' : '#121212';
    document.body.style.color = mode === 'light' ? '#000000' : '#ffffff';
  }, [mode]);

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'light' ? '#ffffff' : '#121212',
            paper: mode === 'light' ? '#f5f5f5' : '#1e1e1e',
          },
          text: {
            primary: mode === 'light' ? '#000000' : '#ffffff',
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
