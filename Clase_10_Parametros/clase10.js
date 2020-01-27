var andres = {
    nombre: 'Andrés',
    apellido: 'Quiñones',
    edad: 27
}

var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(andres)
imprimirNombreEnMayusculas(dario)

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}