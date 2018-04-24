let arregloNumero = [1,2,3,4,5];

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
        console.toLocaleString(sumar);

    }
);

