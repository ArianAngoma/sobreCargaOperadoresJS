function crearProducto(nombre = "Sin nombre", precio = 0) {
    console.log(`Producto: ${nombre} - Precio: ${precio}`)
}

function crearProductoNombre(nombre) {
    crearProducto(nombre, 100)
}

function crearProductoPrecio(precio) {
    crearProducto("Camisa", precio)
}

crearProducto()
crearProductoNombre("Corrector")
crearProductoPrecio(75)