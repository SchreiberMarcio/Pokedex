import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPokemonsServices } from "../../../config/services/pokemon-api/pokemons.service";
import { setLastVisitedPage } from "../navigation/navigation.slice";

interface FetchAllPokemon {
  limit: number;
  page: number;
}

export const fetchAllPokemons = createAsyncThunk(
  "pokemon/getAll",
  async (obj: FetchAllPokemon, {dispatch}) => {
    const result = await getAllPokemonsServices(obj.page, obj.limit);

    if (result.ok) {
      dispatch(setLastVisitedPage(obj.page));
    }
    return result;
  }
);
