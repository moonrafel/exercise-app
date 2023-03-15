import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PokeComp from '../components/PokeComp'
import { fetchPokemon } from '../features/pokemon/pokemonSlice'


function Pokemon() {

    const dispatch = useDispatch()
    const [searchString, setSearchString] = useState("")
    const pokemonObj = useSelector((state) => state.pokemon.pokemonList)

    // const renderPokemon = () => {
    //     return pokemonObj.map((pokemon) => {
    //         return <PokeComp pokemon={pokemon} />
    //     })
    // }

    const inputHandler = (e) => {
        setSearchString(e.target.value)
    }

    return (
        <div className='grid place-items-center'>
            <div>
                POKEMON
            </div>
            <div className='flex m-auto gap-3'>
                <input
                    type="text"
                    onChange={inputHandler}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => { dispatch(fetchPokemon(searchString)) }}
                >SEARCH</button>
            </div>
            <div>
                {pokemonObj.name ?
                    <PokeComp pokemon={pokemonObj} />
                    : null
                }
            </div>
        </div>
    )
}

export default Pokemon