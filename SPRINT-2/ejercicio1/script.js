function guardarIdea() {
    const nombre = document.getElementById("nombreProyecto").value;
    const notas = document.getElementById("notasProyecto").value;

    if (nombre.trim() === "" || notas.trim() === "") {
    alert("Por favor completa todos los campos.");
    return;
    }

    const contenedor = document.createElement("div");
    contenedor.style.marginTop = "20px";
    contenedor.style.border = "1px solid #ccc";
    contenedor.style.padding = "10px";
    contenedor.style.backgroundColor = "#f9f9f9";

    const titulo = document.createElement("h2");
    titulo.textContent = nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = notas;

    contenedor.appendChild(titulo);
    contenedor.appendChild(descripcion);

    document.body.appendChild(contenedor);

    // Limpia los campos
    document.getElementById("nombreProyecto").value = "";
    document.getElementById("notasProyecto").value = "";
}
