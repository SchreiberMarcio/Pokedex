import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { IconFavorite } from "../components/functional/IconFavorite";
import { useAppSelector } from "../store/hooks";
import { listPokedex } from "../store/modules/pokedex/pokedex.slice";
import { useNavigate } from "react-router-dom";

export function Pokedex() {
  const pokedex = useAppSelector((state) => listPokedex(state.pokedex));
  const navigate = useNavigate();

  const renderPokemonCard = (pokemon: (typeof pokedex)[0]) => (
    <Grid item sm={6} md={4} lg={3} key={pokemon.id} width={"18rem"}>
      <Card sx={{ minWidth: "80%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            sx={{ width: "auto", margin: "0 auto", mt: "1rem" }}
            image={pokemon.image}
            alt={`Imagem de ${pokemon.name}`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
              fontWeight="bolder"
            >
              {pokemon.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tamanho: {pokemon.size} Hectogramas
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconFavorite pokemon={pokemon} />
      </Card>
    </Grid>
  );

  const renderEmptyMessage = () => (
    <Typography fontSize="1.5rem" textAlign="center" mt={5}>
      Você ainda não tem nenhum Pokémon favorito. <br />
      Mas{" "}
      <Link
        onClick={() => navigate("/")}
        sx={{
          cursor: "pointer",
          textDecoration: "none",
          color: "#9e0091b8",
          "&:hover": { color: "#f500e0b8" },
        }}
      >
        clique aqui
      </Link>{" "}
      para ir até a página e adicionar.
    </Typography>
  );

  return (
    <Box component="main">
      <Container
        sx={{
          width: "100%",
          maxWidth: "100%",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          sx={{ minWidth: "100%" }}
          justifyContent="center"
          mt={9}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: "100%" }}
            justifyContent="center"
          >
            {pokedex.length > 0
              ? pokedex.map((pokemon) => renderPokemonCard(pokemon))
              : renderEmptyMessage()}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
