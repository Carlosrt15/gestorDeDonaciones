let organizaciones = [
    { id: 1, nombre: "Cruz Roja", interacciones: 0, total: 0 },
    { id: 2, nombre: "UNICEF", interacciones: 0, total: 0 },
    { id: 3, nombre: "WWF", interacciones: 0, total: 0 },
    { id: 4, nombre: "MSF", interacciones: 0, total: 0 },
    { id: 5, nombre: "STC", interacciones: 0, total: 0 },
    { id: 6, nombre: "Greenpeace", interacciones: 0, total: 0 },
    { id: 7, nombre: "Cáritas", interacciones: 0, total: 0 },
    { id: 8, nombre: "Amnistía", interacciones: 0, total: 0 },
    { id: 9, nombre: "FVF", interacciones: 0, total: 0 },
    { id: 10, nombre: "Aldeas", interacciones: 0, total: 0 },
];

let totalAportaciones = 0;
let totalDinero = 0;
let historialDonacion = [];


organizaciones.forEach(orgs => {
    let img = document.getElementById(String(orgs.id )); 
    if (img) {
        img.addEventListener("click", () => contarPulsar(orgs.id ));
    }
});

function contarPulsar(id) {
    let orgs = organizaciones.find(o => o.id === id);
    if (!orgs) return;

    let contenedor = document.getElementById(id ).parentElement;
    let input = contenedor.querySelector("input");
    let cantidad = parseFloat(input.value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Introduce un valor válido en € para la donación.");
        return;
    }

    orgs.interacciones++;
    orgs.total += cantidad;

    totalAportaciones++;
    totalDinero += cantidad;

    input.value = ""; 
    actualizarFeed(id,cantidad);
}



function actualizarFeed(idOrg, cantidad) {
    historialDonacion.push({ idOrg, cantidad });

    let bloque = document.getElementById("listaDonaciones");
    bloque.innerHTML = ""; 

    historialDonacion.forEach((donacion, index) => {
        let org = organizaciones.find(o => o.id === donacion.idOrg);
        if (!org) return;

        let div = document.createElement("div");
        div.textContent = `${org.nombre}: ${donacion.cantidad.toFixed(2)}€`;

       
        div.classList.remove("donacion-ultima", "donacion-previa");

       
        if (index === historialDonacion.length - 1) {
            div.classList.add("donacion-ultima");
        } 
        
        else if (donacion.idOrg === historialDonacion[historialDonacion.length - 1].idOrg) {
            div.classList.add("donacion-previa");
        }

        bloque.appendChild(div);
    });
}


function inicializarHtml() {
    let button = document.getElementById("finalizar");
    button.addEventListener("click", () => {
        let lista = organizaciones.filter(o => o.interacciones > 0);
        lista.sort((a, b) => a.nombre.localeCompare(b.nombre));

        let html = "";
        for (let i = lista.length - 1; i >= 0; i--) {
            let orgs = lista[i];
            html += orgs.nombre + " ---- " + orgs.interacciones + " aportaciones<br>";
        }

        html += "<br>Donación final: " + totalDinero.toFixed(2) + " €<br>";
        if (totalAportaciones > 0) {
            let media = (totalDinero / totalAportaciones).toFixed(2);
            html += "Donación media: " + media + " €/aportación";
        }

        document.getElementById("resultado").innerHTML = html;
        guardarDonacion();
    });
}


function guardarDonacion() {
    let fechaActual = new Date().toLocaleString();
    let realizadasDonaciones = organizaciones.filter(o => o.interacciones > 0);

    if (realizadasDonaciones.length === 0) return; 

    let nuevoAporte = {
        fecha: fechaActual,
        donaciones: realizadasDonaciones.map(o => ({
            
            idOrganizacion: o.id,
            nombre: o.nombre,
            importeTotal: o.total,
            numDonaciones: o.interacciones
        }))
    };

    fetch("http://localhost:3000/tramiteDonacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoAporte)
    })
    .then(respuesta => respuesta.json())
    .then(() => {
        console.log(`Donación guardada el ${fechaActual}`);
        historial();
    })
    .catch(error => console.error("Error al guardar:", error));
}


function historial() {
    fetch("http://localhost:3000/tramiteDonacion")
        .then(respuesta => respuesta.json())
        .then(datos => {
            let bloque = document.getElementById("listaDonaciones");
            let html = "";
            datos.forEach(tramite => {
                html += `<div><p>Fecha: ${tramite.fecha}</p>`;
                html += tramite.donaciones.map(d => {
                    let org = organizaciones.find(o => o.id === d.idOrganizacion);
                    let nombreOrg = org ? org.nombre : "Desconocida";
                    return `${nombreOrg}: ${d.importeTotal.toFixed(2)}€ (${d.numDonaciones} donaciones)`;
                }).join("<br>");
                html += "<hr></div>";
            });
            bloque.innerHTML = html;
        });
}




function cargarDatos() {
    fetch("http://localhost:3000/organizaciones")
        .then(respuesta => respuesta.json())
        .then(datos => {
            datos.forEach(dato => {
                let org = organizaciones.find(o => o.id === dato.id);
                if (org) org.nombre = dato.nombre;
            });
        })
        .catch(error => console.error("Error al cargar organizaciones:", error));
}

inicializarHtml();
cargarDatos();