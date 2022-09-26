var global =' SOY GLOBAL '

/* PRUEBAS DE var Y let Y SUS ALCANCES DE FUNCION Y BLOQUE */
console.log("\x1b[32m%s\x1b[0m", '----------------- PRUEBAS DE var Y let Y SUS ALCANCES DE FUNCION Y BLOQUE ---------------------');
function scope1 (){
    var a1 = [1,2,3];   
    console.log('scope1()->global: '+global) 
    for(var i1=0;i1<a1.length;i1++){
        var value1 = a1[i1];
        console.log('value1: '+value1)
    }
    console.log("Fuera del for->value: "+value1);
    // o sea que value está disponible a un scope superior? RTA: Sí, porque var tiene alcance de funcion
    // (o en realidad "for" no está determinando ningun scope)<----NO
};
scope1();

function scope2 (){
    var a2 = [1,2,3];    
    for(var i2=0;i2<a2.length;i2++){
        let value = a2[i2];        
        console.log('value: '+value)
    }
    //console.log("Fuera del for->value: "+value ) // -->ahora da ERROR RTA: Sí, porque let tiene alcance de bloque
};
scope2();

function scope3 (){
    var a3 = 2;    
    let b3 = 1;
    {
        var c3 = '**scope3->{c3}**';
        let v3 = 'a';
        console.log('Dentro de {} -> a3: '+ a3 )
        console.log('Dentro de {} -> b3: '+ b3 )
    }
    console.log("Fuera del {} -> c3: " + c3 );
    // console.log("Fuera del {} -> v3: " + v3 ); // -->da ReferenceError: v3 is not defined
    // let b3 = 8; // --> da ERROR (pero con "value2" en el for del scope2 no?)
};
scope3();
//console.log("Fuera del todo -> a1: " + a1); //--> da ERROR
//console.log("Fuera del todo -> value1: " + value1); //--> da ERROR

/* SHADOWING */
console.log("\x1b[32m%s\x1b[0m", '------------------------------------- SHADOWING ----------------------------------------');
var nombre ='susana';
function printStudent(nombre){
    nombre = nombre.toUpperCase(); //si viene como parámetro "nombre" va a tapar (shadowing) a la variable global "nombre"
    console.log(nombre)
}
printStudent(nombre);
printStudent('juan');
console.log(nombre); // prueba de que una función hace una copia interna de la variable y nunca toca la pasada x parametro

/* ACCEDIENDO A SCOPES INACCESIBLES (EN UN PRINCIPIO) */
console.log("\x1b[32m%s\x1b[0m", '---------------- ACCEDIENDO A SCOPES INACCESIBLES (EN UN PRINCIPIO) --------------------');
console.log("\x1b[32m%s\x1b[0m", '------------------------------------- CLOSURES -----------------------------------------');
function alcance1(){
    var b4 ="local a alcance1";
    return function(){
        return b4;
    }
}
const f4 = alcance1();
console.log('Accediendo a b4 mediante--> f4(): ',f4());

/* var Y let EN CICLOS FOR */
console.log("\x1b[32m%s\x1b[0m", '----------------------------- var Y let EN CICLOS FOR ----------------------------------');
for (var index = 0; index < 3; index++) {
    setTimeout(()=>{console.log('index:',index),18500})    
}
for (let index = 0; index < 3; index++) {
    setTimeout(()=>{console.log('index:',index),1500})    
}