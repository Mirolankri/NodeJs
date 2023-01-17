import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#11cb5f',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#4a4a4a',
      },
    },
  });

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
        <AppBar position="sticky" color="secondary">
        <Toolbar>
            in tool
        </Toolbar>
        </AppBar>
    </ThemeProvider>
  )
}

export default NavBar