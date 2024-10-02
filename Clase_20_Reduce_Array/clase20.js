 var andres = {
     nombre: 'Andrés',
     apellido: 'Quiñones',
     altura: 1.72,
     cantidadDeLibros: 25
 }

 var juanda = {
     nombre: 'Juan',
     apellido: 'Quiñones',
     altura: 1.74,
     cantidadDeLibros: 53
 }

 var leo = {
     nombre: 'Leonardo',
     apellido: 'Quiñones',
     altura: 1.76,
     cantidadDeLibros: 46
 }

 var henry = {
     nombre: 'Henry',
     apellido: 'Quiñones',
     altura: 1.80,
     cantidadDeLibros: 102
 }

 var nubia = {
     nombre: 'Nubia',
     apellido: 'Espinel',
     altura: 1.78,
     cantidadDeLibros: 96
 }

 const esAlta = ({ altura }) => altura > 1.75

 var personas = [andres, juanda, leo, henry, nubia]

 var personasAltas = personas.filter(esAlta)
//  var personasAltas = personas.filter(function (persona) {
//      return persona.altura > 1.75
//  })

// persona.altura = persona.altura * 100
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

// var acum = 0

// for (var i = 0; i < personas.length; i++) {
//     acum = acum + personas[i].cantidadDeLibros
// }

const reducer = (acum, { cantidadDeLibros }) => 
    acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

 console.log(`Entre todos tienen ${totalDeLibros} libros`)