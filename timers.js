var tiempo = Date.now();

function f1(){
    let pas = Date.now()-tiempo;
    console.log("soy una funcion y pasaron ->"+pas/1000+"<- segs.")
}

let id1 = setTimeout(f1,1855);
let id2 = setInterval(f1,2251);