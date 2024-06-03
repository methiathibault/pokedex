import React, { useEffect, useState } from 'react'
import './PokemonInfo.jsx'
import PokemonInfo from './PokemonInfo.jsx'

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function tata() {
          const test = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20', {
                method: 'GET',
            })
                .then(response => response.json())
                toto(test.results)
            console.log('test', test)

                // .then(data => setPokemons(data.results))
                // .catch(error => console.error(error))
        }
        tata()
    }, [])

    
    async function toto (data) {
        data.map(async pokemon => {
            console.log(pokemon)
         await fetch(pokemon.url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setPokemons(prevPokemon => [...prevPokemon, data]))
            .catch(error => console.error(error))
    })
}
    console.log('pokemons', pokemons)
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px' }}>
            {pokemons.length !== 0 && 
            <>
            {pokemons.map(pokemon => (
                <div key={pokemon.id}>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    {pokemon.name} 
                </div>
            ))}
            </>
        }
        </div>
    )
}
