console.log("Bienvenido a la calculadora")
console.log("Ingrese dos numeros")
let first_number = Number(prompt("Primer numero (El mayor)"));
let second_number = Number(prompt("Segundo numero (El menor)"));
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


console.log("Opción elegida:", opcion);

let resultado; 

if (opcion == 1) {
    resultado = first_number + second_number;
    console.log("Resultado de la suma:", resultado);
} else if (opcion == 2) {
    resultado = first_number - second_number; 
    console.log("Resultado de la resta:", resultado);
} else if (opcion == 3) {
    resultado = first_number * second_number; 
    console.log("Resultado de la multiplicación:", resultado);
} else if (opcion == 4) {
    if (second_number == 0) {
        console.log("Error: no se puede dividir entre 0.");
    } else {
        resultado = first_number / second_number; 
        console.log("Resultado de la división:", resultado);
    }
} else {
    console.log("Opción inválida. Elegí 1, 2, 3 o 4.");
}
