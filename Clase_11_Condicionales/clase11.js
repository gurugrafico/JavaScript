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

imprimirProfesiones(andres)