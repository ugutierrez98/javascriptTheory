//Es una funcion anonima que no tiene ningun nombre
//y que se le pasa como parametro a otra funcion

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function(dato){
    console.log("la suma es: ", dato);
},
function(dato){
    console.log("La suma por ds es: ", (dato*2));
});