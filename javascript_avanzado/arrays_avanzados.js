// Completa las siguientes preguntas usando este array:
const array = [
	{
		username: "jesus",
		equipo: "red",
		puntaje: 777,
		items: ["pelota", "libro", "lapicero"]
	},
	{
		username: "vero",
		equipo: "blue",
		puntaje: 10,
		items: ["cinta", "mochila", "lapicero"]
	},
	{
		username: "karent",
		equipo: "red",
		puntaje: 55,
		items: ["pelota", "borrador", "lapicero"]
	},
	{
		username: "karla",
		equipo: "green",
		puntaje: 1,
		items: ["libro", "lapicero"]
	},

];

//Cree una matriz usando forEach que tenga todos los nombres de usuario con un "!" a cada uno de los username
let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);

//Cree una matriz usando map que tenga todos los nombres de usuario con un "?" a cada uno de los username
const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);

//Filtra la matriz para incluir solo a los usuarios que están en equipo: red
const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);

//Descubre la puntuación total de todos los usuarios utilizando reduce
const total = array.reduce((acumulador, user) => {
	return acumulador + user.score
}, 0);
console.log(total);


// (1), Cuál es el valor de i? INDEX de la matriz.
// (2), Hacer este map funcion pura:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})



//BONUS: cree una nueva lista con toda la información del usuario, pero agregue "!" Al final de cada artículo que posean.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);

