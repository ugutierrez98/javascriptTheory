//Plantillas de texto:

var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus apellidos");

//var fullname = "Mi nombre es " + nombre + " "+ apellidos;
var fullname = `
<h1>Hola que tal </h1>
<h3>Mi nombre es ${nombre} </h3>
    
`;
document.write(fullname);