
const producto = require ("./producto")
class almacen {
    constructor(productos,cantidad) {
        this._id = productos._id
        this._cantidad = cantidad

}
añadirPro (cantidad){
this._cantidad += cantidad
}
}
module.exports = almacen