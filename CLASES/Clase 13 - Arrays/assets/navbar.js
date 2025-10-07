const titulos = ["Index", "Pantalones", "Camisas", "Zapatos"]

let menu = [];
for (let titulo of titulos) {
    menu.push(`<li><a href="./${titulo.toLowerCase()}.html">${titulo}</a></li>`);
}

const header = document.querySelector('header nav ul')
header.innerHTML = menu.join("")
