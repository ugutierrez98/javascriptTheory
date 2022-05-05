'use strict'
//Rest y Spread
//Con los tres puntos que se muestran a acontinuacion es posiblle
//pasar los demas parametros dentro de un Array e imprimirlo
function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log("Frutas: ", restoDeFrutas);
}
listadoFrutas("Uva", "Fresa", "Mango", "Pera", "Sandia", "Kiwi", "Manzana");

//Spread

function listadoVerduras(verdura1, verdura2, ...restoDeVerduras){
    console.log("Fruta 1: ", verdura1);
    console.log("Fruta 2: ", verdura2);
    console.log("Frutas: ", restoDeVerduras);
}

var verduras = ["Tomate", "Jitomate"]
listadoVerduras(...verduras, "Lechuga", "Calabaza", "Papa", "Zanahoria", "Chicharo");