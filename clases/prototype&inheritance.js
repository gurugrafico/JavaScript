// Prototipos y herencia

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido")
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza;
    }
    emitirSonido() {
        console.log("El perro ladra")
    }
    correr() {
        console.log(`${this.nombre} corre alegremente.`)
    }
}

const perro1 = new Perro("Rex", "Perro", "Schnauzer");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevoMetodo = function() {
    console.log("Este es un método");
}

perro1.nuevoMetodo = function() {
    console.log("Este es un método");
}

Perro.prototype.segundoMetodo = function() {
    console.log("Es otro nuevo método");
}