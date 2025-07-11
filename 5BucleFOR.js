//Bucle FOR
//Ejercicio 1:
const prompt = require("prompt-sync")();
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Ejercicio 2:
let numero = Number(prompt("Ingrese un número para ver su tabla de multiplicar"))
console.log("Tabla del ${numero}:");
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
