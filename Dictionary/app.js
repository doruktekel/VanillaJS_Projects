const input = document.querySelector(".input");
const meaningCont = document.querySelector(".meaning-container");
const title = document.querySelector(".title");
const meaning = document.querySelector(".meaning");
const audio = document.querySelector(".audio");

input.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchApi(e.target.value);
  }
});

const fetchApi = async (search) => {
  try {
    title.style.display = "Block";
    title.innerHTML = `Searhing the ${search} word`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    const getword = await fetch(url);
    const searchWord = await getword.json();
    if (searchWord.title) {
      title.innerHTML = `${search} word wasnt found`;
    } else {
      title.innerHTML = searchWord[0].word;
      meaning.innerHTML = searchWord[0].meanings[0].definitions[0].definition;
      meaning.style.display = "Block";
      audio.src = `https://api.dictionaryapi.dev/media/pronunciations/en/${search}-uk.mp3`;
      audio.style.display = "Block";
    }
  } catch (error) {
    console.log(error);
    alert("Internet connection problem, please try again later!");
  }
};
