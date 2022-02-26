const url = "https://api.punkapi.com/v2/beers";

const beerContainer = document.querySelector(".beers");

async function fetchBeers() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const beers = json;

    beerContainer.innerHTML = "";

    for (let i = 0; i < beers.length; i++) {
      if (i === 8) {
        break;
      }
      createHTML(beers, i);
    }
  } catch (error) {
    console.log("This happened while trying to reach the API: " + error);
    beerContainer.innerHTML = "This happened while trying to reach the API " + error;
  }
}

fetchBeers();

function createHTML(beers, i) {
  beerContainer.innerHTML += `<a href="/pages/details.html?id=${beers[i].id}">
                                  <div class="card">
                                  <h2>${beers[i].name}</h2>
                                  <p>${beers[i].tagline}</p>
                                  <p>First brewed: ${beers[i].first_brewed}</p>
                                  </div>
                                  </a>`;
}
