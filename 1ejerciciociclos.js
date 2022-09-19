var num = Math.round(Math.random() *10);
 console.log(`el numero dado es: `, num);

var aux = 1

while (aux <=num) {
    if (num%aux==0){

    
  console.log(aux,`es divisor de ${num}`);
}
aux++;
}
