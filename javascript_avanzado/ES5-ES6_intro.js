// cambia todo lo que se encuentra debajo al nuevo Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = test;


// Destructurazión
const persona = {
    nombre : "Jesus",
    apellido  : "Ferrer",
    edad       : 26,
    colorOjos  : "blue"
};

const { nombre, apellido, edad, colorOjos } = persona;


// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {a, b, c};


// Template strings
const message = `Hola ${nombre} te he conocido antes? Creo que nos conocimos en ${ciudad}. el verano pasado, no???`;


// default arguments
// default edad 10;
const esEdadValida = (edad = 10) => edad;

// Symbol
// Crear un symbol: "Este es mi primer Symbol"
const sym = Symbol('Este es mi primer Symbol');

// Funciones Arrow
const dondeEstoy = (username, ubicacion) => {
    if (username && ubicacion) {
        return "No estoy perdido";
    } else {
        return "Estoy totalmente perdido!":
    }
}