
console.log("\x1b[32m%s\x1b[0m", '---------------- THIS en objetos --------------------');
const animal = {
    dieta: 'herbivora',
    ruido() { console.log('beeee'); },
    alimento() { console.log('dieta: ' + dieta) },                      // da error    
    alimento2() { console.log('dieta: ' + this.dieta); console.log('-->THIS:',this) },                // OK --> muestra: 'herbivora'   
    alimento3: function () { console.log('dieta: ' + this.dieta) },     // no da error --> segun muchos libros tendría que dar undefined   
    //function alimento4 () { console.log('dieta:'+this.dieta)},        //--->definicion erronea (no se puede definir así)
    cumple: () => { console.log('come: ' + dieta) },                    // da error tambien aunque sea una arrow function    
    cumple2: () => { console.log('come: ' + this.dieta) }               // da "undefined"
}
console.log("\x1b[34m%s\x1b[0m", 'animal.ruido() ');
animal.ruido();
console.log('-----------------------------');
//animal.alimento(); // comentado por provocar error
console.log("\x1b[34m%s\x1b[0m", 'animal.alimento2()');
animal.alimento2();
console.log('-----------------------------');
console.log("\x1b[34m%s\x1b[0m", 'animal.alimento3()');
animal.alimento3();
console.log('-----------------------------');
//animal.cumple(); // comentado por provocar error
console.log("\x1b[34m%s\x1b[0m", 'animal.cumple2() ');
animal.cumple2();

console.log("\x1b[32m%s\x1b[0m", '---------------- THIS en funciones constructoras --------------------');
const adornar = () => { console.log('-->' + this.nombre + '<--') }
function Persona(nombre) {
    this.nombre = nombre;
    return function () { console.log('nombre de Persona: ' + this.nombre) }
}
function Persona2(nombre) {
    this.nombre = nombre;
    esto = this;
    return function () {
        console.log('nombre2: ' + esto.nombre)
        console.log('esto: ', esto);
        console.log('-->THIS:',this)
    }
}

const persona1 = new Persona('jhon');
console.log('persona1():');
persona1();
console.log('->persona1 es un new Persona()=> se creó algo?->persona1: ');
console.log('persona1: ', persona1); // -->persona1 es la funcion que retorno Persona (???)
console.log('persona1: '+ persona1); // -->persona1 es la funcion que retorno Persona (???)
console.log('-----------------------------')
const persona2 = new Persona2('john');
console.log('persona2():');
persona2();

console.log("\x1b[32m%s\x1b[0m", '---------------- THIS en clases --------------------');
class Contador {
    constructor(inicio,fin){
        this.start = inicio;
        this.end = fin
    }
    diferencia(){
        console.log('dif: '+this.start+' - '+this.end)
    }
    adornar = function (){
        console.log(this.start+'***'+this.end)
    }
    decorar =()=>{
        console.log(this.start+'*++*'+this.end); console.log('-->THIS:',this)
    }
}
var contador = new Contador(2,4)
contador.diferencia()
contador.adornar()
contador.decorar()

const fx = contador.decorar;
fx(); // NOTA: acá funciona ok ? (el "this" toma al objeto "cont")
const ff = animal.alimento2;
ff(); // acá devuelve "undefined", la funcion toma a this en el contexto global