import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAllPokemons } from "../../store/modules/pokemons/pokemons.action";
import {
  setLastVisitedPage,
  setNumberPage,
} from "../../store/modules/navigation/navigation.slice";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const lastVisitedPage = useAppSelector(
    (state) => state.navigation.lastVisitedPage
  );

  // Rota principal
  const HOME_PATH = "/";
  const POKEDEX_PATH = "/pokedex";

  // Lógica para navegar até a página inicial
  const handlePokemonClick = () => {
    dispatch(setLastVisitedPage(0));
    dispatch(setNumberPage(1));
    dispatch(fetchAllPokemons({ page: 0, limit: 20 }));
    navigate(HOME_PATH);
  };

  // Lógica para retornar à última página visitada
  const handleVoltarClick = () => {
    dispatch(fetchAllPokemons({ page: lastVisitedPage || 0, limit: 20 }));
    navigate(HOME_PATH);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* Título principal */}
          <Typography
            onClick={handlePokemonClick}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }}
            aria-label="Navegar para a página inicial"
          >
            POKEMON
          </Typography>

          {/* Botão "Voltar" visível apenas em páginas diferentes de HOME_PATH */}
          {location.pathname !== HOME_PATH && (
            <Button
              onClick={handleVoltarClick}
              color="inherit"
              sx={{ mr: "1rem" }}
              aria-label="Voltar para a última página"
            >
              Voltar
            </Button>
          )}

          {/* Botão para navegar até a Pokedex */}
          <Button
            onClick={() => navigate(POKEDEX_PATH)}
            color="inherit"
            aria-label="Ir para a Pokedex"
          >
            Pokedex
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
