window.addEventListener('load', () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(result => result.json()) // convierte las respuesta a un json
    .then(data => cargarDatos(data.results)); // llama la cargarDato como array
})

function cargarDatos(data) {
    data.forEach(pokemon => {
        const li = document.createElement('li'); // crea un nuevo li
        li.innerHTML = pokemon.name; // mete dentro de <li></li> los nombres
        li.addEventListener('mouseover', () => mostrar(pokemon.url));
        // añade el primer ul y añade como hijo el li actual
        document.querySelector('ul').appendChild(li);
    })
}

function mostrar(url) {
    fetch(url).then(result => result.json())
    .then(data => {
        const nombre = data.name;
        const altura = data.height/10;
        const peso = data.weight/10;
        const sprite = data.sprites.front_default;
        const valores = `Nombre: ${nombre}, Altura: ${altura}m, Peso: ${peso}kg`;

        const info = document.getElementById("info");
        info.innerHTML = valores;

        const img = document.getElementById("sprite"); // coge la etiqueta del img
        img.src = sprite;

        const popUp = document.getElementById("dialog"); // coge la etiqueta dialog creada en el html
        popUp.open = true;  // abre el popup
    })
}
