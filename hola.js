/*    ciclos 
Determinar los divisores de un número introducido por
teclado */

/*var num = Math.round(Math.random() *100);
 console.log(num);

var aux = 1

while (aux <=num) {
    if (num%aux==0){

    
  console.log(aux);
}
aux++;
}*/

//2. Determinar si un numero es o no es primo 

/*var numero = Math.round(Math.random() *15);
console.log(numero);
for (let i = 1; i < numero; i++) {
    if (numero % i ===0) {
        console.log(i);

        console.log("es primo");
        }else 
        console.log("NO es primo");
        
    }*/
    
        //Determinar si un número es o no es perfecto. 
        
       /* var num = Math.round(Math.random() *15);
        console.log(num);
        var auxiliar = 0;

        for (let i = 1; i < num/2 ;i++) {
            if (num % i ==0){
            auxiliar += i;
            console.log("es perfecto");
        }else { 
            console.log("NO es perfecto");
        }
    }
const array1 = [1,2,3,4]
console.log(array1.fill(Math.round(Math.random()*10),1));


// numero mayor o menor :3
var num = Math.round(Math.random() * 15);
console.log(num);
for (let i = 1; i < num; i++) { 
}
if (num >=10) {
    console.log('es mayor');
   }else {
    console.log('es menor');
    }

//funcion suma 

function suma(num1,num2) {
    return num1 + num2 
}
   
console.log(suma(1,3));


/* ____________________________________________________________*/

let val = Math.round(Math.random() *15);
function tester(val){
 val += 10;
 if(val < 100){
 return tester(val);
 }
 return val;
}
tester(val);
console.log(val);

/* ____________________________________________________________*/

let testFunction = function(){
    console.log("Holi :3");
   }();
   /* ____________________________________________________________*/
let perro = {
    nombre :'lupita',
    edad : 12,
    color :'cafe ',
    raza :'shitsu'
}

console.log(persona);
   /* ____________________________________________________________*/


/*let persona ={
    nombre :'kevin',
    altura :1.65,
    sexo : 'M',
    edad : 18,
    id : 123456
}

console.log(persona.nombre, "mide :" , persona.altura, "y tiene :" , persona.edad ,"años");*/

   /* ____________________________________________________________*/

   class persona {
    constructor (Pnombre,Snombre) {
    this.Pnombre = Pnombre;
    this.Snombre = Snombre; 
    }
}
   
   //let p = new persona("kevin","");
   console.log("hola",p.Pnombre);

    class Person {
        constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        }
        greet() {
        console.log("hola soy ", this.firstname);
        }
    }
    let p = new Person("KEVIN", "MUÑOZ");
    p.greet();