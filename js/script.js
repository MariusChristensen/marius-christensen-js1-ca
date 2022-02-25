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
      const firstBrewed = beers[i].first_brewed;
      const beerID = beers[i].id;

      beerContainer.innerHTML += `<a href="/pages/details.html?id=${beerID}">
                                  <div class="card">
                                  <h2>${beerName}</h2>
                                  <p>${tagline}</p>
                                  <p>First brewed: ${firstBrewed}</p>
                                  </div>
                                  </a>`;
    }
  } catch (error) {
    console.log("This happened while trying to reach the API: " + error);
    beerContainer.innerHTML = "This happened while trying to reach the API " + error;
  }
}

fetchBeers();
