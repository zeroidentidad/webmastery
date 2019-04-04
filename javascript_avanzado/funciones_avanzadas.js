
// # 1 Crear una función de una línea que suma dos parámetros
const suma = (a, b) => a + b

// Funcion de Cierre (Closure): Qué devuelve la última línea?
const sumarA = x => y => x + y
var sumarA10 = sumarA(10)
sumarA10(3) 
// retorna 13

// Funcion de Serie (Currying): Qué devuelve la última línea?
const suma = (a, b) => a + b
const sumaSeriada = (a) => (b) => a + b
sumaSeriada(30)(1) 
// retorna 31


// Funciones de Serie (Currying): Qué devuelve la última línea?
const suma = (a, b) => a + b
const sumaSeriada = (a) => (b) => a + b
const suma5 = sumaSeriada(5)
suma5(12)
// retorna 17

// Funcion de Composición (Composing): Qué devuelve la última línea?
const componer = (f, g) => (a) => f(g(a));
const suma1 = (num) => num + 1;
const suma5 = (num) => num + 5;
componer(suma1, suma5)(10)
// retorna 16

//Cuáles son los dos elementos de una función pura?
1. Determinista --> siempre produce los mismos resultados dadas las mismas entradas
2. Sin efectos secundarios --> No depende de ningún cambio de estado o de datos durante la ejecución de un programa. Solo debe depender de sus elementos de entrada.