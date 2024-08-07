// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Inmutability).

// filter()

const numbers = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log (numbers)
console.log(evenNumbers)

// reduce() . Caso 1

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum)

// reduce() . Caso 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye', 'apple', 'apple', 'hello', 'hello']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordFrecuency)