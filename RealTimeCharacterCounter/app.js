const textEl = document.querySelector("#text");
const total = document.getElementById("totalchar");
const remaining = document.getElementById("remaining");

textEl.addEventListener("keyup", () => {
  setCharacter();
});

const setCharacter = () => {
  const currentLength = textEl.value.length;
  total.innerText = `Total Characters : ${currentLength} `;

  const remainingLength = textEl.getAttribute("maxlength") - currentLength;
  remaining.innerText = `Remaining Characters : ${remainingLength} `;
  if (currentLength === 50) {
    alert("max character limits are 50");
  }
};

setCharacter();
