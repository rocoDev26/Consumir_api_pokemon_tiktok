const nombrePokemon = document.getElementById("name__pokemon");
const imagenPokemon = document.getElementById("img__pokemon");

const llamarApi = async () => {

    try {

        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    
        console.log(respuesta);
    
        const datos = await respuesta.json();
    
        //console.log(datos.sprites.other.dream_world.front_default);
        const imagenBulbasaur = datos.sprites.other.dream_world.front_default;
        nombrePokemon.innerHTML += `${datos.name}`;

        //console.log(imagenPokemon.src);
        imagenPokemon.src = imagenBulbasaur; 
        
    } catch (error) {
        console.log(error);
    }
}

llamarApi();