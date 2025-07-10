//Condicional IF:
//Ejercicio 1:
const prompt = require("prompt-sync")();
let edad = Number(prompt("Ingrese su edad"));
if (edad >= 18 ){
    console.log ("✅ Puedes entrar");
}else {
    console.log("🚫 No puedes entrar");
}

//Ejecicio 2:
let numero1 = Number(prompt("Ingrese un número"));
if (numero1 >0){
    console.log("Es Positivo");
}else if(numero1<0){
    console.log("Es Negativo");
}else {
    console.log ("Es igual a Cero");
}













