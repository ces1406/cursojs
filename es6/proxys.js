/* Un proxy crea una copia de un objeto original manteniendose vinculados */

const persona = {
    nombre: '',
    apellido: '',
    edad: 0
};
const manejador = {
    set(obj,prop,valor){
        if(Object.keys(obj).indexOf(prop)===-1){return console.error()}
        if(prop==='edad' && valor<1){return console.error()}
        obj[prop]=valor;
    }
};
/* creo un manejador controlará las propiedades del objeto */

const p2 = new Proxy(persona,manejador);
console.log('persona: ',persona);
console.log('p2: ',p2);
p2.nombre = 'juan';
console.log('persona: ',persona);
console.log('p2: ',p2);
p2.edad = -55;
console.log('persona: ',persona);
console.log('p2: ',p2);