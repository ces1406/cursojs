/* MAPS */
let mapa = new Map();
let obj1={r:0,g:1,b:2}

mapa.set("nombre","Juan")
mapa.set("nombre","Juan")
mapa.set("apellido","Lopes")
mapa.set("edad",44)
mapa.set(obj1,22)

console.log('mapa: ' ,mapa)
console.log(mapa.size)
console.log(mapa.has("nombre"))
console.log(mapa.get("nombre"))
mapa.set("nombre","Jose")
console.log(mapa.get("nombre"))
console.log('mapa.get({r:0,g:1,b:2})',mapa.get(obj1))
console.log('mapa.get("{r:0,g:1,b:2}")',mapa.get('{r:0,g:1,b:2}'))
console.log('mapa.has({r:0,g:1,b:2})',mapa.has({r:0,g:1,b:2}))
console.log('mapa.has(obj1)',mapa.has(obj1))
mapa.delete("nombre")
console.log('mapa:  ',mapa)

// las keys pueden no ser de tipo String:
mapa.set(20,"numero veinte")
mapa.set({key:'coso',value:44},"objeto valor")

for(let[key,value]of mapa){
    console.log('key: '+key+' => valor: '+value)
}

let vec1=['uno',1,2,'hola'];
let vec = vec1[Symbol.iterator]();
console.log('vec.next():',vec.next())

/* SET y WEAKSET */
const set1 = new Set([1,1,'1',2,'palabra1',44,'una frase',3,'palabra1',{clave:4,valor:'caca'},{clave:4,valor:'caca'},{clave:4,valor:'cacar'}])
console.log('set1: ',set1)
console.log('set1.size: '+set1.size)
console.log('set1.has("palabra1"): '+set1.has('palabra1'))
console.log('set1.add("hola mundo"): '+JSON.stringify(set1.add('hola mundo')))
console.log('set1.add({name:"carlos",edad:88}): '+JSON.stringify(set1.add({name:'carlos',edad:88})))
console.log('set1.add({name:"carlos",edad:88}): '+JSON.stringify(set1.add({name:'carlos',edad:88})))
console.log('set1: ',set1)
console.log('set1.delete("palabra1"): '+set1.delete('palabra1'))
console.log('set1.delete("1"): '+set1.delete('1'))
console.log('set1: ',set1)
console.log('set1.keys(): ',set1.keys())
console.log('set1.values(): ',set1.values())

const vec2 = Array.from(set1)
console.log('vec2: ',vec2)

console.log('---------------------------------------------');
if('cad'){ console.log('if(cad) es true')}
if(333){console.log('if(333) es true')}
if(0){}else{console.log('if(0) es false')}
if(''){}else{console.log('if("") es false')}
if(null){}else{console.log('if(null) es false')}