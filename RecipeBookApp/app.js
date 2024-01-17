const uListEl = document.querySelector(".list");

const API_KEY = "bdd4f02ebc4b4167bfd59b2119c5b281";
const URL = "https://api.spoonacular.com/recipes/random?number=10";

const showRecipe = (recipes) => {
  //   uListEl.innerHTML = "";
  recipes.map((recipe) => {
    const listEl = document.createElement("li");
    uListEl.appendChild(listEl);

    const imgEl = document.createElement("img");
    listEl.appendChild(imgEl);
    imgEl.src = recipe.image;

    const infoEl = document.createElement("div");
    infoEl.classList.add("info");
    listEl.appendChild(infoEl);

    const headerEl = document.createElement("h1");
    headerEl.classList.add("altheader");
    infoEl.appendChild(headerEl);
    headerEl.innerHTML = recipe.title;

    const textEl = document.createElement("p");
    textEl.classList.add("info-text");
    infoEl.appendChild(textEl);
    textEl.innerHTML = recipe.summary.slice(0, 250) + "...";

    const linkEl = document.createElement("a");
    linkEl.classList.add("info-link");
    infoEl.appendChild(linkEl);
    linkEl.innerHTML = "view recipe";
  });
};

const fetchData = async () => {
  const resp = await fetch(`${URL}&apiKey=${API_KEY}`);
  const data = await resp.json();
  return data.recipes;
};

const getFood = async () => {
  const recipes = await fetchData();
  showRecipe(recipes);
  console.log(recipes);
};

getFood();
