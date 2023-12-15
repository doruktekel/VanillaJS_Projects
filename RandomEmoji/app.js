const url = "https://emoji-api.com/emojis?access_key=";
const key = "2d48c5adf0c6e8d25094feecc23d48aa73e9de24";
const btn = document.getElementById("btn");
const desc = document.querySelector(".desc");

const fetchData = async () => {
  try {
    btn.innerHTML = "Loading...";
    desc.innerHTML = "Loading...";
    const response = await fetch(`${url}${key}`);
    const result = await response.json();
    const randomNumber = Math.floor(Math.random() * result.length);
    const randomChar = result[randomNumber].character;
    const randomDesc = result[randomNumber].group;
    btn.innerHTML = randomChar;
    desc.innerHTML = randomDesc;
  } catch (error) {
    console.log(error);
    alert("Internet Connection Problem");
  }
};

btn.addEventListener("click", () => {
  fetchData();
});
