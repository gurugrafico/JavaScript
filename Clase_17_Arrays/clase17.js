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

 var personas = [andres, juanda, leo, henry, nubia]

 for (var i = 0; i < personas.length; i++) {
     var persona = personas[i]
     console.log(`${persona.nombre} mide ${persona.altura} mts`)
 }