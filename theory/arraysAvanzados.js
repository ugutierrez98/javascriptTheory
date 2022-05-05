//Arrays - arreglos -matrices
//Coleccion de tipo de datos
var nombre = "ulises";
var nombres = ["lola", "juan", "carlos", "jose"];

//En objetos

var lenguajes = new Array("php", "js", "python", "go");

console.log(nombres.length);
console.log(lenguajes);

var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que "+ nombres.length);
}else{
    alert("El usuario seleccionado es: " + nombres[elemento]);
}