/* Loops 
Saludara cada estudiante con For
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}
*/
//Saludara cada estudiante con For Of
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}
for(var estudiante of estudiantes){//Singular del arreglo que es plural
    saludarEstudiantes(estudiante);
}