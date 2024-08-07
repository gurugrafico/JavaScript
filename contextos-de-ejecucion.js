/* 
// EJEMPLO 1

const productName = 'Smartphone'
const price = 499
const brand = 'TechCo'

function getProductDetails () {
    const productName = 'Laptop'
    const price = '899'

    return `The ${productName} costs $${price} and is from the brand ${brand}.`
}

// console.log(getProductDetails())
console.log(`The ${productName} costs $${price} and is from the brand ${brand}.`) */


/* // EJEMPLO 2

const userPoints = 150

function checkAccess() {
    if (userPoints < 100) {
        const message = "Access denied: Insufficient points!"
        return message
    } else {
        const message = "Access granted: Enjoy the premium features!"
        return message
    }
}

console.log(checkAccess()) */

// EJEMPLO 3

const globalVariable = '🙂'

function localOne() {
    console.log('GLOBAL 1: ', globalVariable)
    // console.log('LOCAL 1: ', localVariable)

    function localTwo() {
        const carrot = '🥕'
        console.log('LOCAL 2: ', carrot)
    }

    function localThree() {
        console.log('LOCAL 3: ', carrot)
    }

    localTwo()
    localThree()
}

console.log(localOne())