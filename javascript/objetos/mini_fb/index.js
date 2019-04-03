// 2. Cree una matriz que contenga el objeto que ha creado anteriormente y nombre la "base de datos" array
var database = [
	{
		username: "zero",
		password: "secret"
	},
	{
		username: "otro",
		password: "secret"
	},
	{
		username: "nose",
		password: "secret"
	}		
];

// 3. Cree una matriz llamada "newsfeed" que contiene 3 objetos con propiedades "username" y "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "¡Tan cansado de todo ese aprendizaje!"
	},
	{
		username: "Sally",
		timeline: "Javascript es cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript es muy bueno!"
	}
];

var userNameIn = prompt("Cual es usuario:"); 
var passwordIn = prompt("Cual es tu contraseña:"); 


function usuarioValido(user, pass){

	for(var i=0; i < database.length; i++){
		if(user === database[i].username && pass === database[i].password){
			return true;
		} 
	}
	return false;
}

function singIn(user, pass){

	if(usuarioValido(user, pass) == true){
		console.log(newsfeed);
	} else {
		alert("usuario o password incorrecto");
	}
}

singIn(userNameIn, passwordIn);