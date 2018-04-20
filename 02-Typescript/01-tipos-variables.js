//var nombre = 'Jonathan'
var segundoNombre = 'Jonathan';
var cedula = '1234567890';
segundoNombre = 'Paul';
//cedula = '0123456789'   // Da error read only
var URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre = 123;   // Duck Typing
var nombre;
var edad = 23;
var fecha = new Date();
var casado = false;
//let mascotas:objeto = {};
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Template String
        console.log("El usuario se llama \n        " + this.mNombre + " la cedula del usuario es \n        " + this.mCedula + ", la edad del usuario es:\n        " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('jonathan', 23, '123456789');
var usuarioOtro = { nombre: 'jonathan', edad: 23, cedula: '123456789' };
console.log(usuario);
console.log(usuarioOtro);
function noHagoNada() { }
console.log('No hago nada: ', noHagoNada());
var usuarioDos;
var usuarioCuatro;
usuarioCuatro = {
    m: m
};
