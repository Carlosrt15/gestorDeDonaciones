let contadorGlobal = [];
let organizacionesSeleccionadas = [];

let resumenMostrado = false; 

let contadorCruzRojaGlobal = 0, totalCruzRoja = 0;
let contadorUnicefGlobal = 0, totalUnicef = 0;
let contadorWwfGlobal = 0, totalWwf = 0;
let contadorMsfGlobal = 0, totalMsf = 0;
let contadorSTCGlobal = 0, totalSTC = 0;
let contadorGreenpeaceGlobal = 0, totalGreenpeace = 0;
let contadorAIGlobal = 0, totalAI = 0;
let contadorCaritasGlobal = 0, totalCaritas = 0;
let contadorFVFGlobal = 0, totalFVF = 0;
let contadorAldeasGlobal = 0, totalAldeas = 0;


function contadorCruzRoja(){
    let precioCruzRoja = 5;
    let contadorCruzRoja = 0;
    const imgCruzRoja = document.getElementById("CruzRoja");

    imgCruzRoja.addEventListener("click", () => {
        
        if (resumenMostrado) {
            document.getElementById("resultado").innerHTML = "";
            resumenMostrado = false;
        }

        
        contadorCruzRoja = contadorCruzRojaGlobal;
        contadorCruzRoja++;
        contadorGlobal.push(1);
        let TotalCuentas = precioCruzRoja * contadorCruzRoja;

        if (contadorCruzRoja === 1) {
            organizacionesSeleccionadas.push("CruzRoja");
        }

        contadorCruzRojaGlobal = contadorCruzRoja;
        totalCruzRoja = TotalCuentas;
    });
}


function contadorUnicef(){
    let precioUnicef = 10;
    let contadorUnicef = 0;
    const imgUnicef = document.getElementById("Unicef");

    imgUnicef.addEventListener("click", () => {
        if (resumenMostrado) {
            document.getElementById("resultado").innerHTML = "";
            resumenMostrado = false;
        }

        contadorUnicef = contadorUnicefGlobal;
        contadorUnicef++;
        contadorGlobal.push(1);
        let TotalUnicef = precioUnicef * contadorUnicef;

        if (contadorUnicef === 1) {
            organizacionesSeleccionadas.push("Unicef");
        }

        contadorUnicefGlobal = contadorUnicef;
        totalUnicef = TotalUnicef;
    });
}


function contadorWwf(){
    let precioWwf = 7;
    let contadorWwf = 0;
    const imgWwf = document.getElementById("Wwf");

    imgWwf.addEventListener("click", () => {
        if (resumenMostrado) {
            document.getElementById("resultado").innerHTML = "";
            resumenMostrado = false;
        }

        contadorWwf = contadorWwfGlobal;
        contadorWwf++;
        contadorGlobal.push(1);
        let TotalCuentas = precioWwf * contadorWwf;

        if (contadorWwf === 1) {
            organizacionesSeleccionadas.push("WWF");
        }

        contadorWwfGlobal = contadorWwf;
        totalWwf = TotalCuentas;
    });
}


function contadorMsf(){
    let precioMsf = 12;
    let contadorMsf = 0;
    const imgMsf = document.getElementById("MSF");

    imgMsf.addEventListener("click", () => {
        if (resumenMostrado) {
            document.getElementById("resultado").innerHTML = "";
            resumenMostrado = false;
        }

        contadorMsf = contadorMsfGlobal;
        contadorMsf++;
        contadorGlobal.push(1);
        let TotalCuentas = precioMsf * contadorMsf;

        if (contadorMsf === 1) {
            organizacionesSeleccionadas.push("MSF");
        }

        contadorMsfGlobal = contadorMsf;
        totalMsf = TotalCuentas;
    });
}


function contadorSTC(){
    let precioSTC = 8;
    let contadorSTC = 0;
    const imgSTC = document.getElementById("STC");

    imgSTC.addEventListener("click", () => {
        if (resumenMostrado) {
            document.getElementById("resultado").innerHTML = "";
            resumenMostrado = false;
        }

        contadorSTC = contadorSTCGlobal;
        contadorSTC++;
        contadorGlobal.push(1);
        let TotalCuentas = precioSTC * contadorSTC;

        if (contadorSTC === 1) {
            organizacionesSeleccionadas.push("STC");
        }

        contadorSTCGlobal = contadorSTC;
        totalSTC = TotalCuentas;
    });
}


