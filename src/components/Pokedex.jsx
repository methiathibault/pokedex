import React, {useState, useEffect} from 'react'
import PokemonCardList from './PokemonCardList'

export default function Pokedex() {
    const [input, setInput] = useState('');
    const [searchedPokemon, setSearchedPokemon] = useState(null);

    function pokemonJsonToObject(pokemonJson) {
        return JSON.parse(pokemonJson);
    }        

    function getPokemon(pokemon) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => response.json())
            .then(data => setSearchedPokemon(data))
            .catch(error => console.error(error))
    }

    const pokemons = Object.keys(localStorage).map(key => pokemonJsonToObject(localStorage.getItem(key)));

    return (
        <div className='pokedex'>
            <div className='pokemon-search'>
                <input type='text' onChange={(e) => setInput(e.target.value)} className='pokemon-input'/>
                <button className='pokemon-button' onClick={() => getPokemon(input)}>Search</button>
            </div>
            {searchedPokemon && <PokemonCardList pokemons={[searchedPokemon]} isPokemonList={true} />}
            <PokemonCardList pokemons={pokemons} isPokemonList={false} />
        </div>
    )
}
