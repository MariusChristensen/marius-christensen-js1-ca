const beerDetailsContainer = document.querySelector(".beer-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://api.punkapi.com/v2/beers/" + id;
const title = document.querySelector("title");

async function fetchBeerDetails() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    beerDetails = json[0];

    createHTML(beerDetails);
    createTitle(beerDetails);
  } catch (error) {
    console.log("This happened while trying to reach the API: " + error);
    beerDetailsContainer.innerHTML = "This happened while trying to reach the API " + error;
  }
}

fetchBeerDetails();

function createHTML(beerDetails) {
  beerDetailsContainer.innerHTML = `<h1>${beerDetails.name}</h1>
                                    <h2>${beerDetails.tagline}</h2>
                                    <div class="beer-image">
                                    <img src="${beerDetails.image_url}"></img>
                                    </div>
                                    <p>${beerDetails.description}</p>
                                    <p>Food pairings:</p>
                                    <ul>
                                    <li>${beerDetails.food_pairing[0]}</li>
                                    <li>${beerDetails.food_pairing[1]}</li>
                                    <li>${beerDetails.food_pairing[2]}</li>
                                    </ul>`;
}

function createTitle(beerDetails) {
  title.textContent = beerDetails.name;
}
