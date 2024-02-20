const valueEl = document.getElementById("value");
const buttonEls = document.querySelectorAll(".btn");
const arrButtonList = Array.from(buttonEls);

let value = 0;

arrButtonList.map((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("btn-primary")) {
      value++;
    } else if (btn.classList.contains("btn-danger")) {
      value--;
    } else if (btn.classList.contains("btn-secondary")) {
      value = 0;
    } else return;

    valueEl.innerHTML = value;

    if (value < 0) {
      valueEl.style.color = "red";
    } else if (value === 0) {
      valueEl.style.color = "grey";
    } else valueEl.style.color = "blue";
  });
});
