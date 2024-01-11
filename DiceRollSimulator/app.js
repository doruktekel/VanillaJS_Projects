const diceEl = document.getElementById("dice");
const rolldiceEl = document.getElementById("rolldice");
const refreshEl = document.getElementById("refresh");
const infoEl = document.querySelector(".info");

let rollCount = 1;

const diceFace = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  switch (randomNumber) {
    case 1:
      diceEl.innerHTML = "&#9856;";
      break;
    case 2:
      diceEl.innerHTML = "&#9857;";
      break;
    case 3:
      diceEl.innerHTML = "&#9858;";
      break;
    case 4:
      diceEl.innerHTML = "&#9859;";
      break;
    case 5:
      diceEl.innerHTML = "&#9860;";
      break;
    case 6:
      diceEl.innerHTML = "&#9861;";
      break;
    default:
      break;
  }

  const newListEl = document.createElement("li");
  infoEl.appendChild(newListEl);

  newListEl.innerHTML = `Roll - ${rollCount++} <span>${
    diceEl.innerHTML
  }</span>`;
};

rolldiceEl.addEventListener("click", () => {
  diceEl.classList.add("animation");
  setTimeout(() => {
    diceEl.classList.remove("animation");
  }, 1000);
  diceFace();
});

refreshEl.addEventListener("click", () => {
  rollCount = 1;
  infoEl.innerHTML = "";
});
