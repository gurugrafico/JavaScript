var andres = {
    nombre: 'Andrés',
    apellido: 'Quiñones',
    edad: 27,
    peso: 60
}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso =  persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random()
    
    if (random < 0.25) {
        aumentarDePeso(andres)
    } else if (random < 0.5) {
        adelgazar(andres)
    }
}

console.log(`Al final del año ${andres.nombre} pesa ${andres.peso.toFixed(1)}kg`)

