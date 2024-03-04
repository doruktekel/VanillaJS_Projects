const btnEl = document.getElementById("btn");
const iconEl = document.getElementById("icon");
const inputEl = document.querySelector(".input");
const alertEl = document.querySelector(".alert-container");

let password = "";
const passwordLength = 10;

const generatePassword = () => {
  const charSet =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charSetArr = charSet.split("");
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charSetArr.length);
    password += charSetArr[randomIndex];
  }
  inputEl.value = password;

  setTimeout(() => {
    password = "";
    inputEl.value = "";
  }, 5000);
};

const copyPassword = () => {
  navigator.clipboard.writeText(password);
};

btnEl.addEventListener("click", () => {
  generatePassword();
});

iconEl.addEventListener("click", () => {
  if (inputEl.value) {
    copyPassword();
    alertEl.classList.toggle("active");
    setTimeout(() => {
      alertEl.classList.toggle("active");
    }, 3000);
  }
});
