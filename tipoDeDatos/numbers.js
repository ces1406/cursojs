var num1;
var num2 = 4.33245667;
var num3 = new Number(1);
var num4 = new Number();
var num5 = 8;

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log("num1: ",num1);
console.log("num2: ",num2);
console.log("num3: ",num3);
console.log("++num2: ",++num2);
console.log("num2++: ",num2++,' (suma 1 pero no lo registra en la misma linea)');
console.log("num2: ",num2);

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log("typeof(num1): ",typeof(num1));
console.log("typeof(num2): ",typeof(num2));
console.log("typeof(num3): ",typeof(num3));
console.log("typeof(num4): ",typeof(num4));

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log("num2.toFixed(5): ",num2.toFixed(5));
console.log("num4.toString(): ",num4.toString());
console.log("parseInt('34a'): ",parseInt("34a"));
console.log("parseInt('a34'): ",parseInt("a34"));
console.log('parseInt("AB5",16): ',parseInt("AB5",16),' (da el resultado como un entero en sistema decimal)');
console.log('parseFloat(num2): ',parseFloat(num2));

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('Number.MAX_VALUE =',Number.MAX_VALUE);
console.log('Number.MIN_VALUE =',Number.MIN_VALUE);
console.log('Number.EPSILON =',Number.EPSILON);
console.log('Notacion exponencial: [digits][.digits][(E|e)[(+|-)]digits]\n\t1.4738223E-32 es --> 1.4738223 × 10⁻³²');

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
var o1 = 071;
console.log('octales: console.log(071) =',o1,' (lo muestra en sistema decimal)');
console.log('hexadecimales: console.log(0x1F) =',0x1F,' (lo muestra en sistema decimal)');
console.log('binarios: console.log(01101) =',0b0101,' (lo muestra en sistema decimal)');

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('5/0 =',5/0);
console.log('0/0 =',0/0);
console.log('1/Infinity =',1/Infinity);
console.log('Infinity/Infinity =',Infinity/Infinity);

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('Math.round(4.4) =',Math.round(4.4));
console.log('Math.round(4.5) =',Math.round(4.5));
console.log('Math.pow(3,2) =',Math.pow(3,2));
console.log('Math.sqrt(9) =',Math.sqrt(9));
console.log('Math.ceil(5.011) =',Math.ceil(5.011));
console.log('Math.floor(5.99) =',Math.floor(5.99));
console.log('Math.abs(-2.99) =',Math.abs(-2.99));
console.log('Math.max(5.9,9,1,55,26,87,977) =',Math.max(5.9,9,1,55,26,87,977));
console.log('Math.min(5.9,9,1,55,26,87,977) =',Math.min(5.9,9,1,55,26,87,977));
console.log('Math.sin(90) =',Math.sin(90));
console.log('Math.log(10) =',Math.log(10),' log natural');
console.log('Math.cbrt(27)=',Math.cbrt(27),' raiz cubica') // => 3: cube root
console.log('Math.hypot(3, 4)=',Math.hypot(3, 4),' hipotenusa de un triangulo 3-4-?'); // => 5: square root of sum of squares of all arguments
console.log('Math.log10(100)=',Math.log10(100),' logaritmo base 10'); // => 2: Base-10 logarithm
console.log('Math.log2(1024)=',Math.log2(1024),' logaritmo base 2') // => 10: Base-2 logarithm