// usando esta matriz,
var array = ["Banana", "Manzanas", "Naranjas", "Arándanos"];

// 1. Retire el Banana de la matriz.
array.shift();

// 2. Ordenar la matriz en orden.
array.sort();

// 3. Coloque "Kiwi" al final de la matriz.
array.push("Kiwi");

// 4. Elimina "Manzanas" de la matriz.
array.splice(0, 1);

// 5. Ordena la matriz en orden inverso.
array.reverse();

// usando esta matriz,
var array2 = ["Banana", ["Manzanas", ["Naranjas"], "Arándanos"]];
// acceder a "Naranjas".
array2[1][1][0];