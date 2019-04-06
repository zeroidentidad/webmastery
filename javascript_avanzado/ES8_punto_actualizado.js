// Resuelve los siguientes problemas:

// #1) Alinea la tortuga y el conejo en la línea de salida:
const startLine = '     ||<- Start line';
let tortuga = '🐢';
let conejo = '🐇';

// Debe tener un aspecto como este:
'     ||<- Start line'
'       🐢'
'       🐇'

// Cuando tu hagas:
console.log(startLine);
console.log(tortuga);
console.log(conejo);


tortuga = tortuga.padStart(8);
conejo = conejo.padStart(8);


// #2) Qué sucede cuando ejecutas tortuga.trim().padEnd(8, '=') en la variable tortuga
// Lee sobre lo que hace el segundo parámetro en padEnd y padStart
tortuga = tortuga.trim().padEnd(9, '=');

'     ||<- Start line'
'🐢======='
'       🐇'


// #3) Obtener el objeto de abajo para ir:
let obj = {
  mi: 'nombre',
  es: 'Rodolfo',
  el: 'reno'
}
// a esto:
'mi nombre es Rodolfo el reno'

Object.entries(obj).map(value => value.join(" ")).join(' ')