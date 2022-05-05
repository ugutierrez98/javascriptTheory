'use strict'
//Operadores:
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;
 alert('El resultado de la suma es ' + operacion);

 //Tipos de datos:

 var numero_entero = 44;
 var cadena_texto = "Hola que tal";
 var verdadero_falso = true;

 console.log(cadena_texto);

 //funciones de conversion:

var numero_falso = "33";//Aqui 33 es un string

console.log(Number(numero_falso+7));//String
console.log(Number(numero_falso)+7); //Realiza la suma, String a numero
console.log(parseFloat(numero_falso)+7); // Conversion a flotante

//convertir numero a strong con toString:

var numero_a_convertir =    12;
console.log(numero_a_convertir.toString());

//Para verificar esto:

var numeroVerificarUno =    10;
console.log(typeof numeroVerificarUno.toString());

var umeroVerificarDos =    15;
console.log(typeof umeroVerificarDos.toString());

//Devolver por consola el tipo de dato:

var cadenadetexto = "Hola como estas";

console.log(typeof cadenadetexto);