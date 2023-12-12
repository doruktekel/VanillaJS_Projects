const url = "https://api.quotable.io/random";

const btn = document.getElementById("btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const icons = document.querySelectorAll(".fa-solid");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchQuote();
});

const fetchQuote = async () => {
  try {
    btn.disabled = true;
    quote.innerHTML = "Quote generating please wait...";
    author.innerHTML = "";
    icons.forEach((icon) => {
      icon.style.display = "None";
    });
    const response = await fetch(url);
    const answer = await response.json();
    const fetchAuthor = answer.author;
    quote.innerHTML = answer.content;
    author.innerHTML = `Author : ${fetchAuthor}`;
    icons.forEach((icon) => {
      icon.style.display = "Block";
    });
    result.style.display = "Block";
    btn.disabled = false;
  } catch (error) {
    console.log(error);
  }
};
