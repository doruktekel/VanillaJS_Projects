const contEl = document.querySelector(".container");

const jobs = ["Youtuber", "Designer", "Engineer", "Developer"];

let jobIndex = 0;
let characterIndex = 0;

const changeJobs = () => {
  characterIndex++;
  contEl.innerHTML = `<h1>I am ${
    jobs[jobIndex].slice(0, 1) === "E" ? "an" : "a"
  } ${jobs[jobIndex].slice(0, characterIndex)}</h1>`;

  if (jobIndex > jobs.length - 1) {
    jobIndex = 0;
  }
  if (characterIndex > jobs[jobIndex].length) {
    characterIndex = 0;
    jobIndex++;
  }

  setTimeout(() => {
    changeJobs();
  }, 500);
};
changeJobs();
