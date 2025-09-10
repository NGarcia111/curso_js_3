let opcion = prompt("Elige una opcion: \n1.Suma de dos numeros positivos \n2.Cuenta regresiva mayor a 10 \n3.Interpolacion nombre y edad")

console.log("Opcion " + opcion)

switch (opcion) {
    case "1":
        // Pedir 2 números y sumarlos. Deben ser enteros positivos sino mostrar un alert de error.
        let num1 = Number(prompt('Dame un numero positivo'));
        let num2 = Number(prompt('Dame otro numero positivo'));

        // Validar que sean números y positivos
        if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
            alert("Error: ambos valores deben ser numeros y numeros positivos.");
        } else {
            let suma = num1 + num2;
            console.log(`La suma es: ${suma}`);
        }
        break;
    case "2":
        // Dedir un número mayor a 10 y mediante un for hacer una cuenta regresiva hasta 0.
        let num = Number(prompt("Ingrese un numero mayor que 10"))
        if (isNaN(num)) {
            alert("Error: Debe ser un numero")
        } else if (num > 10) {
            for (let i = num; i >= 0; i--) {
                console.log(i);
            };
            console.log("Cabooom!!!")
        } else {
            alert("Error: El numero ingresado debe ser mayor que 10")
        }
        break;
    case "3":
        // Pedir un nombre y una edad e interpolarlas.
        let nombre = prompt("Dame tu nombre:");
        let edad = Number(prompt("Dame tu edad:"));

        // Validar que el nombre no esté vacío, no contenga espacios ni números, y que la edad sea un número positivo.
        if (!nombre || nombre.trim() === "" || nombre.includes(" ") || /[0-9]/.test(nombre) || isNaN(edad) || edad <= 0) {
            alert("Error: el nombre no debe tener espacios ni números, debe ser valido y la edad debe ser positiva.");
        } else {
            console.log(`Hola ${nombre}, tienes ${edad} años.`);
        }
        break;
    default:
        alert("Error: Ingrese una opcion valida")
}
