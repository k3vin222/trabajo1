/*class publicacion {
    constructor (titulo,precio){
        this._titulo = titulo
        this._precio = precio
    }
    set titulo (titulo){
        this._titulo = titulo
        
}
 set precio (precio) {
    this._precio = precio
}
get precio(){
return this._precio
}
get titulo(){
    return this._titulo
 }
}

class libro extends publicacion{
    constructor (titulo,precio,Numpag){
        super (titulo,precio)
    this._Numpag = Numpag
  }
  set Numpag (Numpag){
    this._Numpag
  }
  get Numpag(){
  return this._Numpag
}
  }

  class cd extends publicacion{
    constructor (titulo,precio,tiempo_reproducion){
        super (titulo,precio)
        this._tiempo_reproducion = tiempo_reproducion
}
set tiempo_reproducion (tiempo_reproducion){
    this._tiempo_reproducion
  }
  get tiempo_reproducion () {
    return this.tiempo_reproducion
}
  }
let prub = new libro ('principito',20000,23 )
let prub2 = new cd ('libro2',20000,"23 minutos ",this.tiempo_reproducion)
console.log(prub2);
console.log(prub);*/

class vehiculo {
    constructor (num_serie,marca,cantidad,precio,año){
        this.num_serie = num_serie
        this._marca = marca
        this._cantidad = cantidad
        this._precio = precio
        this._año = año
    }
    set num_serie (num_serie){
        this._num_serie
    }
    get num_serie (){
        return this.num_serie
    }
}

class compacto extends vehiculo {
    constructor (num_serie,marca,cantidad,precio,año,num_puertas){
        super (num_serie,marca,cantidad,precio,año)
        this._num_puertas = num_puertas
    }
    set num_puertas(num_puertas){
        this._num_puertas
    }
    get num_puertas(){
        return this.num_puertas
    }
}

class lujo extends vehiculo {
    constructor (num_serie,marca,cantidad,precio,año,caballos_de_fuerza){
        super (num_serie,marca,cantidad,precio,año)
        this._caballos_de_fuerza = caballos_de_fuerza 
    }
    set caballos_de_fuerza(caballos_de_fuerza){
        this._caballos_de_fuerza
    }
    get caballos_de_fuerza(){
        return this.caballos_de_fuerza
    }
}

class camionetas extends vehiculo {
    constructor (num_serie,marca,cantidad,precio,año,capacidad){
        super (num_serie,marca,cantidad,precio,año)
        this._capacidad = capacidad
    }
    set capacidad(capacidad){
        this._capacidad
    }
    get capacidad(){
        return this.capacidad
    }
}

class vagonetas extends vehiculo {
    constructor (num_serie,marca,cantidad,precio,año,cant_carga){
        super (num_serie,marca,cantidad,precio,año)
        this._cant_carga = cant_carga
    }
    set cant_carga(cant_carga){
        this._cant_carga
    }
    get cant_carga(){
        return this.cant_carga
    }
}

let carrolujo = new lujo (1111,'toyota',8,1000000,2020,2000)
let vagonet = new vagonetas (2222,'hyundai',2,20500,1899,'80kg')
console.log(vagonet);


class muebles {
constructor (nombre,peso,color,diseño){
    this._nombre
    this.peso
    this.color
    this.diseño
}
set nombre(nombre){
    this._nombre
}
get nombre (){
    return this.nombre
}

set peso(peso){
    this._peso
}
get peso (){
    return this.peso
}

set color(color){
    this._color
}
get color (){
    return this.color
}

set diseño (diseño){
    this._diseño
}
get diseño (){
    return this.diseño
}
}

class mesa extends muebles {
    constructor (num_serie,marca,cantidad,precio,año,cant_carga,nro_patas,forma,material){
    super (num_serie,marca,cantidad,precio,año,cant_carga)
        this._nro_patas
    }
}