function contadorGreenpeace(){
    let precioGreenpeace = 6;
    let contadorGreenpeace = 0;
    const imgGreenpeace = document.getElementById("Greenpeace");

    imgGreenpeace.addEventListener("click", () => {
        if (resumenMostrado) {
            document.getElementById("resultado").innerHTML = "";
            resumenMostrado = false;
        }

        contadorGreenpeace = contadorGreenpeaceGlobal;
        contadorGreenpeace++;
        contadorGlobal.push(1);
        let TotalCuentas = precioGreenpeace * contadorGreenpeace;

        if (contadorGreenpeace === 1) {
            organizacionesSeleccionadas.push("Greenpeace");
        }

        contadorGreenpeaceGlobal = contadorGreenpeace;
        totalGreenpeace = TotalCuentas;
    });
}


function contadorAI(){
    let precioAI = 11;
    let contadorAI = 0;
    const imgAI = document.getElementById("AI");

    imgAI.addEventListener("click", () => {
        if (resumenMostrado) {
            document.getElementById("resultado").innerHTML = "";
            resumenMostrado = false;
        }

        contadorAI = contadorAIGlobal;
        contadorAI++;
        contadorGlobal.push(1);
        let TotalCuentas = precioAI * contadorAI;

        if (contadorAI === 1) {
            organizacionesSeleccionadas.push("AI");
        }

        contadorAIGlobal = contadorAI;
        totalAI = TotalCuentas;
    });
}


function contadorCaritas(){
    let precioCaritas = 9;
    let contadorCaritas = 0;
    const imgCaritas = document.getElementById("Caritas");

    imgCaritas.addEventListener("click", () => {
        if (resumenMostrado) {
            document.getElementById("resultado").innerHTML = "";
            resumenMostrado = false;
        }

        contadorCaritas = contadorCaritasGlobal;
        contadorCaritas++;
        contadorGlobal.push(1);
        let TotalCuentas = precioCaritas * contadorCaritas;

        if (contadorCaritas === 1) {
            organizacionesSeleccionadas.push("Caritas");
        }

        contadorCaritasGlobal = contadorCaritas;
        totalCaritas = TotalCuentas;
    });
}


function contadorFVF(){
    let precioFVF = 4;
    let contadorFVF = 0;
    const imgFVF = document.getElementById("FVF");

    imgFVF.addEventListener("click", () => {
        if (resumenMostrado) {
            document.getElementById("resultado").innerHTML = "";
            resumenMostrado = false;
        }

        contadorFVF = contadorFVFGlobal;
        contadorFVF++;
        contadorGlobal.push(1);
        let TotalCuentas = precioFVF * contadorFVF;

        if (contadorFVF === 1) {
            organizacionesSeleccionadas.push("FVF");
        }

        contadorFVFGlobal = contadorFVF;
        totalFVF = TotalCuentas;
    });
}


function contadorAldeasInfantiles(){
    let precioAldeas = 13;
    let contadorAldeas = 0;
    const imgAldeas = document.getElementById("AldeasInfantiles");

    imgAldeas.addEventListener("click", () => {
        if (resumenMostrado) {
            document.getElementById("resultado").innerHTML = "";
            resumenMostrado = false;
        }

        contadorAldeas = contadorAldeasGlobal;
        contadorAldeas++;
        contadorGlobal.push(1);
        let TotalCuentas = precioAldeas * contadorAldeas;

        if (contadorAldeas === 1) {
            organizacionesSeleccionadas.push("Aldeas infantiles");
        }

        contadorAldeasGlobal = contadorAldeas;
        totalAldeas = TotalCuentas;
    });
}



}

contadorCruzRoja();
contadorUnicef();
contadorWwf();
contadorMsf();
contadorSTC();
contadorGreenpeace();
contadorAI();
contadorCaritas();
contadorFVF();
contadorAldeasInfantiles();
botonFinalizar();
