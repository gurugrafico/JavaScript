/*

Un objeto es una estructura de datos

key / value

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
}

*/

const persona = {
    nombre: "Andrés",
    edad: 31,
    direccion: {
        calle: "Calle 51 sur",
        ciudad: "Madrid",
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    },
};

console.log(persona);
persona.saludar();

persona.telefono = "3216548709";

console.log(persona.telefono);