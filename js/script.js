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

      const beerName = beers[i].name;
      const tagline = beers[i].tagline;
      const firstbrewed = beers[i].first_brewed;

      beerContainer.innerHTML += `<div class="card">
                                  <h4>${beerName}</h4>
                                  <p>${tagline}</p>
                                  <p>First brewed: ${firstbrewed}</p>
                                  </div>`;
    }
  } catch (error) {
    console.log("This error has occurred: " + error);
    beerContainer.innerHTML = "This happened while trying to reach the API " + error;
  }
}

fetchBeers();
