// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Inmutability).

// map ()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num ** 2) // O num * num

console.log(numbers)
console.log(squaredNumbers)

// Output: [ 1, 2, 3, 4, 5 ]
// Output: [ 1, 4, 9, 16, 25 ]

// forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

// Output: red
// pink
// blue
// [ 'red', 'pink', 'blue' ]

// EXERCISE 1: Fahrenheit to Celsius conversion

const temperaturesInFahrenheit = [32, 68, 95, 104, 212]

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => 5/9 * (fahrenheit - 32))

console.log('Temperatures in Fahrenheit: ', temperaturesInFahrenheit)
console.log('Temperatures in Celsius: ', temperaturesInCelsius)

// EXERCISE 2: Sum all the elements in an Array

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

/* for (let i=0; i < newNumbers.length; i++) {
    sum += newNumbers[i]
}

console.log(sum) */

newNumbers.forEach(number => {
    sum += number
})

console.log('Array of Numbers: ', newNumbers)
console.log('Sum of Numbers: ', sum)
