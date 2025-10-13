const main = document.querySelector("main");
const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btn-buscar");
const listaCategoria = document.querySelector('section ul');

const categoriasBtn = categorylist.map(categoria => {
    return `<li><button class="category-btn" data-category="${categoria}">${categoria}</button></li>`;
});

listaCategoria.innerHTML = categoriasBtn.join("");

// Agregar event listeners a los botones de categoría
listaCategoria.addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
        const categoria = e.target.dataset.category;
        const productosFiltrados = filtrarPorCategoria(categoria);
        mostrarCards(productosFiltrados);
    }
});

function filtrarPorCategoria(categoria) {
    if (categoria === "Todos") {
        return newdata;
    }
    return newdata.filter(producto =>
        producto.category.includes(categoria)
    );
}

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
}

mostrarCards(newdata)


function realizarBusqueda() {
    const terminoBusqueda = buscador.value.toLowerCase();
    const filtrados = newdata.filter(elemento =>
        elemento.long_description.toLowerCase().includes(terminoBusqueda) ||
        elemento.name.toLowerCase().includes(terminoBusqueda)
    );
    mostrarCards(filtrados);
}

buscador.addEventListener("input", realizarBusqueda);