class cliente {
  constructor (nombre,nrodoc,recursos){
  this._nombre = nombre 
this._nrodoc = nrodoc
this._recursos = recursos
}
  set nombre (nombre) {
    this._nombre 
}
set nrodoc (nrodoc) {
    this._nrodoc
}
set recursos (recursos) {
this._recursos
}
get nombre () {
     return this._nombre
}
get nrodoc () {
    return this._nrodoc
}
get recursos () {
    return this._recursos
}
}
module.exports = cliente