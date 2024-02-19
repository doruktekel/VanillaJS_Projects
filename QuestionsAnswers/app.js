import { datas } from "./data.js";

const datasContainerEl = document.querySelector(".datas-container");

console.log(datas);

datas.map((data) => {
  datasContainerEl.innerHTML += `<div class="data-container">
  <div class="header">
    <h2>${data.question}</h2>
    <div class="icons">
      <i class="fa-solid fa-circle-plus"></i>
    </div>
  </div>
  <div class="body show">${data.answer}</div>
</div>`;
});

const iconEls = document.querySelectorAll(".fa-solid");
iconEls.forEach((iconEl) => {
  iconEl.addEventListener("click", () => {
    iconEl.classList.toggle("fa-circle-plus");
    iconEl.classList.toggle("fa-circle-minus");
    const parentContainer = iconEl.closest(".data-container");
    const answerEl = parentContainer.querySelector(".body");
    answerEl.classList.toggle("show");
  });
});
