/* Promesas

Las promesas tienen 3 estados:
1. Pending
2. Fullfilled
3. Rejected

Y manejan 2 callbacks:

1. Resolve
2. Reject

2 métodos en las promesas

then() -> Se ejecuta cuando la promesa se resuelve.
catch() -> Se ejecuta cuando la promesa NO se resuelve. (Aquí obtenemos el error que nos dices por qué no se está resolviendo)

*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;
        if(operationSuccessful){
            resolve("La operación fue exitosa!");
        } else {
            reject("Falló la operación");
        }
    }, 2000);   
})

// console.log(promise)

promise
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    });