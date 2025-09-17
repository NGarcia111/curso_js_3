const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943,
   mostrarInfo() {
    console.log(`${this.titulo} - ${this.autor} (${this.año})`);
  }
};

libro.mostrarInfo();

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    encendido: false,
    encender: ( ){
        this.encendido = true;
        console.log("El coche está encendido");
    },
    apagar(){
        this.encendido = false;
        console.log(`"El coche está apagado"`);
    }
};

coche.encender();
coche.apagar();

const cuenta = {
    titular: "Pepito" ,
    saldo: 0,
    depositar(monto){
        if(isNaN(Number(monto))){
            console.log("Error: debe ingresar un número.");
        }else if(monto <= 0){
            console.log("Error: el monto debe ser mayor que 0.");
        }else{
            this.saldo += monto;
            console.log(`Se depositaron ${monto}. Saldo actual: ${saldo}`);
        }
    },
    retirar(monto){
        if(isNaN(Number(monto))){
            console.log("Error: debe ingresar un número.");
        }else if(monto <= 0){
            console.log("Error: el monto debe ser mayor que 0.");
        }else if(monto > saldo){
            console.log(`Fondos insuficientes. Saldo actual: ${saldo}`);
        }else{
            this.saldo -= monto;
            console.log(`Se retiraron ${monto}. Saldo actual: ${saldo}`);
        }
    }
    
}
