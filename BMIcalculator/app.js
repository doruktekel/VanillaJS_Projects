const height = document.getElementById("height");
const weight = document.getElementById("weight");
const result = document.getElementById("result");
const text = document.querySelector(".text");
const span = document.querySelector("span");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const bmi = weight.value / (height.value / 100) ** 2;
  const fixbmi = bmi.toFixed(1);

  if (fixbmi <= 18.5) {
    span.innerHTML = "Underweight";
  } else if (24.9 >= fixbmi && fixbmi > 18.5) {
    span.innerHTML = "Normal weight";
  } else if (fixbmi >= 25 && fixbmi <= 29.9) {
    span.innerHTML = "Overweight";
  } else span.innerHTML = "Obesity";

  result.value = fixbmi;
  result.style.display = "block";
  text.style.display = "block";

  weight.value = "";
  height.value = "";
});
