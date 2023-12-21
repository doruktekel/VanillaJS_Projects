const pound = document.getElementById("pound");
const err = document.querySelector(".error");
const text = document.querySelector(".text");

let errr;
let sub;

const change = (e) => {
  if (e.target.value <= 0) {
    err.style.display = "block";
    clearTimeout(errr);
    errr = setTimeout(() => {
      err.style.display = "none";
      e.target.value = "";
    }, 3000);
  } else {
    let newkg = (+e.target.value / 2.2).toFixed(2);
    text.innerHTML = `Your weight in kg is : ${newkg} `;
    clearTimeout(sub);
    sub = setTimeout(() => {
      text.innerHTML = "";
      e.target.value = "";
    }, 3000);
  }
};

pound.addEventListener("input", change);
