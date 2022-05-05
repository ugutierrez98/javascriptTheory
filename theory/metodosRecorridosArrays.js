/*
Array con Objetos adentro
Usar metodos de recorrido
Lista de articulos que tenga el nombre y costo del articulo
*/
var articulos = [
    {nombre: "Bici", costo: 3000 },
    {nombre: "Television", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 1000},
    {nombre: "Laptop", costo: 2000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]
//Traer alticulos menosres o iguales a 500 pesos
//Filtrar cosas especificas
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

/*
En consola solo mandamos a llamar
articulosFiltrados
Ahora con MAP
Mapea todo el contenido del Array
*/
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
/*
Find nos ayuda a encontrar algo dentro del articulo
*/
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"//Que sea estrictamente igual a laptop
});
/*
For each, a diferencia de los demas este no genera un nuevo array,
simplemente filtra sobre el array sin modificarlo y no regresa informacion
*/
articulos.forEach(function(articulo){
    console.log(articulo.nombre);//Solo imprime el nombre de ls articulos
});
/*
Some, nos va a regresar de igual forma una validacion de verdadero
o falso para articulos que cumplan esa validacion
*/

var articuloBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;//true
});

/*
.push()
El método .push() nos permite agregar uno o más elementos al final de un array.

.shift()
Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

Bonus Track
Si ya entendiste cómo funciona .shift() aplicar .pop() te será pan comido . 
El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. Usemos el mismo ejemplo pero usando este método.
*/