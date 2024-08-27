class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`) //Hola, mi nombre es Andrés y tengo 31 años.
    }
}

// Hasta aquí es un blueprint.

const persona1 = new Persona("Andrés", 31);

persona1.saludar();