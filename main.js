const img = document.querySelector("img");
const form = document.querySelector("form");
const searchbar = document.getElementById("searchbar");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getImg(searchbar.value);
});

function getImg(query) {
  console.log(query);
  // use the fetch API to make a GET request to the Giphy API
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=5wJBfcqH9p0lxHUOw9opHrWoAHSzb9KR&s=${query}`,
    { mode: "cors" } // allow cross-origin requests
  )
    // handle the raw response from the server
    .then(function (response) {
      // Take the raw Response object, extract and parse the body as JSON,
      // and pass that parsed JSON data to the next .then() block.
      return response.json();
    })
    // handle the JSON data we just parsed
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

window.onload = getImg("cat");
