import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#006b42aa",
    },
    secondary: {
      main: "#808080",
    },
    text: {
      primary: "#fafafa",
      secondary: "#ffffff",
    },
    background: {
      default: "#000000",
      paper: "#9e0091b8",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#006038ad",
          color: "#FFFFFF",
          fontWeight: "bolder",
          "&:hover": {
            backgroundColor: "#03ba49bb",
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
            color: "#ba7103bc", 
            transform: "scale(1.2)", 
          },
        },
      },
    },
  },
});
