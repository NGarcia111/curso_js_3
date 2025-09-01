console.log("Bienvenido a la calculadora")
console.log("Ingrese dos numeros")
let first_number = prompt("Primer numero (El mayor)")
let second_number = prompt("Segundo numero (El menor)")
console.log(first_number, second_number)
console.log("1. sumar")
console.log("2. restar")
console.log("3. multiplicar")
console.log("4. dividir")
let opcion = prompt("Elige una opcion (1.Sumar, 2.Restar, 3.Multiplicar, 4.Dividir)")
console.log(opcion)

if (opcion == 1) {
    console.log("Suma")
} else if (opcion == 2) {
    console.log("Resta")
} else if (opcion == 3) {
    console.log("Multiplicacion")
} else if (opcion == 4) {
    console.log("Division")
}
