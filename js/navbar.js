const titulos = ["Index"]
// titulos.push(...categorylist)
// Se podia hacer un objeto que tuviera de clave la variable sin acentos y el valor con acentos
let menu = [];
for (let titulo of titulos) {
    menu.push(`<li><a href="./${titulo.toLowerCase().replaceAll(" ", "_")}.html">${titulo}</a></li>`);
}

const header = document.querySelector('header nav ul')
header.innerHTML = menu.join("")
