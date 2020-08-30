//variables y arrays
let scorePositivo = 0;
let scoreNegativo = 0;
let seleccion = 0;
let quest = 0;
let list = [0, 0, 0, 0];
let list2 = [0, 0, 0, 0];
let res1 = 0;
let res2 = 0;
let res3 = 0;
let res4 = 0;
let numAnswer = 0;
let numComprobador = 1;

//llamando a setNombre y devolviendolo en sec2(saludo) y en sec11(resultado)
function setNombre() {
    let name = document.getElementById("nombre").value;
    let doc = document.getElementById("saludo");
    doc.innerText = "¡A divertirse" + " " + name + "!";
    document.getElementById("nombre2").innerText = name + " tienes";
}
//enlaza texto trivia1 y lo cambia 
function triviaFrases() {
    seleccion = 1;
    document.getElementById("trivia1").innerText = "Jugaste trivia: Frases de mujeres emblemáticas";
}
function triviaHistoria() {
    seleccion = 2;
    document.getElementById("trivia1").innerText = "Jugaste trivia: Mujeres en la historia";
}

// funciones de respuestas positivas trivia1
function resPos1() {
    list[0] = 1; //en la pregunta 0 hay 1 pregunta correcta
}
function resPos2() {
    list[1] = 1;
}

function resPos3() {
    list[2] = 1;
}

function resPos4() {
    list[3] = 1;
}


//funciones de respuestas negativas trivia1
function resNeg1() {
    list[0] = 0;
}
function resNeg2() {
    list[1] = 0;
}

function resNeg3() {
    list[2] = 0;
}

function resNeg4() {
    list[3] = 0;
}

//funciones de respuesta positiva trivia2

function triviaResPos1() {
    list2[0] = 1;
}
function triviaResPos2() {
    list2[1] = 1;
}

function triviaResPos3() {
    list2[2] = 1;
}

function triviaResPos4() {
    list2[3] = 1;
}

//funciones de respuesta negativa trivia2

function triviaResNeg1() {
    list2[0] = 0;
}
function triviaResNeg2() {
    list2[1] = 0;
}

function triviaResNeg3() {
    list2[2] = 0;
}

function triviaResNeg4() {
    list2[3] = 0;
}

//las funciones de arriba se aplican en esta funcion
function comprobar() {
    for (let i = 0; i < list.length; i++) {  //for es un bucle de pregunta en pregunta
        if (list[i] == 1 && seleccion == 1) {     //if encuentra el valor igual a 1 
            scorePositivo++;                //guarda el valor igual a 1 
        }
        if (list[i] == 0 && seleccion == 1) {     //if encuentra el valor igual 0
            scoreNegativo++;                //guarda el valor igual el 0
        }

    }
    for (let i = 0; i < list2.length; i++) {
        if (list2[i] == 1 && seleccion == 2) {
            scorePositivo++;
        }
        if (list2[i] == 0 && seleccion == 2) {
            scoreNegativo++;
        }
    }
    //da resultados mencionando el valor guardado en la funcion comprobar
    document.getElementById("correctas").innerText = "Correctas " + scorePositivo;
    document.getElementById("incorrectas").innerText = "Incorrectas " + scoreNegativo;
}

function resetScore() {
    scorePositivo = 0;
    scoreNegativo = 0;
    document.getElementById("correctas").innerText = "Correctas " + scorePositivo;
    document.getElementById("incorrectas").innerText = "Incorrectas " + scoreNegativo;
}

