//#1 cambie esta función en ternaria y asigne una variable llamada puntosExperiencia
function puntosExperiencia() {
    if (ganarBatalla()) {
        return 10;
    } else {
        return 1;
    }
}

var puntosExperiencia = ganarBatalla() ? 10 : 1;

//Usando esta función, responde las siguientes preguntas:
function moveCommand(direccion) { 
    var quePasa;
    switch (direccion) {
        case "adelante":
            break;
            quePasa = "te encuentras con un monstruo";
        case "atras":
            quePasa = "llegaste a casa";
            break;
            break;
        case "derecha":
            return quePasa = "encontraste un rio";
            break;
        case "izquierda":
            break;
            return quePasa = "te topas con un troll";
            break;
        default:
            quePasa = "porfa, ingrese direccion valida";
    }
    return quePasa;
}

//#2 valor de retorno cuando moveCommant("adelante");
undefined

//#3 valor de retorno cuando moveCommant("atras");
"llegaste a casa"

//#4 valor de retorno cuando moveCommant("derecha");
"encontraste un rio"

//#5 valor de retorno cuando moveCommant("izquierda");
undefined 

//BONUS: Ve y escribe tu propia función de switch. Lleva tiempo acostumbrarse a la sintaxis.