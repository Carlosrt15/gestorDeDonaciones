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
        let img = document.getElementById(String(orgs.id));

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

        
        document.getElementById("resultado").innerHTML = " ";

        
    }
       
}


function inicializarHtml(){

    let button = document.getElementById("finalizar");
    
        
    button.addEventListener("click", () =>  {

        let lista = organizaciones.filter(orgs  => orgs.interacciones > 0);

            lista.sort(function(a, b) {
            if (a.nombre < b.nombre) return -1;
            if (a.nombre > b.nombre) return 1;
            return 0;
        });
        
        let html = "";

        for (let i = lista.length -1; i >= 0; i--) {
            let orgs = lista [i];
            html += orgs.nombre + " ---- " + orgs.interacciones + " aportaciones<br>";
        }

        html += "<br>Donación final: " + totalDinero + " €<br>";
        if (totalAportaciones > 0) {
            let media = (totalDinero / totalAportaciones).toFixed(1);
            html += "Donación media: " + media + " €/aportación";
        }

        document.getElementById("resultado").innerHTML = html;

        totalAportaciones = 0;
        totalDinero = 0;

        organizaciones.forEach(o => {
                o.interacciones = 0;
                o.total = 0;
        });


        

    });

        

}

inicializarHtml();
