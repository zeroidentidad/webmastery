
// Para todos estos, cuál es el valor de cuando se llama a la función con el alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a); // -> 3
}

//#2
// primero debe ejecutar q2() en su consola para agregar el nuevo valor. entonces ejecute q22()
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a); // -> 5
}

// run console:
// q22() -- 0
// q2() -- undefined
// q22() -- 5

//#3
function q3() {
    window.a = "hello";
}

// primero debe ejecutar q3() en consola para agregar una propiedad a la ventana. luego ejecuta q32()
function q32() {
    alert(a); // -> "hello"
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a); // -> "test"
}

//#5 con la palabra clave var, si las sentencias no crean un nuevo alcance
var a = 2;
if (true) {
    var a = 5;
    alert(a); // -> 5
}
alert(a); // -> 5