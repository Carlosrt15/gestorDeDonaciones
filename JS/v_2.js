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

// esto no debe estar asi por que es codigo fuera de una funcion
organizaciones.forEach(orgs => {
    let img = document.getElementById(String(orgs.id));
    if (img) {
        img.addEventListener("click", () => contarPulsar(orgs.id));
    }
});

function contarPulsar(id) {
    let orgs = organizaciones.find(o => o.id === id);
    if (!orgs) return;

    let contenedor = document.getElementById(id).parentElement;
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
    actualizarFeed(id, cantidad);
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
        let fechaCompraAhora = new Date().toLocaleString();
        html += "fecha de Compra: " + fechaCompraAhora;

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
        ventanaFinal();

        setTimeout(() => {
            console.log("Borrando wel aside y resultado");

            document.getElementById("resultado").innerHTML = "";

            document.getElementById("listaDonaciones").innerHTML = "";

            totalAportaciones = 0;
            totalDinero = 0;
            historialDonacion = [];


            organizaciones.forEach(o => {
                o.interacciones = 0;
                o.total = 0;
            });
            console.log("Aqui deberi borrado");
        }, 10000);



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
    return fetch("http://localhost:3000/organizaciones")
        .then(respuesta => respuesta.json())
        .then(datos => {
            datos.forEach(dato => {

                dato.id = Number(dato.id); // si no da errro de string

                let org = organizaciones.find(o => o.id === dato.id);
                if (org) org.nombre = dato.nombre;

                if (dato.acogida !== undefined) org.acogida = dato.acogida;
                if (dato.rangoEdad) org.rangoEdad = dato.rangoEdad;
                if (dato.multiraza !== undefined) org.multiraza = dato.multiraza;
                if (dato.ambito) org.ambito = dato.ambito;

            });
        })
        .catch(error => console.error("Error al cargar organizaciones:", error));
}


function generarOrganizaciones() {
    fetch("http://localhost:3000/organizaciones")
        .then(respuesta => respuesta.json())
        .then(datos => {
            let contenedor = document.getElementById("contenedorOrganizaciones");
            contenedor.innerHTML = "";


        });

}


function ventanaFinal() {
    let donacion = organizaciones.filter(o => o.interacciones > 0);
    if (donacion.length === 0) return;


    let ventana = window.open("", "infoOrganizaciones", "width=1080,height=1090");
    ventana.document.write("<h2>Organizaciones donadas</h2>");
    ventana.document.write("<ul>");


    for (let i = 0; i < donacion.length; i++) {
        let o = donacion[i];
        let texto = "";


        if (o.rangoEdad) {
            texto += "<p>" + o.nombre + "</p> trabaja con personas de " + o.rangoEdad;
            if (o.acogida === true) {
                texto += " y permite acogidas.";
            } else {
                texto += " y no permite acogidas.";
            }
        }


        else if (o.ambito) {
            texto += "<strong>" + o.nombre + "</strong> trabaja con animales ";
            if (o.multiraza === true) {
                texto += "de distintas razas ";
            } else {
                texto += "de una sola raza ";
            }
            texto += "a nivel " + o.ambito + ".";
        }


        else {
            texto += "<p>" + o.nombre + "</p>: Error no pilla el json.";
        }

        ventana.document.write("<li>" + texto + "</li>");
    }

    ventana.document.write("</ul>");



    setTimeout(function () {
        ventana.close();
    }, 10000);



}

inicializarHtml();
cargarDatos();