import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/8146/8146003.png"

  return (
    <div><img className='imgCarrito' src={imgCarrito} alt="Imagen de carrito"/>
    
    </div>
  )
}

export default CartWidget