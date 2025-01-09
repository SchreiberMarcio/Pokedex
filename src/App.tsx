import { CssBaseline, ThemeProvider } from "@mui/material/";
import { AppRoutes } from "./routes/AppRoutes";
import { theme } from "./config/theme/DefaultTheme";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}
