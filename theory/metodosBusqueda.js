//Busquedas a patir de un caracter

var texto1 = "uno primero uno";
var texto1 = "dos segundo dos";

var busquedauno = texto1.indexOf("uno");
console.log(busquedauno);//Muestra en que lugaraparece la palabra uno
var busquedados = texto1.lastIndexOf("uno");
console.log(busquedados);//Muestra en que lugaraparece la palabra uno la ultima vez
var busquedatres = texto1.search("uno");
console.log(busquedatres);//Muestra en que lugaraparece la palabra uno
var busquedacuatro = texto1.match("uno");
console.log(busquedacuatro);//Devuelve coleccion de resultados que encuentre solo una coincidencia
var busquedacinco = texto1.match(/uno/g);
console.log(busquedacinco);//Devuelve coleccion de resultados que encuentre de forma global
var busquedaseis = texto1.substr(4,7);
console.log(busquedaseis);//Imprime -- primero
var busquedasiete = texto1.charAt(7);
console.log(busquedasiete);//Muestra una letra en concreto fijamdo su respectiva posicion
var busquedaocho = texto1.startsWith("uno");
console.log(busquedaocho);//Muestra texto true o false si esta frase aparece al inicio
var busquedanueve = texto1.includes("primero");
console.log(busquedanueve);//Marca true o false si es que se encuentra la palabra
