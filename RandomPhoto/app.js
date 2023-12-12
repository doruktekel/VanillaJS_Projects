const btn = document.getElementById("btn");
const img = document.querySelector(".image");
const detail = document.querySelector(".detail");
const header = document.querySelector(".header");

const url = "https://picsum.photos/id";
let randomnumber = "";
img.style.display = "None";
detail.style.display = "None";

btn.addEventListener("click", () => {
  randomid();
  fetchPhoto(randomnumber);
});

const randomid = () => {
  randomnumber = Math.floor(Math.random() * 100);
  return randomnumber;
};

const fetchPhoto = async (randomnumber) => {
  try {
    img.src = "roll.svg";
    detail.innerHTML = "Your data is coming...";
    header.innerHTML = "Your random photo generating...";
    btn.disabled = true;
    btn.style.backgroundColor = "Grey";
    const resp = await fetch(`${url}/${randomnumber}/info`);
    const reverse = await resp.json();
    img.src = reverse.download_url;
    img.style.display = "Block";
    detail.style.display = "Block";
    header.innerHTML = "Welcome random photo generator";
    btn.disabled = false;
    btn.style.backgroundColor = "burlywood";
    detail.innerHTML = reverse.author;
  } catch (error) {
    console.log(error);
    alert("Internet connection problem. Please try again later ...");
  }
};
