import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Tienda Computacion</h1>
      /</Link>  

        <nav>
            <ul>
                <li>
                  <Link to="categoria/componentes">Componentes</Link>
                </li>
                <li>
                  <Link to="categoria/perifericos">Perifericos</Link>
                  </li>
                <li>
                  <Link to="categoria/notebooks">Notebooks</Link>
                  </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar