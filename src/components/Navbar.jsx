import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../styles/International_Pokémon_logo.svg.png'

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} alt="Pokemon logo" />
            <Link to='/'>Listes des Pokémons</Link>
            <Link to='/pokedex'>Pokedex</Link>
        </div>
    )
}
