const btnEl = document.querySelector(".btn");
const ageEl = document.querySelector(".age");
const dateEl = document.getElementById("date");

const getAge = () => {
  const birthValue = dateEl.value;
  const birth = new Date(birthValue);

  if (isNaN(birth.getTime())) {
    ageEl.innerHTML = "Please enter a valid birthdate";
    return;
  }

  const dateNow = new Date();
  const calculateAge = dateNow.getFullYear() - birth.getFullYear();

  if (
    birth.getMonth() > dateNow.getMonth() ||
    (birth.getMonth() === dateNow.getMonth() &&
      birth.getDate() > dateNow.getDate())
  ) {
    calculateAge--;
  }

  ageEl.innerHTML = `Your age: ${calculateAge}`;
};

btnEl.addEventListener("click", getAge);
