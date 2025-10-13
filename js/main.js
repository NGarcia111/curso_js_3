const main = document.querySelector("main");
const buscador = document.getElementById("buscador");
const btnLimpiar = document.getElementById("btn-limpiar");
const listaCategoria = document.getElementById("category");

const categoriasBtn = categorylist.map(categoria => {
    return `<li><button class="category-btn" onclick="filtrarYMostrar('${categoria}')">${categoria}</button></li>`;
});

listaCategoria.innerHTML = categoriasBtn.join("");

// Función que se llama desde el onclick
function filtrarYMostrar(categoria) {
    const productosFiltrados = filtrarPorCategoria(categoria);
    mostrarCards(productosFiltrados);
};


function filtrarPorCategoria(categoria) {
    if (categoria === "Todos") {
        return newdata;
    }
    return newdata.filter(producto =>
        producto.category.includes(categoria)
    )
};

// Función para renderizar las tarjetas
function mostrarCards(productos) {
    const cards = productos.map(producto => {
        return `
        <div class="card">
            <img src="${producto.url}" alt="${producto.name}">
            <h2>${producto.name}</h2>
            <p>${producto.short_description}</p>
            <span>Precio: ${producto.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span>
            
            <br>
            <a href="detalles.html?prod=${producto.id}">Ver más</a>
        </div>
        `;
    });
    main.innerHTML = cards.join("");
};

mostrarCards(newdata);

function realizarBusqueda() {
    const terminoBusqueda = buscador.value.toLowerCase();
    const filtrados = newdata.filter(elemento =>
        elemento.name.toLowerCase().includes(terminoBusqueda) ||
        elemento.short_description.toLowerCase().includes(terminoBusqueda) ||
        elemento.long_description.toLowerCase().includes(terminoBusqueda) ||
        elemento.category.some(categoria => categoria.toLowerCase().includes(terminoBusqueda))
    );
    mostrarCards(filtrados);
}

buscador.addEventListener("input", realizarBusqueda);

// Función para limpiar el buscador
btnLimpiar.addEventListener("click", () => {
    buscador.value = ""; // Limpiar el input
    mostrarCards(newdata); // Mostrar todos los productos
    buscador.focus(); // Pone el foco de vuelta en el input
});