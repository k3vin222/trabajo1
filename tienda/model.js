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

cocacola = new producto ('coca-cola',1000,'19%','lata',22)
harina = new producto ('migapan',20000,'19%','harina',21)

ob1 = new almacen (cocacola,4)
Ob2 = new almacen (harina,5)


carrito1 = new carrito ('U1')
carrito1.agregarProducto(cocacola,ob1)

carrito1.Mlista

ped1  = new pedido (carrito1.lll(),U1)
console.log(ped1);
ped1.generarFac
console.log(ped1._factura);