var i=0;
var tiempo = Date.now();

function f1(){
    let pas = Date.now()-tiempo;
    console.log("soy una funcion setTimeout y pasaron ->"+pas/1000+"<- segs.")
}
function f2(){
    let pas = Date.now()-tiempo;
    console.log("soy una funcion setInterval y pasaron ->"+pas/1000+"<- segs.")
}
let id1 = setTimeout(f1,2000);
let id2 = setInterval(f2,1200);

//clearTimeout(id1)
for(let j=0;j<5999999555;j++){
    if (j===1999955555){
        console.log("/*****-****")
        //clearInterval(id2)
    }
}

/*
    NOTA: el interval NO se ejecuta paralelamente al for()
*/