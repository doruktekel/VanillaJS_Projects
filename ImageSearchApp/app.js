const getElById = (item) => {
  return document.getElementById(item);
};
const inputEl = getElById("searchInput");
const searchBtnEl = getElById("searchBtn");
const showMoreBtnEl = getElById("showMoreBtn");

const formEl = document.querySelector(".form");
const datasEl = document.querySelector(".datas");

const key = "6Oe_42sYnUwCXKN0XfOUHrkLvv01w9NbYOfJH3K61k0";

let page = 1;

const getDatas = async () => {
  showMoreBtnEl.style.display = "block";

  if (page === 1) {
    datasEl.innerHTML = "";
  }

  const inputValue = inputEl.value;

  let URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${key}`;

  const response = await fetch(URL);
  const dataResponse = await response.json();

  const arr = dataResponse.results;
  console.log(arr);

  arr.map((item) => {
    const dataDiv = document.createElement("div");
    datasEl.appendChild(dataDiv);
    dataDiv.classList.add("data");
    const imgEl = document.createElement("img");
    dataDiv.appendChild(imgEl);
    imgEl.classList.add("img");
    imgEl.src = item.urls.thumb;
    imgEl.alt = item.tags.title;

    const aEl = document.createElement("a");
    dataDiv.appendChild(aEl);
    aEl.href = item.links.html;
    aEl.target = "_blank";
    aEl.rel = "noopener noreferrer";
    aEl.classList.add("link");
    aEl.innerHTML = item.alt_description;
  });

  page++;
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  getDatas();
});

showMoreBtnEl.addEventListener("click", () => {
  getDatas();
});
