 var andres = {
     nombre: 'Andrés',
     apellido: 'Quiñones',
     altura: 1.72
 }

 var juanda = {
     nombre: 'Juan',
     apellido: 'Quiñones',
     altura: 1.74
 }

 var leo = {
     nombre: 'Leonardo',
     apellido: 'Quiñones',
     altura: 1.76
 }

 var henry = {
     nombre: 'Henry',
     apellido: 'Quiñones',
     altura: 1.80
 }

 var nubia = {
     nombre: 'Nubia',
     apellido: 'Espinel',
     altura: 1.78
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

 console.log(personasCms)