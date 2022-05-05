'use strict'
//For, sabemos la cantidad de repeticiones - variable
//Cantidades definidas de iteraciones

let numeros = 100;

for (let i = 0; i < numeros; i++){
    console.log(i);

    debugger;
}

//While, sabemos cuando queremos parar de repetir
//Depende de una condicion, puede hacerer que la-
// iteracion sea 1 vez o n veces

//Comprobamos condicion para despues ejecutar bloque de codigo

let year = 2018;

while(year <= 2050){
    console.log("Estamos en el año" + year);
    year++;
}

//Do while, necesitamos entrar al menos 1 vez
//Itera mientra se cumple una condicion

//Ejecutamos bloque de codigo para despues comprobar condicion

do{
    alert("Solo cuando sea diferente a 2018");
    year--;
}while(year > 2010)

