import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#d89504aa",
    },
    secondary: {
      main: "#808080",
    },
    text: {
      primary: "#f93200",
      secondary: "#ff0606",
    },
    background: {
      default: "#f4ea6a",
      paper: "#e5c600bd",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#604500ae",
          color: "#FFFFFF",
          fontWeight: "bolder",
          "&:hover": {
            backgroundColor: "#ba7103bc",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "box-shadow 0.3s ease, transform 0.2s ease",
          "&:hover": {
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", 
            transform: "translateY(-5px)", 
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "color 0.3s ease, transform 0.2s ease",
          "&:hover": {
            color: "#ba7103bc", // Muda a cor do ícone ao passar o mouse
            transform: "scale(1.2)", // Aumenta ligeiramente o ícone ao passar o mouse
          },
        },
      },
    },
  },
});
