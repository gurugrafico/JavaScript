function Persona(nombre, apellido, edad, altura) {
   this.nombre = nombre
   this.apellido = apellido
   this.edad = edad
   this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mido ${this.altura}mts`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

var andres = new Persona('Andrés', 'Quiñones', 27, 1.78)
var messi = new Persona('Lionel', 'Messi', 32, 1.80)
var cristiano = new Persona('Cristiano', 'Ronaldo', 34, 1.82)