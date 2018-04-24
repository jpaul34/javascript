let arregloNumero = [1,2,3,4,5];

let arregloDeudas = [13,185,15,585,8,15,58,5,52,2,56,55];





let sumarDosNumeros = (numeroUno: number,
                       numeroDos: number) => { //Fat arrow funtc
    return numeroUno + numeroDos;
};

let totalEdades = arregloDeNumeros =>{
    //Codigo extra
};


let facultades = function (a) {
    return ['Facultad1','Facultad2'];
};


let facultadesDos = a => ['Facultades1', 'Facultad2']; // Retorna el arreglo



arregloNumero.forEach(
    (valor, indice, arreglo)=>{  //callbackfun
        console.log('valor', valor);
        console.log('indice', indice);
        console.log('arreglo', arreglo);

    }
);

let sumar = 0;
arregloNumero.forEach(
    (valor, indice, arreglo)=>{  //callbackfun
        sumar = sumar + valor
        console.log(sumar);

    }
);


let resultadodDeLaSuma = arregloNumero.reduce(
    (totalAcumulado, valorArreglo)=>{     //recive dos aprametros el total acumulado y el valor del arreglo
        return totalAcumulado + valorArreglo;
    },
    0
);

console.log('resultadoDeLasuma', resultadodDeLaSuma);



let arregloDeUsuarios: Array <UsuarioArreglo> = [
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
]

let resultadoDeEdades = arregloDeUsuarios.reduce(
        (totalEdadAcumulada, usuarioArreglo: UsuarioArreglo) =>{
            return totalEdadAcumulada + usuarioArreglo.edad;
        },
        0

    )



console.log('resultadoDeLasEdades', arregloDeUsuarios)

interface UsuarioArreglo{
    nombre: string;
    edad: number;
    deuda?: number
}

function calcularDeudaDeUsuario(edad: number) {
    return arregloDeudas.reduce(
        (totalAcumulado, deuda: number)=>{
            return totalAcumulado + ((edad)/100)*deuda;
        },0);
}


let usuariosConCincoAñosMenos = arregloDeUsuarios
    .map(
        (usuario:UsuarioArreglo) => {
            usuario.edad = usuario.edad - 5;
            usuario.deuda =  calcularDeudaDeUsuario(usuario.edad);
            return usuario;
        }
    )
    .filter((usuario:UsuarioArreglo)=>{
        //true se devuleve , false no se devulve
        return (usuario.deuda<100);
    })
;

console.log('\n-------------\nusuariosConCincoAñosMenos', usuariosConCincoAñosMenos);

// Operador Filter ---> se péude concatenar a otros operadores





