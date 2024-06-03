import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PokemonList from './PokemonList'

export default function RoutesComponent() {
    return (
        <Routes>
            <Route path='/' element={<PokemonList />} />
        </Routes>
    )
}
