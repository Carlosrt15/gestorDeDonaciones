
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

contadorCruzRoja();
contadorUnicef();
