'use strict'

//alerta

//alert("Esta es mi alerta");

//Confirmacion

//confirm("¿Estas seguro de querer continuar?");

var miResultado = confirm("¿Estas seguro de querer continuar?");
console.log(miResultado);//aceptar true cancelar false

//Ingreso datos
var miResultado = prompt("¿Que edad tienes?", 18);
console.log(miResultado);//lo que agreguemos, es un string no numero

var miResultado = prompt("¿Que edad tienes?", 18);
console.log(typeof miResultado);//String tipo de dato