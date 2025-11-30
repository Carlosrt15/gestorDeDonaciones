let organizaciones = [];

let totalAportaciones = 0;
let totalDinero = 0;
let historialDonacion = [];


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

        // Esto sirve para bajar el scroll al ultimo elemento
        bloque.scrollTop = bloque.scrollHeight;

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

            organizaciones = datos.map(dato => ({
                id: Number(dato.id),
                nombre: dato.nombre,
                img: dato.img,
                acogida: dato.acogida,
                rangoEdad: dato.rangoEdad,
                multiraza: dato.multiraza,
                ambito: dato.ambito,

                interacciones: 0,
                total: 0
            }));
        })
        .catch(error => console.info("Error al cargar organizaciones:", error));
}



function generarOrganizaciones() {
    let contenedor = document.getElementById("contenedorOrganizaciones");
    contenedor.innerHTML = "";

    organizaciones.forEach(org => {
        let div = document.createElement("div");
        div.classList.add("org");

        let imagen = document.createElement("img");
        imagen.src = org.img;
        imagen.alt = org.nombre;
        imagen.id = org.id;

        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Cantidad €";

        imagen.addEventListener("click", () => contarPulsar(org.id));

        div.appendChild(imagen);
        div.appendChild(input);
        contenedor.appendChild(div);
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



function inicializarFormulario() {

    let socioRadios = document.getElementsByName("socio");
    let campoCodigo = document.getElementById("campoCodigo");
    let formulario = document.getElementById("formDonacion");
    let btnLimpiar = document.getElementById("btnLimpiar");

    
    socioRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.value === "si") {
                campoCodigo.style.display = "block";
            } else {
                campoCodigo.style.display = "none";
            }
        });
    });

    
    btnLimpiar.addEventListener("click", () => {
        formulario.reset();
        campoCodigo.style.display = "none";  
    });
}

// Si no no funciona y carga los datos despues
cargarDatos().then(() => {
    generarOrganizaciones();
});

inicializarFormulario();
