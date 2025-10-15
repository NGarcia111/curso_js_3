const main = document.querySelector("main");
const buscador = document.getElementById("buscador");
const listaCategoria = document.getElementById("category");
const barraBusqueda = document.querySelector(".search-container");

const categoriasBtn = categorylist.map(categoria => {
    return `<li><button class="category-btn" onclick="filtrarYMostrar('${categoria}')">${categoria}</button></li>`;
});

listaCategoria.innerHTML = categoriasBtn.join("");

let productosFiltrados = data

// Función que se llama desde el onclick
function filtrarYMostrar(categoria) {
    productosFiltrados = filtrarPorCategoria(categoria);
    mostrarCards(productosFiltrados);
};


function filtrarPorCategoria(categoria) {
    if (categoria === "Todos") {
        return data;
    }
    return data.filter(producto =>
        producto.category.includes(categoria)
    )
};

// Función para renderizar las tarjetas
function mostrarCards(productos) {
    if (productos.length === 0) {
        main.innerHTML = `<h2 class="no-results">Lo sentimos, no encontramos coincidencias</h2>`;
        return;
    }
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

mostrarCards(data);

function limpiarBuscador() {
    buscador.value = ""; // Limpiar el input
    mostrarCards(data); // Mostrar todos los productos
    quitarBoton(); // Eliminar el botón
    buscador.focus(); // Pone el foco de vuelta en el input
}

function mostrarBoton() {
    const btnLimpiar = document.getElementById("btn-limpiar");
    if (!btnLimpiar) {
        const btn = document.createElement("button");
        btn.id = "btn-limpiar";
        btn.innerHTML = "❌";
        btn.addEventListener("click", limpiarBuscador);
        barraBusqueda.appendChild(btn);
    }
}

function quitarBoton() {
    const btnLimpiar = document.getElementById("btn-limpiar");
    if (btnLimpiar) {
        btnLimpiar.removeEventListener("click", limpiarBuscador);
        btnLimpiar.remove();
    }
}

function realizarBusqueda() {
    const terminoBusqueda = buscador.value.toLowerCase();
    if (terminoBusqueda !== "") {
        mostrarBoton();
    } else {
        quitarBoton();
        mostrarCards(productosFiltrados);
    }
    const filtrados = productosFiltrados.filter(elemento =>
        elemento.name.toLowerCase().includes(terminoBusqueda) ||
        elemento.short_description.toLowerCase().includes(terminoBusqueda) ||
        elemento.long_description.toLowerCase().includes(terminoBusqueda) ||
        elemento.category.some(categoria => categoria.toLowerCase().includes(terminoBusqueda))
    );
    mostrarCards(filtrados);
}


buscador.addEventListener("input", realizarBusqueda);

// Función para limpiar el buscador