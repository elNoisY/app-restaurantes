function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {lat: -34.397, lng: 150.644},
    });

    const restaurantes = [
        { nombre: "Restaurante A", ubicacion: { lat: -12.0453, lng: -77.0310} },
        { nombre: "Restaurante B", ubicacion: { lat: -12.0478, lng: -77.0430} },
        { nombre: "Restaurante C", ubicacion: { lat: -12.0438, lng: -77.0500} },
    ];

    restaurantes.forEach((restaurante) => {
        new google.maps.Marker({
            position: restaurante.ubicacion,
            map: map,
            tittle: restaurante.nombre,
        });
    });
}

const ofertas = [
    { titulo: "2x1 en pizzas", descripcion: "¡Solo hoy hasta las 10 PM!" },
    { titulo: "50% de descuento en pastas", descripcion: "De 3 a 6 PM" },
    { titulo: "Menú ejecutivo a S/20", descripcion: "Incluye bebida y postre" },
];

function cargarOfertas() {
    const listaOfertas = document.getElementById("ofertas-lista");

    ofertas.forEach(oferta => {
        const ofertaDiv = document.createElement("div");
        ofertaDiv.innerHTML = `
            <h3>${oferta.titulo}</h3>
            <p>${oferta.descripcion}</p>
        `;
        listaOfertas.appendChild(ofertaDiv);
    });
}

const form = document.getElementById("form-pedido");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("¡Gracias por tu pedido! Nos pondremos en contacto contigo pronto.");
});
document.addEventListener("DOMContentLoaded", function() {
    cargarOfertas();
    initMap();
});
