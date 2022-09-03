var a1 = [];
var a2 = [,,,];
var a3 = [1,,3,,];
var a4 = [1,[10,8,7,6],3,5,'cuarto',2,"ceros",0,{x:1,y:'uno'},'1',-74];

console.log('a1=',a1);
console.log('a2=',a2);
console.log('a3=',a3);
console.log('a4=',a4);
console.log('a4=',JSON.stringify(a4));
console.log('matriz->a[1][2]=',a4[1][2]);

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('a1.length=',a1.length);
console.log('a2.length=',a2.length);
console.log('a3.length=',a3.length);
console.log('a4.length=',a4.length);

console.log("\x1b[32m%s\x1b[0m", '---------------');
console.log('a2.length= 10');
a2.length=10;
console.log('a2.length=',a2.length);
console.log('a2=',a2);
console.log('a2[1]=',a2[1]);

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('a3[20]=2',a3[20]=2);
console.log('a3.length=',a3.length);
console.log('a3[14]=',a3[14]);
console.log('a3=',JSON.stringify(a3));
console.log('a3=',a3);

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
var a44 = a4;
a44[0]=8544;
console.log('var a44=a4\na44[0]=8544');
console.log('a44=',JSON.stringify(a44));
console.log('a4=',JSON.stringify(a4));

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
var a444 = [...a4];
a444[0]=4;
console.log('var a444=[...a4];\a444[0]=4');
console.log('a444=',JSON.stringify(a444));
console.log('a4=',JSON.stringify(a4));
let v0 = a444[0];
console.log('v0=',v0);
v0=10;
console.log('let v0= a444[0]\nv0=10\na444=',JSON.stringify(a444));
console.log('v0=',v0);

console.log("\x1b[32m%s\x1b[0m", '---------------------- FROM STRINGS ----------------------------');
console.log('spread es aplicable a iterables y los strings son iterables => string a array:');
let vecString=[..."hola querido mundo 122"];
console.log('let vecString=[..."hola querido mundo 122"]');
console.log('vecString=',JSON.stringify(vecString));

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('Array.from() toma como argumento un iterable y los strings son iterables => :');
let vecString1=Array.from("hola querido mundo 122");
console.log('let vecString1=Array.from("hola querido mundo 122")');
console.log('vecString1=',JSON.stringify(vecString1));

//-------------------------------- agregan y sacan al final del array----------------------------------
console.log("\x1b[32m%s\x1b[0m", '----------------- PUSH ----------------- POP ----------------------');
a2.push(51,'dos',1);
console.log('a2=',JSON.stringify(a2));
let aa1= a2.pop();
console.log('let aa1 = a2.pop()\naa1= ',aa1);
console.log('a2=',JSON.stringify(a2));
a2.push('data')
console.log('a2.push("data")');
console.log('a2=',JSON.stringify(a2));

//------------------------------ agregan y sacan al comienzo del array--------------------------------
console.log("\x1b[32m%s\x1b[0m", '----------------- SHIFT ------------- UNSHIFT ---------------------');
console.log("a2.unshift('tres','151')");
a2.unshift('tres','151');
console.log('a2=',JSON.stringify(a2));
let aa22= a2.shift();
console.log('let aa2 = a2.shift()\naa2= ',aa22);
console.log('a2=',JSON.stringify(a2));

//----------------------------------------for(item in iterable)----------------------------------------------------
console.log("\x1b[32m%s\x1b[0m", '---------------------------- FOR IN -------------------------------');
let iterable0=[{prop1:'luis',prop2:33},{prop1:'Sandra',prop2:33,prop3:false},{prop1:'Marok',prop3:false}];
for(item in iterable0){
    console.log('item: '+item)
}

//----------------------------------------for(item of iterable)----------------------------------------------------
console.log("\x1b[32m%s\x1b[0m", '---------------------------- FOR OF -------------------------------');
for([i,item] of a4.entries()){
    console.log('item('+i+'):',item)
}
let iterable=[{prop1:'luis',prop2:33},{prop1:'Sandra',prop2:33,prop3:false},{prop1:'Marok',prop3:false}];
for(item of iterable){
    console.log('item.prop1: '+item.prop1)
}

