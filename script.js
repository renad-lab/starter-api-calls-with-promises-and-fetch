const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Grab initial html elements
const form = document.querySelector("form");
const pokeBox = document.querySelector(".pokemon");
const pokeIdTag = document.querySelector("#pokemon-id");

// Add eventlistener to the form to retrieve user inputted id
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Retrieve the user id
  const pokeId = pokeIdTag.value;

  // Call our fetch function with the given id
  getPokemonById(pokeId);
});

// Fetch function to retrieve pokemon data
const getPokemonById = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // Call our function that will take the data used for adding a pokemon
      addPokemon(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Function that will add our pokemon to the DOM
const addPokemon = (pokeData) => {
  let name = pokeData.name;
  let image = pokeData.sprites.front_default;

  // Create our header with the pokemon's name
  const nameHeader = document.createElement("h2");
  nameHeader.textContent = name;

  // Create img tag with the pokemon's image url
  const img = document.createElement("img");
  img.setAttribute("src", image);
  img.setAttribute("alt", name);
  img.style = "height: auto; width: auto;";

  // Create div to store the pokemon's name and image
  const pokeDiv = document.createElement("div");

  // Append header and image to the created div
  pokeDiv.append(nameHeader, img);
  // Append div to the pokeBox
  pokeBox.append(pokeDiv);
};
