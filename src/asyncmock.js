const misProductos = [
    {id: 1, nombre: "Placa de video", precio: 500000, img:"./public/img/placadevideo.png", idCat: "Componentes", stock:5},
    {id: 2, nombre: "Teclado", precio: 40000, img:"../public/img/teclado.png", idCat: "Perifericos", stock:5},
    {id: 3, nombre: "Mouse", precio: 30000, img:"../public/img/mouse.png", idCat: "Perifericos", stock:5},
    {id: 4, nombre: "Notebook", precio: 800000, img:"../public/img/notebook.jpg", idCat: "Notebooks", stock:5},
]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout (()=>{
            resolve(misProductos)
        }, 1000)
    })
}

export const getUnProducto = (id) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const producto = misProductos.find(Item =>Item.id === id)
            resolve(producto)
        }, 1000)
    })
}

//Categorias

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const getProductosPorCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 1000)
    })
}
