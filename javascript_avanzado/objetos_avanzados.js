//Evalúa estos:
//#1
[2] === [2] // false
{} === {} // false

//#2 Cuál es el valor de la propiedad a para cada objeto?
const object1 = { a: 5 }; // asigna -> 4
const object2 = object1; // asigna -> 4
const object3 = object2; // asigna -> 4
const object4 = { a: 5}; // 5
object1.a = 4;


//#3 crear dos clases: una clase de animales y una clase de mamíferos. 
// cree una vaca que acepte un nombre, tipo y color y que tenga una forma de sonido que se adapte a su nombre, tipo y color.
class Animal {
	constructor(nombre, tipo, color) {
		this.nombre = nombre;
		this.color = color;
		this.tipo = tipo;
	}
}

class Mamifero extends Animal {
	constructor(nombre, tipo, color) {
		super(nombre, tipo, color)
	}
	sound() {
		console.log(`Muuuu soy ${this.nombre} y soy ${this.tipo} ${this.color} `);
	}
}

const vaca = new Mamifero('Shelly', 'vaca', 'cafe');

vaca.sound();

// instanciacion sobre herencia clasica