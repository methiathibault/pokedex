import React, {useState, useEffect} from 'react'
import PokemonCardList from './PokemonCardList'

export default function Pokedex() {
    function pokemonJsonToObject(pokemonJson) {
        return JSON.parse(pokemonJson);
    }        

    const pokemons = Object.keys(localStorage).map(key => pokemonJsonToObject(localStorage.getItem(key)));

    return (
        <PokemonCardList pokemons={pokemons} isPokemonList={false} />
    )
}
