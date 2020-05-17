let miCondicion = true;

if (miCondicion) {
    //* Acciones a ejecutar si la condiciones es verdadera aca
} else {
    //! Acciones a ejecutar si la condicion no es verdadera
}


// Boliche 
// Para entrar tienen que ser mayores o iguales a 18 años y tener el documento con ellos.
let edadDeLaPersona = 21;
let edadPermitidaDeIngreso = 18;
let tieneElDocumento = true;
let permisoFirmado = true;

// F                         &&      T
if (edadDeLaPersona >= edadPermitidaDeIngreso && tieneElDocumento) {
    console.log("Felicitaciones pudo entrar, disfrute la fiesta");
} else {
    console.log("No cumple con los requisitos")
}

// Mismas condiciones o que tenga un permiso firmado por los papas.
//                            FALSO                                                
// if ((edadDeLaPersona >= edadPermitidaDeIngreso && tieneElDocumento) || (permisoFirmado && tieneElDocumento)) {
//     console.log("Pudiste entrar")
// } else {
//     console.log("No pudiste entrar")
// }

// if (tieneElDocumento && ((edadDeLaPersona >= edadPermitidaDeIngreso) || permisoFirmado)) {
//     console.log("Pudiste entrar")
// } else {
//     console.log("No pudiste entrar")
// }

