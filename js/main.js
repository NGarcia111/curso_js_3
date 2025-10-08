const main = document.querySelector("main");


const cards = data.map(producto => {
    return `
    <div class="card">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.descripcion}</p>
        <span>Precio: ${producto.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span>
        
        <br>
        <a href="detalles.html?prod=${producto.id}">Ver más</a>
    </div>
    `;
    });

main.innerHTML = cards.join("");
