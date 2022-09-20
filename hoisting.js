/* Al parsearse y compilarse el programa se aloja la variable "nombre" pero es inicializada en undefined */
console.log(nombre);
var nombre = 'luis';
//console.log(edad); //Da ->ReferenceError: Cannot access 'edad' before initialization<- let no tiene hoisting
let edad = 66;

/* Si no esta declarada como var o let el motor convierte la expresion en una asignación a una variable */
apellido = 'perez';
console.log(apellido);

/* Hoisting de funciones */
saludar(apellido);
function saludar(x){console.log('Hola ',x)}

//despedir(apellido);
//const despedir = function(x){console.log('Chau ',x)} //Da ->ReferenceError: Cannot acces 'despedir' before initialization
