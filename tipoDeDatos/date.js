var d1 = new Date();
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log('var d1 = new Date() ');
console.log('Date.now() = ',Date.now());
console.log('d1 = ',d1);
console.log("d1.getDay() = ",d1.getDay());
console.log("d1.getFullYear() = ",d1.getFullYear());
console.log("d1.getMonth() = ",d1.getMonth());
console.log("d1.getDate() = ",d1.getDate());
console.log("d1.getHours() = ",d1.getHours());
console.log("d1.getMinutes() = ",d1.getMinutes());
console.log("d1.getSeconds() = ",d1.getSeconds());
console.log("d1.getTime() = ",d1.getTime());

console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log("d1.setFullYear(1977) = ",d1.setFullYear(1977));
console.log("d1.setMonth(6) = ",d1.setMonth(6));
console.log("d1.setDate(14) = ",d1.setDate(14));
console.log("d1.setHours(7) = ",d1.setHours(7));
console.log("d1.setMinutes(14) = ",d1.setMinutes(14));
console.log('d1= ',d1);
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
console.log("d1.toLocaleTimeString('en-US') = ",d1.toLocaleTimeString('en-US') );
console.log("d1.toLocaleTimeString('es-AR') = ",d1.toLocaleTimeString('es-AR') );
console.log("d1.toLocaleString('sv-SE',{timeZone:'America/Argentina/Buenos_Aires'} =",d1.toLocaleString('sv-SE',{timeZone:'America/Argentina/Buenos_Aires'}) );
console.log("d1.toLocaleString('en-US',{timeZone:'America/Argentina/Buenos_Aires'} =",d1.toLocaleString('en-US',{timeZone:'America/Argentina/Buenos_Aires'}) );
console.log("d1.toLocaleString('es-AR',{timeZone:'America/Argentina/Buenos_Aires'} =",d1.toLocaleString('es-AR',{timeZone:'America/Argentina/Buenos_Aires'}) );