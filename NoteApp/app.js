const btn = document.getElementById("btn");
const cont = document.querySelector(".container");

const saveNotes = (newarry) => {
  localStorage.setItem("notes", JSON.stringify(newarry));
};

const getNotes = () => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
};

const deleteitem = (id, newEl) => {
  const notes = getNotes().filter((item) => item.id != id);
  saveNotes(notes);
  cont.removeChild(newEl);
};
const updateitem = (id, content) => {
  const notes = getNotes();
  const item = notes.filter((item) => item.id == id)[0];
  item.content = content;
  saveNotes(notes);
};

const createnoteEl = (id, content) => {
  const newEl = document.createElement("textarea");
  newEl.classList.add("text");
  newEl.value = content;
  newEl.placeholder = "Please write your notes...";

  newEl.addEventListener("dblclick", () => {
    const result = confirm("Do you want to delete this item ?");
    if (result) {
      deleteitem(id, newEl);
    }
  });

  newEl.addEventListener("input", () => {
    updateitem(id, newEl.value);
  });

  return newEl;
};

const addNote = () => {
  let newarry = getNotes();
  let newobj = {
    id: Math.floor(Math.random() * 1000000),
    content: "",
  };

  newarry.push(newobj);

  const noteEl = createnoteEl(newobj.id, newobj.content);
  cont.insertBefore(noteEl, btn);

  saveNotes(newarry);
};

getNotes().forEach((note) => {
  const newEl = createnoteEl(note.id, note.content);
  cont.insertBefore(newEl, btn);
});

btn.addEventListener("click", addNote);
