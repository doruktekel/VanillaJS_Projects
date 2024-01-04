const inputEl = document.getElementById("answer");

const querySel = (item) => {
  return document.querySelector(item);
};

const formEl = querySel("form");
const quesEl = querySel(".ques");
const scoreEl = querySel(".score");

let random1;
let random2;
let multiply;

const generateQuestion = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };
  random1 = randomNumber();
  random2 = randomNumber();
  quesEl.innerHTML = `what is ${random1} multiply by ${random2}`;
  multiply = random1 * random2;
};
generateQuestion();

let score = JSON.parse(localStorage.getItem("score")) | [];
scoreEl.innerHTML = `Score : ${score}`;

const correctAnsw = () => {
  score++;
  scoreEl.innerHTML = `Score : ${score}`;
  scoreEl.style.color = "green";
  inputEl.value = "";
  localStorage.setItem("score", JSON.stringify(score));
};

const wrongAnsw = () => {
  score--;
  scoreEl.innerHTML = `Score : ${score}`;
  scoreEl.style.color = "red";
  inputEl.value = "";
  localStorage.setItem("score", JSON.stringify(score));
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const answer = +inputEl.value;
  if (answer === multiply) {
    correctAnsw();
    return generateQuestion();
  }
  wrongAnsw();
  generateQuestion();
});

document.addEventListener("DOMContentLoaded", () => {
  inputEl.focus();
});
