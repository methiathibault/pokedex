import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PokemonList from './PokemonList'
import Pokedex from './Pokedex'

export default function RoutesComponent() {
    return (
        <Routes>
            <Route path='/' element={<PokemonList />} />
            <Route path='/pokedex' element={<Pokedex />} />
        </Routes>
    )
}
