const noteTitleInput = document.getElementById("note-title");
const noteTextInput = document.getElementById("note-text");
const addNoteBtn = document.getElementById("add-note-btn");
const notesList = document.getElementById("notes-list");
const messageEl = document.getElementById("message");

const STORAGE_KEY = "day22_notes";

function loadNotes() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderNotes() {
  const notes = loadNotes();
  notesList.innerHTML = "";

  if (notes.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "Henüz bir not eklemedin.";
    emptyMsg.style.fontSize = "13px";
    emptyMsg.style.color = "#9ca3af";
    notesList.appendChild(emptyMsg);
    return;
  }

  notes
    .slice()
    .reverse()
    .forEach((note) => {
      const card = document.createElement("div");
      card.className = "note-card";

      const header = document.createElement("div");
      header.className = "note-header";

      const titleEl = document.createElement("div");
      titleEl.className = "note-title";
      titleEl.textContent = note.title || "Başlıksız Not";

      const dateEl = document.createElement("div");
      dateEl.className = "note-date";
      dateEl.textContent = formatDate(note.createdAt);

      header.appendChild(titleEl);
      header.appendChild(dateEl);

      const textEl = document.createElement("div");
      textEl.className = "note-text";
      textEl.textContent = note.text;

      const actions = document.createElement("div");
      actions.className = "note-actions";

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "note-btn delete";
      deleteBtn.textContent = "Sil";
      deleteBtn.addEventListener("click", () => deleteNote(note.id));

      actions.appendChild(deleteBtn);

      card.appendChild(header);
      card.appendChild(textEl);
      card.appendChild(actions);

      notesList.appendChild(card);
    });
}

function addNote() {
  const title = noteTitleInput.value.trim();
  const text = noteTextInput.value.trim();

  if (!text) {
    messageEl.textContent = "En azından not içeriği yazmalısın.";
    return;
  }

  messageEl.textContent = "";

  const notes = loadNotes();

  const newNote = {
    id: Date.now(),
    title,
    text,
    createdAt: new Date().toISOString(),
  };

  notes.push(newNote);
  saveNotes(notes);
  renderNotes();

  noteTextInput.value = "";
}

function deleteNote(id) {
  const notes = loadNotes().filter((note) => note.id !== id);
  saveNotes(notes);
  renderNotes();
}

addNoteBtn.addEventListener("click", addNote);

[noteTitleInput, noteTextInput].forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (
      e.key === "Enter" &&
      (e.metaKey || e.ctrlKey || el === noteTitleInput)
    ) {
      addNote();
    }
  });
});

renderNotes();
