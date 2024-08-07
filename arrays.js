// How to create an Array ?

// 1. new Array() or Array()

const fruits = Array('🍎', '🍌', '🍊')
console.log(fruits)
// Output: [ '🍎', '🍌', '🍊' ]

const justOneNumber = Array(12)
console.log(justOneNumber)
// Output: [ <12 empty items> ]

const number = Array(1, 2, 3, 4, 5)
console.log(number)
// Output: [ 1, 2, 3, 4, 5 ]

// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)
// Output: [ 4 ]

const emptyArray = []
console.log(emptyArray)
// Output: []

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)
// Output: [ 'soccer', 'tennis', 'rugby' ]

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredients)
// Output: [ 'Flour', true, 2, { ingredient: 'Milk', quantity: '1 cup' }, false ]

// Accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit)
// Output: 🍎

// Length property

const numberOfFruits = fruits.length
console.log(numberOfFruits)
// Output: 3

// Mutability

fruits.push('🍉')
console.log(fruits)
// Output: [ '🍎', '🍌', '🍊', '🍉' ]


// Inmutability

const newFruits = fruits.concat(['🍇', '🥝'])
console.log(fruits)
console.log(newFruits)
// Output: [ '🍎', '🍌', '🍊', '🍉', '🍇', '🥝' ]

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)
// Output: true


// PRACTICAL EXERCISE: Sum all the elements of an Array.

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i=0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}

console.log(sum)