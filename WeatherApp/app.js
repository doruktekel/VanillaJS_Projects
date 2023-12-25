const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const key = "217fee82793e397057c1b4a4a7fe8b3a";

const input = document.getElementById("text");
const submit = document.getElementById("btn");
const form = document.querySelector(".form");
const container = document.querySelector(".container");

const image = document.querySelector(".img");
const iconUrl = "http://openweathermap.org/img/w/";

const temperature = document.querySelector(".temperature");
const desc = document.querySelector(".description");
const dets = document.querySelector(".details");

container.style.display = "none";

const fetchData = async (country) => {
  try {
    container.style.display = "flex";
    image.src = "loading.svg";
    temperature.style.display = "none";
    desc.style.display = "none";
    dets.style.display = "none";

    const data = await fetch(`${url}${country}&appid=${key}&units=metric`);
    const dataJson = await data.json();
    console.log(dataJson);
    temperature.innerHTML = dataJson.main.temp;
    desc.innerHTML = dataJson.weather[0].description;
    let iconCode = dataJson.weather[0].icon;
    let imgUrl = `${iconUrl}${iconCode}.png`;
    image.src = imgUrl;

    let details = [
      `Feels Like :  ${dataJson.main.feels_like}`,
      `Humidity :  ${dataJson.main.humidity}`,
      `Wind Speed :  ${dataJson.wind.speed}`,
    ];
    dets.innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");

    image.style.display = "flex";
    temperature.style.display = "flex";
    dets.style.display = "flex";
    desc.style.display = "flex";
  } catch (error) {
    console.log("Error", error);
    alert("Internet Connection Problem");
  }
};

const clearInput = () => {
  setTimeout(() => {
    input.value = "";
  }, 3000);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = input.value;
  fetchData(data);
  clearInput();
});
