
let contadorGlobal = [];


function contadorCruzRoja(){
    let precioCruzRoja = 5;
    let contadorCruzRoja = 0;
   
    
    const imgCruzRoja = document.getElementById("CruzRoja");

        imgCruzRoja.addEventListener("click", () => {
        contadorCruzRoja++;
        contadorGlobal.push(1);
        let TotalCuentas = precioCruzRoja * contadorCruzRoja;
        console.log("Veces clicado en cruz roja:  "+contadorCruzRoja);
        console.log(TotalCuentas+" €");
                
    });
   
        
}
  
        

function contadorUnicef(){

    let precioUnicef = 10;
    let contadorUnicef = 0;

    const imgUnicef =  document.getElementById("Unicef");

    imgUnicef.addEventListener("click", () => {
        contadorUnicef++;
        contadorGlobal.push(1);
        
        let TotalUnicef = precioUnicef * contadorUnicef ;
        console.log("Veces clicado en Unicef:  "+contadorUnicef);
        console.log(TotalUnicef+" €");

    });

}


function contadorWwf(){
    let precioWwf = 7;
    let contadorWwf = 0;
   
    
    const imgWwf = document.getElementById("Wwf");

        imgWwf.addEventListener("click", () => {
        contadorWwf++;
        contadorGlobal.push(1);
        let TotalCuentas = precioWwf * contadorWwf;
        console.log("Veces clicado en Wwf:  "+contadorWwf);
        console.log(TotalCuentas+" €");
                
    });
   
        
}

function contadorMsf(){
    let precioMsf = 12;
    let contadorMsf = 0;
   
    
    const imgMsf = document.getElementById("MSF");

        imgMsf.addEventListener("click", () => {
        contadorMsf++;
        contadorGlobal.push(1);
        let TotalCuentas = precioMsf * contadorMsf;
        console.log("Veces clicado en Msf:  "+contadorMsf);
        console.log(TotalCuentas+" €");
                
    });
   
        
}

contadorCruzRoja();
contadorUnicef();
contadorWwf();
contadorMsf();