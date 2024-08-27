/*
const persona = {
    nombre: "Andrés",
    apellido: "Quiñones"
}
*/

// Estructura de una función constructora

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona("Andrés", "Quiñones", 31);

console.log(persona1)

const persona2 = new Persona("Daniela", "Cabezas", 26);

console.log(persona2)