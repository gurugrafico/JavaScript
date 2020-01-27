var andres = {
    nombre: 'Andrés',
    apellido: 'Quiñones',
    edad: 27,
    diseñador: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: true,
    poeta: true,
    ingeniero: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.diseñador) {
        console.log('Diseñador')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    } else {
        console.log('No es cocinero')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.dj) {
        console.log('Dj')
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')
    }

    if (persona.poeta) {
        console.log('Poeta')
    }

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }
}

const MAYORÍA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORÍA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}