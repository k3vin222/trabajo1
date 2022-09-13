class extra {
    constructor (producto,nrounidades,precioUni){
        this._prducto = producto
        this._nrounidades = nrounidades
        this._precioUni = precioUni 
    }
    totalPrecio (){
        this.precioTot = precioUni* this._nrounidades
    }
}
module.exports = extra