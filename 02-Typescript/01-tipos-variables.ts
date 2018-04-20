//var nombre = 'Jonathan'
let segundoNombre = 'Jonathan'
const cedula = '1234567890'

segundoNombre = 'Paul'
//cedula = '0123456789'   // Da error read only

const URL_POLI = 'http://www.epn.edu.ec';

//segundoNombre = 123;   // Duck Typing

let nombre: String;
let edad: Number = 23;
let fecha: Date = new Date();
let casado: boolean = false;
//let mascotas:objeto = {};

class Usuario {

    public mNombre: String;
    private mEdad: Number;
    protected mCedula: String;

    constructor( nombre: String,
                 edad: Number,
                 cedula: String){
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    public imprimirEnConsola(){
        //Template String
        console.log(`El usuario se llama 
        ${this.mNombre} la cedula del usuario es 
        ${this.mCedula}, la edad del usuario es:
        ${this.mEdad}`);
    }

}

let usuario: Usuario = new Usuario('jonathan', 23, '123456789');
let usuarioOtro = {nombre: 'jonathan',edad: 23, cedula: '123456789'};

console.log(usuario);
console.log(usuarioOtro);

function noHagoNada(){}
console.log('No hago nada: ', noHagoNada());

let usuarioDos:Usuario;

interface UsuarioDos {
    mNombre: String;
    mEdad: Number;
    mCedula: String;
    imprimirEnConsola(nombre:String):void;
    usuario:Usuario;
}

let  usuarioCuatro: UsuarioDos;
/*usuarioCuatro = {
}
*/

class UsuarioTres {
    constructor(public mNombre: String,
                private mEdad: Number,
                protected mCedula: String){
        
    }
}










