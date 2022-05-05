var texto1 = "Estas tomando el curso de Javascript"
var texto2 = "   Se recortara el string  ";

//Remplaza las plabras:
var reemplazo = texto1.replace("Javascript", "Symfony");

//Recortar string a partir de caracter que requiera:
var reemplazo = texto1.slice(5);
var reemplazo = texto1.slice(5, 10);

//Introduce todo dento de un array:
var reemplazo = texto1.split();
//Introduce todo dento de un array con una coleccion de elementos:
var reemplazo = texto1.split(" ");

//Recortar espacios por delante y por detras, dejando string limpio:
var reemplazo = texto2.trim();
//Aqui lo imprime con espacios al inicio y al final
console.log(texto2);

console.log(reemplazo);