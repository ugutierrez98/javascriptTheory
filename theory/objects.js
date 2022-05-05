/*
En consola para conocer la infprmacion del objeto
miAuto
Ahora para conocer un dato preciso
miAuto.marca

var miAuto = {
    marca: "Toyota",//Palabra clave y valor
    modelo: "Corolla",
    annio: 2020
};

La propiedad que lleva una funcion como valor es un metodo
*/
var miAuto = {
    marca: "Toyota",//Palabra clave y valor
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
//Mandar a llamr el metodo
//miAuto.detalleDelAuto();