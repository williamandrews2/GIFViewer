const img = document.querySelector("img");
const form = document.querySelector("form");
const searchbar = document.getElementById("searchbar");
const random = document.getElementById("random-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getImg(searchbar.value);
});

random.addEventListener("click", getRandom);

async function getImg(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=5wJBfcqH9p0lxHUOw9opHrWoAHSzb9KR&s=${query}`,
      { mode: "cors" }
    );
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch {
    alert(`No GIF found for "${query}"`);
    console.log("ERROR retrieving GIF.");
  }
}

async function getRandom() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=5wJBfcqH9p0lxHUOw9opHrWoAHSzb9KR&s"
    );
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch {
    console.log("ERROR WITH RANDOM IMAGE");
  }
}

window.onload = getRandom;
