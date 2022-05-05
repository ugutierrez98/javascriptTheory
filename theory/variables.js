'use strict'
//Variables: Conntenedor de informacion
var pais = "España"; //String
var continente = "Europa"; // String

console.log(pais, continente)

//Diferencia entre Let & Var (Alcance)
// var es para uso global
// let se ve afectado en bloques
// Con Var:
var numero = 40;
console.log(numero); //Valor 40
if(true){
    var numero = 50;
    console.log(numero); // Valor 50
}
console.log(numero) // 50

// Con Let:
var texto = "Curso";
console.log(texto); // Curso
if (true){
    let texto = "Cursodos";
    console.log(texto); // Cursodos
}
console.log(texto); //Curso

//Constantes
// Es como una variable per su valor no puede cambiar

var web = "www.google.com";
const ip = "192.88.0.12";

web = "http://victorrobles.es";

console.log(web, ip);