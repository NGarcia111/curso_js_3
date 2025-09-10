

function obtenerEstacion() {
  let dia = Number(prompt("Ingresa el día:"));
  let mes = Number(prompt("Ingresa el número del mes del 1 al 12:"));
  let anio = Number(prompt("Ingresa el año:"));

  let estacion = "";

  switch (mes) {
    case 12:
    case 1:
    case 2:
      estacion = "Verano";
      break;
    case 3:
    case 4:
    case 5:
      estacion = "Otoño";
      break;
    case 6:
    case 7:
    case 8:
      estacion = "Invierno";
      break;
    case 9:
    case 10:
    case 11:
      estacion = "Primavera";
      break;
    default:
      estacion = "Mes inválido";
  }

  return `El ${dia}/${mes}/${anio} corresponde a la estación: ${estacion}`;
}

let resultado = obtenerEstacion();
alert(resultado);