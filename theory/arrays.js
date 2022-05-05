var frutas = ["manzana", "platano", "cereza", "fresa"];

console.log(frutas);//no de elementos y elementosde array

console.log(frutas.length);//podemos ver el numero de elementos

console.log(frutas[2]);//acceder al array cereza

var masFrutas = frutas.push("Uvas");//Añade uvas al array, al final

var ultimo = frutas.pop("Uvas");//Elimina uvas del array

var nuevalongitud = frutas.unshift("peras");//Añade peras al array, al inicio

var primero = frutas.shift("peras");//Elimina peras del array

var posicion = frutas.indexOf("cereza");//Posicion del elemento dentro del array