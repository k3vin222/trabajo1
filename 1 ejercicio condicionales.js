let num1 = Math.floor(Math.random() *10)
console.log(num1);
let num2 = Math.floor(Math.random() *10)
console.log(num2);
let num3 = Math.floor(Math.random() *10)
console.log(num3);
if (num1 > num2 && num1 > num3){
console.log('el numero mayor es' + num1 );
}if (num1 < num2 && num1 < num3){
    console.log('el numero menor es' + num1 )
}if (num1 > num2 && num1 < num3){
   console.log( 'el numero de el medio es' + num1)
}