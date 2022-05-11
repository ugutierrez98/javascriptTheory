//Antes de ecmascript 6+
function newFunction(name, age, country){
    var name = name || "oscar";
    var age = age || "18";
    var country = country || "MX";

    console.log(name, age, country);
}

//es6

function newFunction2(name = "ulises", age = "20", country = "USA"){
    console.log(name, age, country);
}
newFunction2();
newFunction2("Andres", "40", "CO");

//template lterals - separar o unir varios elementos

let hello = "hello";
let world = " World";

let epicPhrase = hello + world;
console.log(epicPhrase);