import React from 'react'
import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext)

    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/8146/8146003.png"

  return (
    <div>
      <Link to="/cart">
        <img className='imgCarrito' src={imgCarrito} alt="Imagen de carrito"/>
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
      
    
    </div>
  )
}

export default CartWidget