const celcius = document.getElementById("celcius");
const kelvin = document.getElementById("kelvin");
const fahrenheit = document.getElementById("fahrenheit");

const convert = (e) => {
  const value = +e.target.value;

  switch (e.target.name) {
    case "celcius":
      kelvin.value = (value + 273.15).toFixed(2);
      fahrenheit.value = ((value * 9) / 5 + 32).toFixed(2);
      break;
    case "kelvin":
      celcius.value = (value - 273.15).toFixed(2);
      fahrenheit.value = (((value - 273.15) * 9) / 5 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celcius.value = (((value - 32) * 5) / 9).toFixed(2);
      kelvin.value = (((value - 32) * 5) / 9 + 273.15).toFixed(2);
      break;
    default:
      break;
  }
};
