const equipo1 = {
    nombre: "Boca",
    color_camiseta: "rojo",
    patrocinador: "puma",
    puntos: 44,
    puesto: 2,
    info_equipo() {
        console.table([this.nombre, this.color_camiseta, this.patrocinador, this.puntos, this.puesto])
    }
}

const equipo2 = {
    nombre: "Junior",
    color_camiseta: "azul",
    patrocinador: "nike",
    puntos: 46,
    puesto: 1,
    info_equipo() {
        console.table([this.nombre, this.color_camiseta, this.patrocinador, this.puntos, this.puesto])
    }
}

let respuesta = Number(prompt("Elige 1 para el equipo1 y 2 para el equipo2"))

function mostrar_equipo(numero_equipo) {
    if (isNaN(numero_equipo)) {
        alert("error, debiste ingresar un numero")
    } else if (numero_equipo == 1) {
        // console.table(equipo1)
        equipo1.info_equipo()
    } else if (numero_equipo == 2) {
        equipo2.info_equipo()
    } else {
        alert("error, numero fuera de rango")
    }
}

mostrar_equipo(respuesta)