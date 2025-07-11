//Bucle WHILE
//Ejecicio 1:
const prompt = require("prompt-sync")();

let limite= Number(prompt("Ingrese un numero"))
let contador= 1
while (contador <= limite){
    console.log(contador);
    contador++;
}

//Ejercicio 2
let contraseña= Number(prompt("Ingrese su contraseña"));

while (contraseña!==1234){
    console.log("Contraseña incorrecta intente nuevamente"); 
    contraseña=Number(prompt("ingrese su contraseña"))
}
   console.log("contraseña corecta,bienvenida");