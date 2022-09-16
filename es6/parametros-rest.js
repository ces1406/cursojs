function sumatoria(a,...b){
    let resultado = a;
    // b es un iterable con los demas parámetros:
    console.log('Resto de parametros b: ',b);
    b.forEach( x=>{ resultado += x})

    return resultado;
}

console.log('sumatoria(3,4,5,6,7,1): ',sumatoria(3,4,5,6,7,1))