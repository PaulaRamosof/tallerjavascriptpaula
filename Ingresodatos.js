const prompt = require("prompt-sync")();

let anionacimiento = Number(prompt("Ingrese su fecha de nacimiento"));
let anioactual = new Date().getFullYear();
let actual= anioactual - anionacimiento;

console.log("su edad es,",actual,"Años");


let numero1 = Number(prompt("Ingrese primer numero"));
let numero2 = Number(prompt("Ingrese segundo numero"));
let resultado= numero1 + numero2

console.log("su resultado es: ",resultado);