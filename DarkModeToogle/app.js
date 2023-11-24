const bodyEl = document.body;

const inputEl = document.getElementById("input");

inputEl.checked = JSON.parse(localStorage.getItem("mod"));

const updatebody = () => {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "grey";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
};
updatebody();
inputEl.addEventListener("input", () => {
  updatebody();
  updateLocalStorage();
});

const updateLocalStorage = () => {
  localStorage.setItem("mod", JSON.stringify(inputEl.checked));
};
