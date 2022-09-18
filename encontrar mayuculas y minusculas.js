function todas(cb1, cb2, cadena) {
    cb1(cadena)
    cb2(cadena)
    console.log('el total de mayusculas es: ' + cb1(cadena));
    console.log('el total de minusculas es: ' + cb2(cadena));
}

function contarMayusculas(cadena) {
    var contar = 0;
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if (cadena[x] == mayusculas[i]) {
                contar += 1;
            }
        }
    }
    return contar;
}


function contarminusculas(cadena) {
    var contar = 0;
    var minusculas = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < minusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if (cadena[x] == minusculas[i]) {
                contar += 1;
            }
        }
    }
    return contar;
}



todas(contarMayusculas, contarminusculas, 'Hola Me Llamo Kevin')