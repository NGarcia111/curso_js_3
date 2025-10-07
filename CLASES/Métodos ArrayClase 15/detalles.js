const data = [
    {
    id: 1,
    nombre: "Toyota Corolla",
    precio: 85000,
    imagen: "https://images.unsplash.com/photo-1638618164682-12b986ec2a75?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Económico, confiable y cómodo para la ciudad."
    },
    {
    id: 2,
    nombre: "Ford Mustang",
    precio: 220000,
    imagen: "https://images.unsplash.com/photo-1597274394071-b7362c4a54ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Deportivo, potente y con diseño clásico."
    },
    {
    id: 3,
    nombre: "Chevrolet Camaro",
    precio: 210000,
    imagen: "https://images.unsplash.com/photo-1632686341382-15b4237345b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Agresivo y veloz, ideal para los amantes de la adrenalina."
    }
];

// 1. Obtener el ID del producto desde la URL
const params = new URLSearchParams(window.location.search);
const idProducto = parseInt(params.get("prod"));

// 2. Buscar el producto en el array
const producto = data.find(p => p.id === idProducto);

// 3. Mostrar los detalles en el HTML
const main = document.getElementById("detalle-producto");

if (producto) {
    main.innerHTML = `
    <div class="detalle-card">
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <p>${producto.descripcion}</p>
    <span>Precio: ${producto.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span>
    
    <br>
    <a href="index.html">← Volver al catálogo</a>
    </div>
`;
}
