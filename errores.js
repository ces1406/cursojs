function imprimeNro1(x){
    try{
        if(typeof(x)=='number'){
            console.log('->'+x+'<-')
        }else{
            throw({msj:'NO ES UN NUMERO'});
        }
    }catch(err){
        console.log('Error: ',err.msj)
    }
}

function imprimeNro2(x){
    try{
        if(typeof(x)=='number'){
            console.log('->'+x+'<-')
        }else{
            throw new Error('NO ES UN NUMERO!!!');
        }
    }catch(err){
        console.log('Error: ',err)
    }
}

var n1=56;
var n2='cadena'
imprimeNro1(n1)
imprimeNro1(n2)
imprimeNro2(n1)
imprimeNro2(n2)