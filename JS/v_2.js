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

    document.getElementById("btnRealizar").addEventListener("click", validarFormulario);

}

// Si no no funciona y carga los datos despues
cargarDatos().then(() => {
    generarOrganizaciones();
});

inicializarFormulario();



function validarFormulario(event) {
    event.preventDefault();

    let errores = [];

    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let direccion = document.getElementById("direccion");
    let email = document.getElementById("email");
    let pago = document.querySelector("input[name='pago']:checked");
    let socio = document.querySelector("input[name='socio']:checked");
    let codigo = document.getElementById("codigoSocio");

    document.querySelectorAll("label").forEach(l => l.style.color = "black");
    
    if (nombre.value.length < 4 || nombre.value.length > 15) {
        errores.push("- El nombre debe tener entre 4 y 15 caracteres.");
        document.querySelector("label[for='nombre']").style.color = "red";
    }

    if (apellidos.value === "") {
        errores.push("- Debe introducir los apellidos.");
        document.querySelector("label[for='apellidos']").style.color = "red";
    }

    if (direccion.value === "") {
        errores.push("- Debe introducir la dirección.");
        document.querySelector("label[for='direccion']").style.color = "red";
    }

    let patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patronEmail.test(email.value)) {
        errores.push("- El correo electrónico no es valido.");
        document.querySelector("label[for='email']").style.color = "red";
    }

    if (!pago) {
        errores.push(" Debe seleccionar un mtodo de pago.");
        document.querySelector("#formDonacion p:nth-of-type(1)").style.color = "red";
    }

    if (!socio) {
        errores.push(" Debe indicar si es socio.");
        document.querySelector("#formDonacion p:nth-of-type(2)").style.color = "red";
    }

    if (socio && socio.value === "si") {
        let patronCodigo = /^[A-Za-z]{3}[0-9]{4}[\/_.#&]$/;
        if (!patronCodigo.test(codigo.value)) {
            errores.push(" El código de socio no es valido (3 letras + 4 números + símbolo).");
            document.querySelector("label[for='codigoSocio']").style.color = "red";
        }
    }

    if (errores.length > 0) {
        alert("Errores encontrados:\n" + errores.join("\n"));
        return;
    }

    abrirVentanaFinal();
}


function abrirVentanaFinal() {

    let fechaActual = new Date().toLocaleString();
    let lista = organizaciones.filter(o => o.interacciones > 0);

    let resumen = {
        fecha: fechaActual,
        lista: lista,
        total: totalDinero,
        media: totalAportaciones > 0 ? (totalDinero / totalAportaciones).toFixed(2) : 0
    };

    sessionStorage.setItem("resumenDonacion", JSON.stringify(resumen));

    window.open(
        "ventana.html",
        "ventanaFinal",
        "width=500,height=300,toolbar=no,location=no,scrollbars=yes"
    );
}

function terminarPedido(fechaActual) {

    let realizadasDonaciones = organizaciones.filter(o => o.interacciones > 0);

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
    });

    organizaciones.forEach(o => {
        o.interacciones = 0;
        o.total = 0;
    });

    historialDonacion = [];
    totalAportaciones = 0;
    totalDinero = 0;

    document.getElementById("listaDonaciones").innerHTML = "";
    document.getElementById("formDonacion").reset();
    document.getElementById("campoCodigo").style.display = "none";
}

