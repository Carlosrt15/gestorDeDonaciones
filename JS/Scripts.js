
let contadorGlobal = [];
// Revisar en clase
let organizacionesSeleccionadas = [];

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
        contadorCruzRoja = contadorCruzRojaGlobal;
        contadorCruzRoja++;
        contadorGlobal.push(1);
        let TotalCuentas = precioCruzRoja * contadorCruzRoja;
        
        

        
        if(contadorCruzRoja === 1){
            organizacionesSeleccionadas.push("CruzRoja");
        }

        contadorCruzRojaGlobal = contadorCruzRoja;
            totalCruzRoja = TotalCuentas;
                
    });
   
        
}
  
        

function contadorUnicef(){
    let precioUnicef = 10;
    let contadorUnicef = 0;

    const imgUnicef =  document.getElementById("Unicef");

    imgUnicef.addEventListener("click", () => {
        contadorUnicef = contadorUnicefGlobal;
        contadorUnicef++;
        contadorGlobal.push(1);
        
        let TotalUnicef = precioUnicef * contadorUnicef ;
        

        if(contadorUnicef === 1){
            organizacionesSeleccionadas.push("Unicef");
        }

        // actualizar globales
        contadorUnicefGlobal = contadorUnicef;
        totalUnicef = TotalUnicef;
    });
}


