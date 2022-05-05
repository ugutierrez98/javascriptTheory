//Funcion Constructora

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

/* 
Generar objetos, que van a ser instancias de lafuncion constructora
*/

var autoNuevo0 = new auto("Tesla", "Model X", 2018);
var autoNuevo1 = new auto("Ferrari", "Model A", 2020);
var autoNuevo2 = new auto("Tesla", "Model Z", 2022);
/*
Mandamos a llamar por consola
autoNuevo0
autoNuevo1
autoNuevo2
*/