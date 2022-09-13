const almacen = require("./almacen");
const carrito = require("./carrito");
const cliente = require("./cliente");
const factura = require("./factura");
const pedido = require("./pedido");
const producto = require("./producto");

U1 = new cliente ('manolo',111,580000)
U2 = new cliente ('maria',5555,8800)

console.log(U1);
console.log(U2);

pro1 = new producto ('cocacola',1000,'19%','lata',10)
pro2= new producto ('migapan',20000,'19%','harina',21)

ob1 = new almacen (pro1,2)
ob2 = new almacen (pro2,5)
console.log(ob1);
console.log(ob2);

carrito1 = new carrito (U1)
carrito1.agregarProducto(pro1,ob1)

carrito1.Mlista

ped1  = new pedido (carrito1.lll(),U1)
console.log(ped1);
ped1.generarFac
console.log(ped1._factura);
