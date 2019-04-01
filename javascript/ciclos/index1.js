var tareas = [
"limpiar cuarto",
"cepillar dientes",
"ejercicio",
"estudiar javascript",
"comer sano"
];

var tareasLength = tareas.length;

/*for (var i=0; i<tareasLength; i++){
	//tareas[i] = tareas[i]+"!"; console.log(tareas[i]);
	console.log(tareas[i], i);
}*/

tareas.forEach( function(tarea, i) {
	console.log(tarea, i);
});

function logTareas(tarea, i){
	console.log(tarea, i);
}

tareas.forEach(logTareas);

/*var contador = 0;
while(contador<10){
	console.log(contador);
	contador++;
}*/

/*var contador1 = 10;
do{
	console.log(contador1);
	contador1--;
}while(contador1>0);*/
