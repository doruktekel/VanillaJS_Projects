import { testimonials } from "./data.js";

const containerEl = document.getElementById("container");

let idx = 0;
const generateTestimonials = () => {
  containerEl.innerHTML = "";
  const imgEl = document.createElement("img");
  const textEl = document.createElement("p");
  const nameEl = document.createElement("h2");
  containerEl.appendChild(imgEl);
  containerEl.appendChild(textEl);
  containerEl.appendChild(nameEl);
  imgEl.src = testimonials[idx].img;
  textEl.innerHTML = testimonials[idx].text;
  nameEl.innerHTML = testimonials[idx].name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(() => {
    generateTestimonials();
  }, 2000);
};

generateTestimonials();
