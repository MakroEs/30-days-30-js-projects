const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const taskCountSpan = document.getElementById("task-count");
const clearCompletedBtn = document.getElementById("clear-completed-btn");

let gorevler = [];
let idSayac = 1;

function gorevSayisiniGuncelle() {
  const toplam = gorevler.length;
  taskCountSpan.textContent = `${toplam} görev`;
}

function gorevElemaniOlustur(gorev) {
  const li = document.createElement("li");
  li.className = "todo-item";
  if (gorev.completed) {
    li.classList.add("completed");
  }
  li.dataset.id = gorev.id;

  const leftDiv = document.createElement("div");
  leftDiv.className = "todo-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.checked = gorev.completed;

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = gorev.text;

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Sil";

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  return li;
}

function listeyiYenidenCiz() {
  todoList.innerHTML = "";

  gorevler.forEach((gorev) => {
    const li = gorevElemaniOlustur(gorev);
    todoList.appendChild(li);
  });

  gorevSayisiniGuncelle();
}

// Form submit (yeni görev ekleme)
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = todoInput.value.trim();
  if (!text) return;

  const yeniGorev = {
    id: idSayac++,
    text,
    completed: false,
  };

  gorevler.push(yeniGorev);
  todoInput.value = "";

  listeyiYenidenCiz();
});

todoList.addEventListener("click", function (e) {
  const hedef = e.target;
  const li = hedef.closest(".todo-item");
  if (!li) return;

  const id = Number(li.dataset.id);

  if (hedef.classList.contains("todo-checkbox")) {
    gorevler = gorevler.map((g) =>
      g.id === id ? { ...g, completed: !g.completed } : g
    );
    listeyiYenidenCiz();
  }

  if (hedef.classList.contains("delete-btn")) {
    gorevler = gorevler.filter((g) => g.id !== id);
    listeyiYenidenCiz();
  }
});

clearCompletedBtn.addEventListener("click", function () {
  gorevler = gorevler.filter((g) => !g.completed);
  listeyiYenidenCiz();
});

gorevSayisiniGuncelle();
