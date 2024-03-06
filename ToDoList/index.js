const inputEl = document.getElementById("input");
const ulistEl = document.querySelector(".ulist-container");

let comingArrayFromLocalStorage = JSON.parse(localStorage.getItem("Tasks"));
if (!comingArrayFromLocalStorage) {
  comingArrayFromLocalStorage = [];
}
let arr = comingArrayFromLocalStorage;

const checkboxToggle = (id) => {
  const toggledTask = arr.find((task) => task.id === id);
  toggledTask.completed = !toggledTask.completed;
  localStorage.setItem("Tasks", JSON.stringify(arr));
  showList();
};

const deleteTask = (id) => {
  arr = arr.filter((task) => task.id !== id);
  localStorage.setItem("Tasks", JSON.stringify(arr));
  showList();
};

const showList = () => {
  ulistEl.innerHTML = "";
  arr.forEach((task) => {
    const list = document.createElement("li");
    list.classList.add("list-container");
    ulistEl.appendChild(list);
    const text = document.createElement("p");
    list.appendChild(text);
    text.innerHTML = task.text;
    const div = document.createElement("div");
    div.classList.add("btns");
    list.appendChild(div);
    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";

    checkboxEl.addEventListener("change", () => {
      checkboxToggle(task.id);
    });
    checkboxEl.checked = task.completed;

    if (task.completed) {
      text.style.textDecoration = "line-through";
    }

    div.appendChild(checkboxEl);
    const iconEl = document.createElement("i");
    iconEl.classList.add("fa-regular");
    iconEl.classList.add("fa-trash-can");
    div.appendChild(iconEl);

    iconEl.addEventListener("click", () => {
      deleteTask(task.id);
    });
  });
};

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const newDate = new Date();
    const newTask = {
      id: newDate.getTime(),
      text: e.target.value,
      completed: false,
    };
    arr.unshift(newTask);
    inputEl.value = "";
    localStorage.setItem("Tasks", JSON.stringify(arr));
    showList();
  }
});

showList();