console.log("\x1b[32m%s\x1b[0m", '---------------------------- FOREACH ------------------------------');
a4.forEach((e,i,arr)=>{
    console.log(' i:'+i+' ->e:'+e+'\t\t ->arr['+i+']:',arr[i])
});

console.log("\x1b[32m%s\x1b[0m", '------------------------------ MAP --------------------------------');
let vec4 = a4.map((e,i,arr)=>{
    if(typeof e ==='number') return e;
});
console.log('let newArray = a4.map(): '+JSON.stringify(vec4))

console.log("\x1b[32m%s\x1b[0m", '---------------------------- FILTER -------------------------------');
let vec5 = a4.filter((e,i,arr)=>{
    if(typeof e ==='string') return e;
});
console.log('let newArray = a4.filter(): '+JSON.stringify(vec5))

//------------------------------------array.find(valor,indice,array)----------------------------------------
console.log("\x1b[32m%s\x1b[0m", '----------------------------- FIND --------------------------------');
let dat1 = a4.find((e,i,arr)=>{
    if(e.x === 1) return e;
});
console.log('let data = a4.find(): '+JSON.stringify(dat1));

//---------------------------------------array.findIndex(funcion)-------------------------------------------
console.log("\x1b[32m%s\x1b[0m", '--------------------------- FINDINDEX -----------------------------');
let ind1 = a4.findIndex((e,i,arr)=>{
    if(e.x === 1) return e;
});
//identica:
let ind11 = a4.findIndex(e=>e.x=== 1)
console.log('let data = a4.findIndex(f1): '+ind1);
console.log('let data = a4.findIndex(f2): '+ind11);

console.log("\x1b[32m%s\x1b[0m", '------------------------------ SOME -------------------------------');
let b1 = a4.some((e,i,arr)=>{
    return (e.x === 1) ;
});
console.log('let data = a4.any(): '+b1);

console.log("\x1b[32m%s\x1b[0m", '----------------------------- EVERY -------------------------------');
let b2 = a4.every((e,i,arr)=>{
    return (e != 144444);
});
console.log('let data = a4.every(): '+b2);

//--------------------------------unArray = array.reduce(function)-----------------------------------------
//-----------------Itera sobre cada elemento del arrray reduciendolo a un solo valor-----------------------
//-------------------NO devuelve un array sino la iteracion sobre el ultimo elemento-----------------------
console.log("\x1b[32m%s\x1b[0m", '----------------------------- REDUCE -------------------------------');
let arrayReducidoAUnElemento = a4.reduce((acumulador,valorActual,indice,valorInicial)=>{
    //acumulador acumula el valor devuelto en la iteracion anterior (o el valorInicial en la primera iteracion)
    //valor actual es el elemento actual
    //indice->idem(obvio)
    //valor inicial->un valor inicial o semilla
    //acumulador += valorActual.edad
    console.log('acumulador: ',acumulador);
    console.log('valorAcutal: ',valorActual);
    console.log('indice: ',indice);
    console.log('valorInicial: ',valorInicial)
    console.log('-----------------------------------')

    return {name:acumulador.name,edad:valorActual.edad+acumulador.edad,rol:acumulador.rol}
})
console.log('arrayReducidoAUnElemento: ',arrayReducidoAUnElemento)

console.log("\x1b[32m%s\x1b[0m", '----------------------------- CONCAT -------------------------------');
let cat4 = a4.concat('otro','y otro');
console.log('let array = a4.concat(...): ',JSON.stringify(cat4));

//------------------------------var unArray = array.slice(posInicio,posFinal)------------------------------
console.log("\x1b[32m%s\x1b[0m", '----------------------------- SLICE --------------------------------');
let vec6 = a4.slice(2,5);
console.log('let array = a4.slice(inicio,fin): ',JSON.stringify(vec6), 'nota: inicio=2 =>incluye indice=2 y excluye indice=fin');
let vec7 = a4.slice();
console.log('let array = a4.slice("vacio"): ',JSON.stringify(vec7));

