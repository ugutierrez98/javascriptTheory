//Rest

function listadoFrutas(fruta1, fruta2){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
}

listadoFrutas("Naranja", "Manzana");

//En el siguiente caso solo se imprimira BMW

function listadoAutos(auto1, auto2, resto_de_autos){
    console.log("Auto 1: ", auto1);
    console.log("Auto 2: ", auto2);
    console.log(resto_de_autos);
}

listadoAutos("Mustang", "Camaro", "BMW", "Mercedes")

//En el siguiente caso se imprimiran los demas elementos en un Array

function listadoVerduras(verdura1, verdura2, ...resto_de_verduras){
    console.log("Verdura 1: ", verdura1);
    console.log("Verdura 2: ", verdura2);
    console.log(resto_de_verduras);
}

listadoFrutas("Tomate", "Jitomate", "Calabaza", "Chayote", "Zanahoria");

//Spread

var verduras = ["Tomate", "Jitomate"];

listadoFrutas(...verduras, "Calabaza", "Chayote", "Zanahoria");
