// PONGO EL VALOR INICIAL DEL CONTADOR A 0

let counter = 0;

// SELECCIONO EL VALOR Y LOS BOTONES SEGÚN SU ID PARA LUEGO PODER MANEJARLOS

const value = document.getElementById("value");

const btnIncrease = document.getElementById("btnI");
const btnDecrease = document.getElementById("btnD");
const btnReset = document.getElementById("btnR");

// AÑADO EL EVENTO ONCLICK AL BOTÓN "INCREMENTAR"

btnIncrease.onclick = function () {
    // AUMENTO EL CONTADOR A 1
    counter++;
    // MUESTO EL VALOR DEL COUNTER CAMBIANDO EL HTML
    value.innerHTML = counter;
    // GENERO UNA ESTRUCTURA DE CONTROL PARA PODER ENVIAR UN MENSAJE AL USUARIO CADA VEZ QUE SE MUESTRE EL 7 EN EL CONTADOR
    if (counter === 7) {
        message.innerHTML = "¡Bravo, has llegado al mensaje secreto!";
    } else {
        message.innerHTML = ""; // ESTO HARÁ QUE SI NO SE MUESTRA EL 7 SE ELIMINE EL MENSAJE
    }
}

// AÑADO EL EVENTO ONCLICK AL BOTÓN "DECREMENTAR"

btnDecrease.onclick = function () {
    // GENERO OTRA ESTRUCTURA DE CONTROL PARA PONER EL LÍMITE DE LA RESTA DEL CONTADOR EN 0
    if (counter > 0) {
        counter--;
    }
    value.innerHTML = counter;
    if (counter === 7) {
        message.innerHTML = "¡Bravo, has llegado al mensaje secreto!";
    } else {
        message.innerHTML = "";
    }
}

// AÑADO EL EVENTO ONCLICK AL BOTÓN DE "REINICIAR"

btnReset.onclick = function () {
    // PONGO EL CONTADOR A 0
    counter = 0;
    value.innerHTML = counter;
    if (counter === 7) {
        message.innerHTML = "¡Bravo, has llegado al mensaje secreto!";
    } else {
        message.innerHTML = "";
    }
}