//-----unArray.splice(posDondeAgregar,cantElementosARemover,elementoAAgregar1,elementoAAgregar2,....)-------
console.log("\x1b[32m%s\x1b[0m", '---------------------------- SPLICE --------------------------------');
let vec8 = a4.splice(3,2,"elemento agregado 1",2,false,{x:4,y:8});
console.log('let elementosSacados = a4.splice(): ',JSON.stringify(vec8));
console.log('a4.splice(...): ',JSON.stringify(a4));

console.log("\x1b[32m%s\x1b[0m", '------------------------------ FILL --------------------------------');
console.log('a2: ',JSON.stringify(a2));
console.log('a2.fill(5)');
a2.fill(5);
console.log('a2: ',JSON.stringify(a2));

//-----------------a4.copyWithin(posDondeInsertar,posInicialACopiar,posFinalACopiar)------------------------
//-------------------------------------modifica al propio vector--------------------------------------------
console.log("\x1b[32m%s\x1b[0m", '-------------------------- COPYWITHIN ------------------------------');
console.log('a4: ',JSON.stringify(a4));
let vec9 = a4.copyWithin(0,11,12);
console.log('let array = a4.copyWithin(posDondeInsertar,posInicialACopiar,posFinalACopiar): ');
console.log('a4.copyWithin(2,3,5)-->en la pos 2 copia los elementos de las pos:3,4 (5 NO) ');
console.log('a4: ',JSON.stringify(a4));
console.log('aM: ',JSON.stringify(vec9));

//--------------------------------------array.indexOf(valorNumerico)----------------------------------------
console.log("\x1b[32m%s\x1b[0m", '---------------------------- INDEXOF -------------------------------');
let ind2 = a4.indexOf(-74);
console.log("indexOf() compara el argumento con los elementos del array usando === por eso hay q tener cuidado(elementos no primitivos matchearán si apuntan igual)")
console.log('let indice = a4.indexOf(-74): '+ind2);
console.log('let indice = a4.indexOf("ceros"): '+a4.indexOf("ceros"));
console.log('let indice = a4.indexOf("ceros",4): '+a4.indexOf("ceros",4));
console.log('let indice = a4.indexOf("cerosss"): '+a4.indexOf("cerosss"));

console.log("\x1b[32m%s\x1b[0m", '-------------------------- LASTINDEXOF -----------------------------');
console.log('let indice = a4.lastIndexOf("ceros"): '+a4.lastIndexOf("ceros"),' lastIndexOf comienza a buscar desde el final del array');

console.log("\x1b[32m%s\x1b[0m", '---------------------------- INCLUDES ------------------------------');
console.log('let boolean1 = a4.includes("ceros"): '+a4.includes("ceros"));

//--------------------------array.sort(FUNCION DE COMPARACION ENTRE 2 ELEMENTOS)---------------------------
//------------- la funcion de comparacion debe devolver: 0=>iguales POSITIVO=>a>b NEGATIVO=>a<b------------
console.log("\x1b[32m%s\x1b[0m", '------------------------------ SORT --------------------------------');
console.log('let array1 = a4.sort(): '+a4.sort());
console.log('let array1 = a4.sort(function()): '+a4.sort((a,b)=>{
    if(typeof a ==="object" ){
        return a.x-b;
    }
    if(typeof b ==="object" ){
        return a-b.x;
    }
    if(typeof a ==="string"){
        return -1
    }
    return a-b;
}));
console.log('a4: ',JSON.stringify(a4));

console.log("\x1b[32m%s\x1b[0m", '---------------------------- REVERSE ------------------------------');
console.log('let ?? = a4.reverse(): '+a4.reverse());
console.log('a4: ',JSON.stringify(a4));

console.log("\x1b[32m%s\x1b[0m", '----------------------------- JOIN --------------------------------');
console.log('a3: ',JSON.stringify(a3));
console.log('let string1 = a3.join(): '+a3.join());
console.log('let string1 = a3.join(""): '+a3.join(""));