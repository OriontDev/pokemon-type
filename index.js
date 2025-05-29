

async function fetchPokemon(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch API!");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        const pokemonType = data.types[0].type.name;

        const pokemonImage = document.getElementById("pokemonSprite");
        const pokemonContainer = document.getElementById("pokemonInfo");
        const pokemonTypeDesc = document.getElementById("pokemonTypeDesc");


        pokemonImage.src = pokemonSprite
        pokemonTypeDesc.textContent = `Type: ${pokemonType}`;
        pokemonContainer.style.display = "block";

        console.log(data);
    }
    catch(error){
        const pokemonTypeDesc = document.getElementById("pokemonTypeDesc");
        pokemonTypeDesc.textContent = "Could not find Pokémon by that name!";
        
        const pokemonImage = document.getElementById("pokemonSprite");
        pokemonImage.src = "";

        const pokemonContainer = document.getElementById("pokemonInfo");
        pokemonContainer.style.display = "block";
        
        console.error(error);
    }
    //repeat defining because try and catch is a different scope
}