import React, { useEffect, useState } from 'react'

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(1)
    const pokemonPerPage = 20

    useEffect(() => {
        getAllPokemons(page)
    }, [page])

    async function getAllPokemons(page) {
        const offset = (page - 1) * pokemonPerPage
        const allPokemons = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonPerPage}&offset=${offset}`, {
                method: 'GET',
            })
                .then(response => response.json())
            getAllInfos(allPokemons.results)
      }

    async function getAllInfos (data) {
        setPokemons([]);
        const pokemonsData = await Promise.all(data.map(async pokemon => {
            return fetch(pokemon.url, {
            method: 'GET',
        })
            .then(response => response.json())
            .catch(error => console.error(error))
        }))
        const sortedPokemonsData = pokemonsData.sort((a, b) => a.id - b.id);
        setPokemons(sortedPokemonsData)
    }

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
            <button onClick={() => setPage(prevPage => prevPage - 1)} disabled={page === 1}>Previous</button>
            <button onClick={() => setPage(prevPage => prevPage + 1)}>Next</button>
        </div>
    )
}
