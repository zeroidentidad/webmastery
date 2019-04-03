var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLongitud() {
	return input.value.length;
}

function crearElementoLista() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function agregarDespuesClick() {
	if (inputLongitud() > 0) {
		crearElementoLista();
	}
}

function agregarDespuesKeypress(event) {
	if (inputLongitud() > 0 && event.keyCode === 13) {
		crearElementoLista();
	}
}

button.addEventListener("click", agregarDespuesClick);

input.addEventListener("keypress", agregarDespuesKeypress); // evento enter = 13