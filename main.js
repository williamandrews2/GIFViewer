const img = document.querySelector("img");
const form = document.querySelector("form");
const searchbar = document.getElementById("searchbar");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getImg(searchbar.value);
});

function getImg(query) {
  // use the fetch API to make a GET request to the Giphy API
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=5wJBfcqH9p0lxHUOw9opHrWoAHSzb9KR&s=${query}`,
    { mode: "cors" }
  )
    .then(function (response) {
      if (!response.ok) {
        alert(`No GIF found for "${query}"!`);
      }
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((error) => console.log("ERROR"));
}

window.onload = getImg("cat");
