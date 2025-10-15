// 1. Obtener el ID del producto desde la URL
const params = new URLSearchParams(window.location.search);
const idProducto = parseInt(params.get("prod"));

// if idproduct no in [1, ... 25]

// 2. Buscar el producto en el array
const producto = data.find(p => p.id === idProducto);

// if producto // Si no se encontro

// 3. Mostrar los detalles en el HTML
const main = document.getElementById("detalle-producto");

if (producto) {
    main.innerHTML = `
    <div class="detalle-card">
    <img src="${producto.url}" alt="${producto.name}">
    <h2>${producto.name}</h2>
    <p>${producto.long_description}</p>
    <span>Precio: ${producto.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span>
    
    <br>
    <a href="index.html">← Volver al catálogo</a>
    </div>`;
}
