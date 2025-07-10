const prompt = require("prompt-sync")();

let anionacimiento = Number(prompt("Ingrese su fecha de nacimiento"));
let anioactual = new Date().getFullYear();
let actual= anioactual - anionacimiento;

console.log("su edad es,",actual,"Años");
