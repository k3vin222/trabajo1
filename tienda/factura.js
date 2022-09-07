class factura{ 
constructor (nro_factura,fecha,totalP){
this._nro_factura = nro_factura;
this._fecha = fecha;
this._totalP = totalP;
}
set nro_factura(nro_factura){
    this._nro_factura 
} 
set fecha(fecha){
    this._fecha ;
}
set totalP(totalP) {
    this._totalP
}
}
module.exports = factura