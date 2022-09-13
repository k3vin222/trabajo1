const factura = require("./factura");

let pedid = 0
class pedido {
  constructor(listaP,cliente) {
    this._nombre =  cliente._nombre
    this.listaP = listaP
    pedid ++
    this.nropedidos = pedid
    this.fecha = new Date ()
    this.precio = 0
    for (let i = 0; i <this._listaP; i++) {
        this.precio += this._listaP [i]._precio   
} 
  }
  generarFac (){
    this._factura  = new factura (this._nropedidos,this._fecha,this._precio,this._listaP)
  }
}
module.exports = pedido