function contadorWwf(){
    let precioWwf = 7;
    let contadorWwf = 0;
   
    const imgWwf = document.getElementById("Wwf");

    imgWwf.addEventListener("click", () => {
        contadorWwf = contadorWwfGlobal;
        contadorWwf++;
        contadorGlobal.push(1);
        let TotalCuentas = precioWwf * contadorWwf;
        

        if(contadorWwf === 1){
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
        contadorMsf = contadorMsfGlobal;
        contadorMsf++;
        contadorGlobal.push(1);
        let TotalCuentas = precioMsf * contadorMsf;
        

        if(contadorMsf === 1){
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
        contadorSTC = contadorSTCGlobal;
        contadorSTC++;
        contadorGlobal.push(1);
        let TotalCuentas = precioSTC * contadorSTC;
        
                
        if(contadorSTC === 1){
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
        contadorGreenpeace = contadorGreenpeaceGlobal;
        contadorGreenpeace++;
        contadorGlobal.push(1);
        let TotalCuentas = precioGreenpeace * contadorGreenpeace;
        

        if(contadorGreenpeace === 1){
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
        contadorAI = contadorAIGlobal;
        contadorAI++;
        contadorGlobal.push(1);
        let TotalCuentas = precioAI * contadorAI;
        

        if(contadorAI === 1){
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

        contadorCaritas = contadorCaritasGlobal;
        contadorCaritas++;
        contadorGlobal.push(1);
        let TotalCuentas = precioCaritas * contadorCaritas;
        

        if(contadorCaritas === 1){
            organizacionesSeleccionadas.push("Caritas");
        }

        // actualizar globales
        contadorCaritasGlobal = contadorCaritas;
        totalCaritas = TotalCuentas;
    });
}


function contadorFVF(){
    let precioFVF = 4; 
    let contadorFVF = 0;

    const imgFVF = document.getElementById("FVF");

    imgFVF.addEventListener("click", () => {
        contadorFVF = contadorFVFGlobal;
        contadorFVF++;
        contadorGlobal.push(1);
        let TotalCuentas = precioFVF * contadorFVF;
        

        if(contadorFVF === 1){
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
        contadorAldeas = contadorAldeasGlobal;
        contadorAldeas++;
        contadorGlobal.push(1);
        let TotalCuentas = precioAldeas * contadorAldeas;
        

        if(contadorAldeas === 1){
            organizacionesSeleccionadas.push("Aldeas infantiles");
        }

        // actualizar globales
        contadorAldeasGlobal = contadorAldeas;
        totalAldeas = TotalCuentas;
    });
}



function botonFinalizar() {
    const tomarBoton = document.getElementById("finalizar");
    const tomarDiv = document.getElementById("resultado");

    tomarBoton.addEventListener("click", () => {
        let totalDonacion = 0;
        let totalAportaciones = 0;
        let resultadoHTML = "<h3>Resumen de donaciones</h3><ul>";

        if (contadorCruzRojaGlobal > 0) {
            resultadoHTML += "<li>Cruz Roja ---- " + contadorCruzRojaGlobal + " aportaciones (" + totalCruzRoja + " €)</li>";
            totalDonacion += totalCruzRoja;
            totalAportaciones += contadorCruzRojaGlobal;
        }

        if (contadorUnicefGlobal > 0) {
            resultadoHTML += "<li>Unicef ---- " + contadorUnicefGlobal + " aportaciones (" + totalUnicef + " €)</li>";
            totalDonacion += totalUnicef;
            totalAportaciones += contadorUnicefGlobal;
        }

        if (contadorWwfGlobal > 0) {
            resultadoHTML += "<li>WWF ---- " + contadorWwfGlobal + " aportaciones (" + totalWwf + " €)</li>";
            totalDonacion += totalWwf;
            totalAportaciones += contadorWwfGlobal;
        }

        if (contadorMsfGlobal > 0) {
            resultadoHTML += "<li>MSF ---- " + contadorMsfGlobal + " aportaciones (" + totalMsf + " €)</li>";
            totalDonacion += totalMsf;
            totalAportaciones += contadorMsfGlobal;
        }

        if (contadorSTCGlobal > 0) {
            resultadoHTML += "<li>STC ---- " + contadorSTCGlobal + " aportaciones (" + totalSTC + " €)</li>";
            totalDonacion += totalSTC;
            totalAportaciones += contadorSTCGlobal;
        }

        if (contadorGreenpeaceGlobal > 0) {
            resultadoHTML += "<li>Greenpeace ---- " + contadorGreenpeaceGlobal + " aportaciones (" + totalGreenpeace + " €)</li>";
            totalDonacion += totalGreenpeace;
            totalAportaciones += contadorGreenpeaceGlobal;
        }

        if (contadorAIGlobal > 0) {
            resultadoHTML += "<li>AI ---- " + contadorAIGlobal + " aportaciones (" + totalAI + " €)</li>";
            totalDonacion += totalAI;
            totalAportaciones += contadorAIGlobal;
        }

        if (contadorCaritasGlobal > 0) {
            resultadoHTML += "<li>Cáritas ---- " + contadorCaritasGlobal + " aportaciones (" + totalCaritas + " €)</li>";
            totalDonacion += totalCaritas;
            totalAportaciones += contadorCaritasGlobal;
        }

        if (contadorFVFGlobal > 0) {
            resultadoHTML += "<li>FVF ---- " + contadorFVFGlobal + " aportaciones (" + totalFVF + " €)</li>";
            totalDonacion += totalFVF;
            totalAportaciones += contadorFVFGlobal;
        }

        if (contadorAldeasGlobal > 0) {
            resultadoHTML += "<li>Aldeas Infantiles ---- " + contadorAldeasGlobal + " aportaciones (" + totalAldeas + " €)</li>";
            totalDonacion += totalAldeas;
            totalAportaciones += contadorAldeasGlobal;
        }

        resultadoHTML += "</ul>";
        resultadoHTML += "<p><strong>Donación final:</strong> " + totalDonacion + " €</p>";
        resultadoHTML += "<p><strong>Donación media:</strong> " + (totalDonacion / totalAportaciones).toFixed(2) + " €/aportación</p>";

        tomarDiv.innerHTML = resultadoHTML;



       
        contadorGlobal = [];
        organizacionesSeleccionadas = [];

        contadorCruzRojaGlobal = 0; totalCruzRoja = 0;
        contadorUnicefGlobal = 0; totalUnicef = 0;
        contadorWwfGlobal = 0; totalWwf = 0;
        contadorMsfGlobal = 0; totalMsf = 0;
        contadorSTCGlobal = 0; totalSTC = 0 ;
        contadorGreenpeaceGlobal = 0; totalGreenpeace = 0;
        contadorAIGlobal = 0; totalAI = 0;
        contadorCaritasGlobal = 0; totalCaritas = 0;
        contadorFVFGlobal = 0; totalFVF = 0;
        contadorAldeasGlobal = 0; totalAldeas = 0;

         totalDonacion = 0;
         totalAportaciones = 0;

    });

     


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
// Revisar en clase


