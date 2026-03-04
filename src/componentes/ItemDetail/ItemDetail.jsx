import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Slide, toast } from "react-toastify"

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {


  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const { agregarAlCarrito } = useContext(CarritoContext)


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)


    const item = { id, nombre, precio }
    agregarAlCarrito(item, cantidad)
    toast.success('Compra agregada al carrito', {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
      transition: Slide,
    });
  }


  return (
    <div className="contenedorItem">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <img src={img} alt={nombre} />
      <p>{descripcion}</p>

      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail