import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';

export default function PokemonCardList({ pokemons, isPokemonList }) {
    const [refresher, setRefresher] = useState(false);
    const [addedPokemonIds, setAddedPokemonIds] = useState([]);

    const add = (pokemon) => {
        const id = uuid();
        localStorage.setItem(id, JSON.stringify({...pokemon, uuid: id}));
        setAddedPokemonIds(prevIds => [...prevIds, pokemon.id]);
    }

    const remove = (pokemon) => {     
        localStorage.removeItem(pokemon.uuid);
        setRefresher(prev => !prev);
        setAddedPokemonIds(prevIds => prevIds.filter(id => id !== pokemon.id));
    }

    useEffect(() => {
        if (refresher){
            setRefresher(false)
        }
    } , [refresher])

    return (
        <div className="pokemon-grid">
            {pokemons.length !== 0 && 
            <>
                {pokemons.map(pokemon => (
                    <div key={pokemon.id} className='pokemon-card'>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemon-image' />
                        <p className='pokemon-name'>{pokemon.name}</p>
                        <p className='pokemon-id'>{pokemon.id}</p>
                        <p className='pokemon-type'>
                        {pokemon.types.map(type => (
                            <span key={type.slot}>{type.type.name} </span>
                        ))}
                        </p>
                        {isPokemonList && <button className='pokemon-button' onClick={() => add(pokemon)} disabled={addedPokemonIds.includes(pokemon.id)}>Add to Pokedex</button>}
                        {!isPokemonList && <button className='pokemon-button' onClick={() => remove(pokemon)}>Remove from Pokedex</button>}
                    </div>
                ))}
            </>
            }
        </div>
    );
}