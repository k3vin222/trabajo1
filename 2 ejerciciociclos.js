var numero = Math.round(Math.random() *15);
//console.log(numero);
for (let i = 1; i < numero; i++) {
    if (numero % i ===0) {
        

        console.log(i, "es primo");
        }else 
        console.log( + [i],"NO es primo");
        
    }