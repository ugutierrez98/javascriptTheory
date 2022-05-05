var nombre = "ulises";

var nombres = ["lola", "juan", "carlos", "jose"];

var lenguajes = new Array("php", "js", "python", "go");

lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document.write("<li>"+ indice + " - " + elemento + "</li>")
})