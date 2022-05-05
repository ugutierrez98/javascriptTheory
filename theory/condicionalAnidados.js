let edad = 34;
let nombre = "David Suarez";

/*
if(edad >= 18){
    document.write(nombre + " tiene " + edad + " años, es mayor de edad");
    if(edad <= 33){
        document.write(" Aun eres milenial");
    }else{
        document.write(" Ya no eres milenial");
    }
}else{
    document.write(nombre + " tiene " + edad + " años, es menor de edad");
}
*/
if(edad >= 18){
    document.write(nombre + " tiene " + edad + " años, es mayor de edad");
    if(edad <= 33){
        document.write(" Aun eres milenial");
    }else if(edad >= 70){
        document.write(" Eres anciano");
    }else{
        document.write("Ya no eres milenial");
    }
}else{
    document.write(nombre + " tiene " + edad + " años, es menor de edad");
}