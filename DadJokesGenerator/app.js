const jokeEl = document.querySelector(".joke");
const btnEl = document.getElementById("btn");

const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: { "X-Api-Key": "3KvJH+jZcBwTTZnE/Z5eGw==85wcgH1oJfKAwzDy" },
};

btnEl.addEventListener("click", () => {
  getjokes();
});

const getjokes = async () => {
  try {
    btnEl.disabled = true;
    btnEl.innerHTML = "Loading...";
    jokeEl.innerHTML = "Jokes Generatig...";
    const response = await fetch(url, options);
    const data = await response.json();
    jokeEl.innerHTML = data[0].joke;
    btnEl.innerHTML = "Generate Joke";
    btnEl.disabled = false;
  } catch (error) {
    alert("Internet connection preoblem, please try later :) ");
  }
};
