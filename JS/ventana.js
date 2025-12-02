let datos = JSON.parse(sessionStorage.getItem("resumenDonacion"));

let div = document.getElementById("contenido");

let html = "";
html += `<h2>Resumen de la donación</h2>`;
html += `<p>Fecha de compra: ${datos.fecha}</p>`;

datos.lista.forEach(o => {
    html += `<p>${o.nombre} ---- ${o.interacciones} aportaciones</p>`;
});

html += `<p><strong>Donación final: ${datos.total.toFixed(2)} €</strong></p>`;
html += `<p>Donación media: ${datos.media} €/aportación</p>`;

div.innerHTML = html;

document.getElementById("volver").onclick = () => window.close();

document.getElementById("terminar").onclick = () => {
    window.opener.terminarPedido(datos.fecha);
    window.close();
};
