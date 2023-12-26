const btns = document.querySelectorAll("button");

const input = document.getElementById("input");
const number = document.querySelector(".number");

const clearResult = () => {
  input.value = "";
};

const calculateResult = () => {
  input.value = eval(input.value).toFixed(3);
};

const appendValue = (btnValue) => {
  input.value += btnValue;
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    const btnValue = btns[i].innerText;
    if (btnValue === "C") {
      clearResult();
    } else if (btnValue === "=") {
      calculateResult();
    } else appendValue(btnValue);
  });
}
