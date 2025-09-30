window.addEventListener('load', () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
    .then(result => result.json()) // convierte las respuesta a un json
    .then(data => cargarDatos(data.results)); // llama la cargarDato como array
})

function cargarDatos(data) {
    console.log(data);
    data.forEach(pokemon => {
        const li = document.createElement('li'); // crea un nuevo li
        li.innerHTML = pokemon.name; // mete dentro de <li></li> los nombres
        li.addEventListener('click', () => mosrtar(pokemon.url));
        // añade el primer ul y añade como hijo el li actual
        document.querySelector('ul').appendChild(li);
    })
}

function mosrtar(url) {
    fetch(url).then(result => result.json())
    .then(data => {
        const nombre = data.name;
        const altura = data.height;
        const peso = data.weight;

        const valores = `Nombre: ${nombre}, Altura: ${altura}, Peso: ${peso}`;
        document.querySelector('dialog').innerHTML(valores);
    })
}