const getElById = (item) => {
  return document.getElementById(item);
};

const billEl = getElById("bill");
const tipEl = getElById("tip");
const btnEl = getElById("btn");

const totalEl = document.querySelector(".total");

const calculate = (bill, tip) => {
  return bill + bill * (tip / 100);
};

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  let billValue = +billEl.value;
  let tipValue = +tipEl.value;

  totalEl.innerHTML = calculate(billValue, tipValue);

  setTimeout(() => {
    billEl.value = "";
    tipEl.value = "";
    totalEl.innerHTML = "";
  }, 5000);
});
