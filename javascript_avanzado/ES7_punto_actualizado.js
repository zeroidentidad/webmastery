// Resuelve los siguientes problemas:

// # 1) Comprueba si esta matriz incluye el nombre "Antonio".
const dragones = ['Jesus', 'Vero', 'Karent', 'Karla'];

dragones.includes('Antonio') // false

// #2) Comprueba si esta matriz incluye algún nombre que tenga "Ver" dentro. Si lo hace, devuélvelo.
// nombre o nombres en una matriz.
const dragones = ['Jesus', 'Veronica', 'Karent', 'Karla'];

dragones.filter(name => name.includes('Ver')) // ['Veronica']

// #3) Cree una función que calcula la potencia de 100 de un número ingresado como parámetro
const potencia100 = (num) => num**100;

// #4) Usando la función del # 3, coloque el parámetro 10000. Cuál es el resultado?
// Investiga por qué obtienes este resultado.

potencia100(10000) // Infinito, gugol?