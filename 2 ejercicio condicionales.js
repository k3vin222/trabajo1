let num1 = Math.floor(Math.random() *10)
console.log(num1);
let num2 = Math.floor(Math.random() *10)
console.log(num2);
let num3 = Math.floor(Math.random() *10)
console.log(num3);

if (num1 == num2 && num2 !== num3) {
    console.log('hay dos iguales');
}
if (num1 == num2 && num1 == num3 && num2 == num3) {
    console.log('los tres son iguales');
}if (num1 != num2 && num1 != num3 && num2 != num3) {
    console.log('los tres son diferentes');
}
