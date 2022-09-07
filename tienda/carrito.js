const producto = require("./producto")

class carrito {
    constructor(cliente){
    this._id = cliente._id
    this.productos = []

    }
    agregarProducto (producto,almacen){
        if (almacen._cantidad >0){
            almacen._cantidad +=-1
        }
        else{
        console.log('producto agotado');
    }
}
get Mlista (){
    console.log(this.producto);
}
lll (){
return  this.producto
}
}

module.exports = carrito