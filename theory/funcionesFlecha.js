//Las funciones de flecha es una forma de definir
//funciones de callback de un manera mucho mas limpia y clara
//sustituye la palabra function por la flecha

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, (dato) => {
    console.log("la suma es: ", dato);
},
(dato) => {
    console.log("La suma por ds es: ", (dato*2));
});