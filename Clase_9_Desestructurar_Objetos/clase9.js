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

//imprimirNombreEnMayusculas(andres)
//imprimirNombreEnMayusculas(dario)

//Objeto 1
var andres = {
    nombre: 'Andrés',
    apellido: 'Quiñones',
    edad: 27,
}

//Objeto 2
var lionel = {
    nombre: 'Lionel',
    apellido: 'Messi',
    edad: 32,
}

//Objeto 3
var cristiano = {
    nombre: 'Cristiano',
    apellido: 'Ronaldo',
    edad: 34,
}

function imprimirNombreYEdad ({ nombre,apellido,edad }) {
    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`)
}

imprimirNombreYEdad(andres)
imprimirNombreYEdad(lionel)
imprimirNombreYEdad(cristiano)