const producto = require("./producto");

class carrito {
    constructor(cliente){
    this._id = cliente._id
    this.productos = []

    }
    agregarProducto (productos,almacen){
        if (almacen._cantidad >0){
            this.productos.push(producto)
            almacen._cantidad +=-1
        }
        else{
        console.log('producto agotado');
    }
}
get lista (){
    console.log(this.productos);
}
lll (){
return  this.productos
}
}

module.exports = carrito