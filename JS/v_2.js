let organizaciones = [
    { id: 0, nombre: "Cruz Roja", precio: 0, interacciones: 0, total: 0 },
    { id: 1, nombre: "UNICEF", precio: 0, interacciones: 0, total: 0 },
    { id: 2, nombre: "WWF", precio: 0, interacciones: 0, total: 0 },
    { id: 3, nombre: "msf", precio: 0, interacciones: 0, total: 0 },
    { id: 4, nombre: "STC", precio: 0, interacciones: 0, total: 0 },
    { id: 5, nombre: "Greenpeace", precio: 0, interacciones: 0, total: 0 },
    { id: 6, nombre: "Cáritas", precio: 0, interacciones: 0, total: 0 },
    { id: 7, nombre: "Amnistía", precio: 0, interacciones: 0, total: 0 },
    { id: 8, nombre: "FVF", precio: 0, interacciones: 0, total: 0 },
    { id: 9, nombre: "Aldeas", precio: 0, interacciones: 0, total: 0 },
];

let totalAportaciones = 0;
let totalDinero = 0;

organizaciones.forEach(orgs => {
    let img = document.getElementById(String(orgs.id + 1));
    if (img) {
        img.addEventListener("click", () => contarPulsar(orgs.id));
    }
});

function contarPulsar(id) {
    let orgs = organizaciones.find(o => o.id === id);
    if (!orgs) return;

    orgs.interacciones++;
    orgs.total = orgs.precio * orgs.interacciones;

    totalAportaciones++;
    totalDinero += orgs.precio;

    let html = organizaciones
        .filter(o => o.interacciones > 0)
        .map(o => `${o.nombre}: ${o.interacciones} aportaciones, total ${o.total}€`)
        .join("<br>");

    html += `<br>Total Donaciones: ${totalDinero}€`;


    document.getElementById("listaDonaciones").innerHTML = html;
}

function inicializarHtml() {
    let button = document.getElementById("finalizar");

    button.addEventListener("click", () => {
        let lista = organizaciones.filter(orgs => orgs.interacciones > 0);

        lista.sort((a, b) => a.nombre.localeCompare(b.nombre));

        let html = "";
        for (let i = lista.length - 1; i >= 0; i--) {
            let orgs = lista[i];
            html += orgs.nombre + " ---- " + orgs.interacciones + " aportaciones<br>";
        }

        html += "<br>Donación final: " + totalDinero + " €<br>";
        if (totalAportaciones > 0) {
            let media = (totalDinero / totalAportaciones).toFixed(1);
            html += "Donación media: " + media + " €/aportación";
        }


        html += "<br><br><h3>Historial de Donaciones Guardadas:</h3>";

        fetch("http://localhost:3000/tramiteDonacion")
            .then(respuesta => respuesta.json())
            .then(datos => {
                datos.forEach(tramite => {
                    let nombreOrg;
                    let org = organizaciones.find(o => o.id === tramite.donaciones[0]?.idOrganizacion); // Asumiendo que hay al menos una donación
                    if (org) {
                        nombreOrg = org.nombre;
                    } else {
                        nombreOrg = "Desconocida";
                    }
                    html += `<div>
                        <p>Fecha: ${tramite.fecha}</p>
                        ${tramite.donaciones.map(d => {
                        let org = organizaciones.find(o => o.id === d.idOrganizacion);
                        let nombreOrg;
                        if (org) {
                            nombreOrg = org.nombre;
                        } else {
                            nombreOrg = "Desconocida";
                        }
                        return `${nombreOrg}: ${d.importeTotal}€ (${d.numDonaciones} donaciones)`;
                    }).join("<br>")}
                        <hr>
                    </div>`;
                });
                document.getElementById("resultado").innerHTML = html;
            })
            .catch(error => {
                console.error("Error cargando historial:", error);
                document.getElementById("resultado").innerHTML = html + "<br>Error al cargar historial.";
            });

        guardarDonacion();


    });
}

// ------------------------------- 2 parte de la practica --------------------------

function cargarDatos() {
    fetch("http://localhost:3000/organizaciones")
        .then(respuesta => respuesta.json())
        .then(datos => {
            datos.forEach(dato => {
                let org = organizaciones.find(o => o.id === dato.id);
                if (org) {
                    org.nombre = dato.nombre;
                    org.precio = dato.precio;
                }
            });
            console.info("ORGS actualizadas: " + organizaciones.map(o => o.nombre + "/" + o.id).join("!--"));
        })
        .catch(error => console.error("Error con los datos" + error));
}

function historial() {

    fetch("http://localhost:3000/tramiteDonacion")
        .then(respuesta => respuesta.json())
        .then(datos => {
            let bloque = document.getElementById("listaDonaciones");
            bloque.innerHTML = "";
            datos.forEach(tramite => {
                let nombreOrg;
                let org = organizaciones.find(o => o.id === tramite.donaciones[0]?.idOrganizacion); // Asumiendo que hay al menos una donación
                if (org) {
                    nombreOrg = org.nombre;
                } else {
                    nombreOrg = "Desconocida";
                }
                bloque.innerHTML += `<div> 
                    <p>Fecha: ${tramite.fecha}</p>
                    ${tramite.donaciones.map(d => {
                    let org = organizaciones.find(o => o.id === d.idOrganizacion);
                    let nombreOrg;
                    if (org) {
                        nombreOrg = org.nombre;
                    } else {
                        nombreOrg = "Desconocida";
                    }
                    return `${nombreOrg}: ${d.importeTotal}€ (${d.numDonaciones} donaciones)`;
                }).join("<br>")}
                    <hr>
                </div>`;
            });
        });
}

function guardarDonacion() {
    let fechaActual = new Date().toLocaleString();

    let realizadasDonaciones = organizaciones.filter(o => o.interacciones > 0);

    let nuevoAporte = {
        fecha: fechaActual,
        donaciones: realizadasDonaciones.map(o => ({
            idOrganizacion: o.id,
            importeTotal: Math.floor(o.total * 100) / 100,
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

            // historial();  // Comentado
        })
        .catch(error => console.error("Error al guardar:", error));
}

// ------------------------------- 2 parte de la practica --------------------------

inicializarHtml();
cargarDatos();