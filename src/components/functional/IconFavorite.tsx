import { useDispatch } from "react-redux";
import { Pokemon } from "../../config/interfaces/pokemon.interface";
import {
  addPokemon,
  listPokedex,
  removePokemon,
} from "../../store/modules/pokedex/pokedex.slice";
import { useAppSelector } from "../../store/hooks";
import favorite from "../../assets/images/favorite.svg";
import favoriteSelected from "../../assets/images/favoriteSelected.svg";

interface IconFavoriteProps {
  pokemon: Pokemon;
}

export function IconFavorite({ pokemon }: IconFavoriteProps) {
  const pokedex = useAppSelector((state) => listPokedex(state.pokedex));
  const dispatch = useDispatch();

  // Armazena a verificação de favorito
  const isFavorite = pokedex.some((a) => a.id === pokemon.id);

  // Função para lidar com favoritos
  const handleFavorite = (pokemonSelected: Pokemon): void => {
    if (isFavorite) {
      dispatch(removePokemon(pokemonSelected.id));
    } else {
      dispatch(addPokemon(pokemonSelected));
    }
  };

  return (
    <button
      onClick={() => handleFavorite(pokemon)}
      role="img"
      aria-label={
        isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
      }
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        marginLeft: "1rem",
        marginBottom: "0.3rem",
      }}
    >
      <img
        src={isFavorite ? favoriteSelected : favorite}
        alt={isFavorite ? "Favoritado" : "Não favoritado"}
        style={{
          display: "block",
          width: "24px",
          height: "24px",
        }}
      />
    </button>
  );
}
