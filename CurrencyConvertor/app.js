const cur1 = document.getElementById("currency-first");
const cur2 = document.getElementById("currency-second");

const worth1 = document.getElementById("worth-first");
const worth2 = document.getElementById("worth-second");

const parag = document.querySelector(".one");

const url =
  "https://v6.exchangerate-api.com/v6/5bc80500e3a32d64def320e3/latest/";

const calculate = async () => {
  try {
    parag.innerHTML = "Loading...";
    const datas = await fetch(`${url}${cur1.value}`).then((resp) =>
      resp.json()
    );
    const newdata = datas.conversion_rates[cur2.value];
    parag.innerHTML = `1 ${cur1.value} = ${newdata} ${cur2.value} `;
    worth2.value = (worth1.value * newdata).toFixed(2);
  } catch (error) {
    console.log("Error", error);
    alert("Internet Connection Problem ! ");
  }
};

calculate();
cur1.addEventListener("change", calculate);
cur2.addEventListener("change", calculate);
worth1.addEventListener("input", calculate);
