import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonList: {},
  },

  reducers: {
    setPokemon: (state, action) => {
      state.pokemonList = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;

export function fetchPokemon(searchString) {
  return async (dispatch) => {
    let response = await Axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + searchString
    );
    dispatch(setPokemon(response.data));
  };
}
