var arregloNumero = [1, 2, 3, 4, 5];
var arregloDeudas = [13, 185, 15, 585, 8, 15, 58, 5, 52, 2, 56, 55];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdades = function (arregloDeNumeros) {
    //Codigo extra
};
var facultades = function (a) {
    return ['Facultad1', 'Facultad2'];
};
var facultadesDos = function (a) { return ['Facultades1', 'Facultad2']; }; // Retorna el arreglo
arregloNumero.forEach(function (valor, indice, arreglo) {
    console.log('valor', valor);
    console.log('indice', indice);
    console.log('arreglo', arreglo);
});
var sumar = 0;
arregloNumero.forEach(function (valor, indice, arreglo) {
    sumar = sumar + valor;
    console.log(sumar);
});
var resultadodDeLaSuma = arregloNumero.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado + valorArreglo;
}, 0);
console.log('resultadoDeLasuma', resultadodDeLaSuma);
var arregloDeUsuarios = [
    //let arregloDeUsuarios: UsuarioArreglo[]
    {
        nombre: 'Jonathan',
        edad: 28
    },
    {
        nombre: 'Paul',
        edad: 10
    },
    {
        nombre: 'Andres',
        edad: 70
    },
    {
        nombre: 'Juan',
        edad: 32,
    },
    {
        nombre: 'Andrea',
        edad: 25
    },
];
var resultadoDeEdades = arregloDeUsuarios.reduce(function (totalEdadAcumulada, usuarioArreglo) {
    return totalEdadAcumulada + usuarioArreglo.edad;
}, 0);
console.log('resultadoDeLasEdades', arregloDeUsuarios);
function calcularDeudaDeUsuario(edad) {
    return arregloDeudas.reduce(function (totalAcumulado, deuda) {
        return totalAcumulado + ((edad) / 100) * deuda;
    }, 0);
}
var usuariosConCincoAñosMenos = arregloDeUsuarios
    .map(function (usuario) {
    usuario.edad = usuario.edad - 5;
    usuario.deuda = calcularDeudaDeUsuario(usuario.edad);
    return usuario;
})
    .filter(function (usuario) {
    //true se devuleve , false no se devulve
    return (usuario.deuda < 100);
});
console.log('\n-------------\nusuariosConCincoAñosMenos', usuariosConCincoAñosMenos);
// Operador Filter ---> se péude concatenar a otros operadores
