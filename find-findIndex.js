// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Inmutability).

// find ()

const multiplesOf5 = [5, 10, 15, 20]

const firstNumberGreaterThan10 = multiplesOf5.find(number => number > 10)

console.log(multiplesOf5)
console.log(firstNumberGreaterThan10)

// findIndex()

const randomNumbers = [6, 14, 27, 56, 40]
const indexNumber = randomNumbers.findIndex(number => number > 50)

console.log(randomNumbers)
console.log(indexNumber)