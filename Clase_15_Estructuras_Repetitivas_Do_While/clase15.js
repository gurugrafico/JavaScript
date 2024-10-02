var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve())
if (contador === 1) {
console.log(`Fui ${contador} vez a ver si llovía`)
}
   else {
   console.log(`Fui ${contador} veces a ver si llovía`)
   }
