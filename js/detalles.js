// 1. Obtener el ID del producto desde la URL
const params = new URLSearchParams(window.location.search);
const idProducto = parseInt(params.get("prod"));

// 2. Buscar el producto en el array
const producto = newdata.find(p => p.id === idProducto);

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
