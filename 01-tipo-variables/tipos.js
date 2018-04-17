var nombre = "23";
var edad = 23
var fecha = new Date()
var casado = false     //True
var casa = undefined   // es falso  --- > analogia datos --> papel ----- lleno --> null -- solo el tubito del papel -- undefined --> no hay ni papel ni rollo de carton ni el soporte para el papel
console.log(casa?"Verdadero": "Falso")
var carro = null
console.log(carro?"Verdadero": "Falso")
var arreglo = []
console.log(arreglo?"Verdadero": "Falso")

var a=-1
console.log(casa?"Verdadero": "Falso")

var a=0
console.log(casa?"Verdadero": "Falso")

var a=1
console.log(casa?"Verdadero": "Falso")

//var usuario = {"nombre":"jonathan",apellido:"caiza","cedula":'172248654685'}

console.log(usuario)

/*var usuario = {
    "nombre":"jonathan",
    apellido:"caiza",
    "cedula":'172248654685',
    imporimirEnConsola : function () {
        console.log(this.nombre + ' ' + this.apellido+ ' '+ this.cedula)
    }
}
*/
console.log("---------------")


var usuario = {
    "nombre":"jonathan",
    apellido:"caiza",
    cedula:'172248654685',
    imporimirEnConsola:sumaDosNumeros
}

function sumaDosNumeros(numeroUno, numeroDos){
    return numeroUno+numeroDos
}


var sumarDosNumerosVersionDos = function (numeroUno, numeroDos){
    return numeroUno+numeroDos
}



//console.log(sumaDosNumeros(1,2))

//console.log(sumarDosNumerosVersionDos(1,2))




console.log("---------------")


console.log(usuario.cedula)
console.log(usuario.nombre)
console.log(usuario.apellido)

console.log(usuario.imporimirEnConsola)

if (nombre !== edad){
    console.log("Verdadero")
}else{
    console.log("False")
}

console.log(fecha)



console.log("---------------")

var arregloDeNumeros = [1,2,3]
console.log(arregloDeNumeros)


var arregloDeNumeros = [1,'AAA',undefined, false, null, {nombre:'Jonathan', edad:22}, [] , function nombreDeFuncion(){
    return 1
}, sumaDosNumeros(1,5)]
console.log(arregloDeNumeros)



for (var aux = 0; aux < 10; aux++){
    console.log('Aux: ',aux)
}


