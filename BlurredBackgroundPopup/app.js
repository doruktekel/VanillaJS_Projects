const bodyEl = document.body;
const btnEl = document.querySelector(".btn");
const iconXEl = document.querySelector(".icon");
const containerEl = document.querySelector(".container");
const containerpopEl = document.querySelector(".container-popup");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  containerpopEl.classList.remove("active");
  containerpopEl.style.top = "50%";
  q;
});

iconXEl.addEventListener("click", () => {
  containerEl.classList.remove("active");
  containerpopEl.classList.add("active");
  containerpopEl.style.top = "-100%";
});
