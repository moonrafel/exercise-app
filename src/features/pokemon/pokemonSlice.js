import { createSlice } from "@reduxjs/toolkit";
import Axios from 'axios'

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        searchString: "",
        pokemonList: []
    },

    reducers: {

        setPokemon: (state, action) => {
            state.pokemonList = action.payload
        },

        setSearch: (state, action) => {
            state.searchString = action.payload
        },
    }
})


export const { setPokemon, setSearch } = pokemonSlice.actions
export default pokemonSlice.reducer

export function searchString(data) {
    return async (dispatch) => {
        console.log(data)
        dispatch(setSearch(data))
    }
}

export function fetchPokemon(searchString) {
    return async (dispatch) => {
        let response = await Axios.get("https://pokeapi.co/api/v2/pokemon/" + searchString)

        dispatch(setPokemon(response.data))
    }
}