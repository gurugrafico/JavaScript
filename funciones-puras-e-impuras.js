// Funciones puras

// Side Effects -> Efectos secundarios
// 1. Modificar variables globales
// 2. Modificar los parámetros de una función
// 3. Solicitudes HTTP (APIs)
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

function sum (a,b) {
    return a + b
}

// Funciones impuras

function sum (a,b) {
    console.log('A: ', a)
    return a + b
}

let total = 0

function sumWithSideEffect (a) {
    total += a
    return total
}

// Funciones puras

function square(x) {
    return x * x
}

function addTen (y) {
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)