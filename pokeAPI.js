const pokeList = document.getElementById('pokemon-ul');

fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json();
    })
    .then(data => {
        data.results.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = pokemon.name; // Nombre del Pokémon
            pokeList.appendChild(li); // Usa pokeList aquí
        });
    })
    .catch(error => console.error('Error al cargar los datos: ', error));

