function* funcIterable(){
    let a=2;
    let c = 4 + a;
    console.log('\n1) c = ' + c)
    yield "primer return (para el proximo next() se ejecuta a partir de aca)";
    c++;
    console.log('\n2) c = ' + c)
    yield "segundo return (para el proximo next() se ejecuta a partir de aca)";
    c++;
    console.log('\n3) c = ' + c)
    yield "tercer return (para el proximo next() se ejecuta a partir de aca)";
}

let iterador = funcIterable();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(funcIterable().next());
console.log(funcIterable().next());

function* pasoapaso(v){
    let x=v+1;
    yield x;
    ++x;
    yield x;
    ++x;
    yield x;
    ++x;
    yield x;
    ++x;
    yield x;
} 

let paso = pasoapaso(0);
console.log(paso.next().value);
console.log(paso.next().value);
console.log(paso.next().value);
console.log(paso.next().value);