import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Tienda Computacion</h1>
      </Link>  

        <nav>
            <ul>
                <li>
                  <Link to= "categoria/Componentes">Componentes</Link>
                </li>
                <li>
                  <Link to="categoria/Perifericos">Perifericos</Link>
                  </li>
                <li>
                  <Link to="categoria/Notebooks">Notebooks</Link>
                  </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar