let organizaciones = [
    {id: 0, nombre: "Cruz Roja", precio: 5, interacciones: 0, total: 0},
    {id: 1, nombre: "UNICEF", precio: 10, interacciones: 0,total: 0},
    {id: 2, nombre: "WWF", precio: 7, interacciones: 0,total: 0},
    {id: 3, nombre: "msf", precio: 12, interacciones: 0,total: 0},
    {id: 4, nombre: "STC", precio: 8, interacciones: 0,total: 0},
    {id: 5, nombre: "Greenpeace", precio: 6, interacciones: 0,total: 0},
    {id: 6, nombre: "Cáritas", precio: 9, interacciones: 0,total: 0},
    {id: 7, nombre: "Amnistía" , precio: 11, interacciones: 0,total: 0},
    {id: 8, nombre: "FVF" , precio: 4, interacciones: 0,total: 0},
    {id: 9, nombre: "Aldeas" , precio: 13, interacciones: 0,total: 0},
];

let totalAportaciones = 0;
let totalDinero = 0;



organizaciones.forEach(orgs => {
        let img = document.getElementById(orgs.id);

        if(img) {
            img.addEventListener("click", () => contarPulsar(orgs.id));
        }
    });


function contarPulsar(id) {
    let orgs = organizaciones.find(o => o.id === id);

    

    if(orgs) {

        orgs.interacciones++;
        orgs.total = orgs.precio * orgs.interacciones;

        totalAportaciones = totalAportaciones + 1;
        totalDinero = totalDinero + orgs.precio;

        console.log(orgs.nombre+" clicado "+orgs.interacciones+ " veces");

        document.getElementById("resultado").innerHTML = " ";

        
    }
       

}



function inicializarHtml(){

    let button = document.getElementById("finalizar");
    
        
    button.addEventListener("click", () =>  {

        let lista = organizaciones.filter(orgs  => orgs.interacciones > 0);

        
        


    });


}


inicializarHtml();

