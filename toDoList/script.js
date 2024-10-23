"use strict";
//global selectors
const input = document.getElementById("task-input");
const ongoingTasksEl = document.getElementById("ongoing");
const completedTasksEl = document.getElementById("completed");
const formTask = document.getElementById("formTask");

input.addEventListener("animationend", () => input.classList.remove("alert"));

//arrays (empty)
// const aTask = {
//   title: "Title",
//   id: createID(),
//   completed: false,
// };

let ongoingTasks = [];
let completedTasks = [];

displayOngoingTasks();

//Unikt ID for hver to-do
function createID() {
  return crypto.randomUUID();
} //metode

formTask.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const data = new FormData(formTask);
  const title = data.get("title");
  
  if(title != "") {
      const description = data.get("description");
      addTask(title, description);
      displayOngoingTasks();
      formTask.reset();
    }
    else{
        input.classList.add("alert"); 
  }
});

//Tilføj en opgave
function addTask(title, description) {
  //lokal variabel
  //Objekt
  const newTask = {
    title,
    description,
    id: createID(),
    completed: false,
  };

  ongoingTasks.push(newTask);
  console.log(ongoingTasks);
}
// Indhold til Ongoing Tasks
function displayOngoingTasks() {
  ongoingTasksEl.innerHTML = "";
  ongoingTasks.forEach((task) => {
    ongoingTasksEl.innerHTML += `
          <li class="todo-item">
              <div class="task">
                  <label class="checkbox-container">
                  <input onchange="completedTask('${task.id}')" type="checkbox" name="check" unchecked/>
                  </label>
                  <div class="content">
                  <h3>${task.title}</h3>
                  <p>${task.description}</p>
                  </div>
              </div>
                  <button id="removeBtn" onclick="removeTask('${task.id}')" class="remove"><i class="fa fa-trash"></i></button>
                    

          </li>
          `;
  });
}
// Indhold til Completed Tasks
function completedTask(id) {
  const taskToToggle =
    ongoingTasks.find((task) => task.id === id) ||
    completedTasks.find((task) => task.id === id);

  if (taskToToggle) {
    if (taskToToggle.completed) {
      taskToToggle.completed = false;
      ongoingTasks.push(taskToToggle);
      completedTasks = completedTasks.filter((task) => task.id !== id);
    } else {
      taskToToggle.completed = true;
      completedTasks.push(taskToToggle);
      ongoingTasks = ongoingTasks.filter((task) => task.id !== id);
    }

    displayOngoingTasks();
    displayCompletedTasks();
  }
}

// Visning for comleted tasks
function displayCompletedTasks() {
  completedTasksEl.innerHTML = "";
  completedTasks.forEach((task) => {
    completedTasksEl.innerHTML += `
        <li class="todo-item">
              <div class="task">
                  <label class="checkbox-container">
                  <input onchange="completedTask('${task.id}')" type="checkbox" name="check" checked/>
                  </label>
                  <div class="content">
                  <h3>${task.title}</h3>
                  <p>${task.description}</p>
                  </div>
              </div>
                  <button id="removeBtn" onclick="removeTask('${task.id}')" class="remove"><i class="fa fa-trash"></i></button>
                    
          </li>
          `;
  });
}

//Fjern opgaven
function removeTask(id) {
  if (ongoingTasks.some((task) => task.id === id)) {
    ongoingTasks = ongoingTasks.filter((task) => task.id !== id);
  } else if (completedTasks.some((task) => task.id === id)) {
    completedTasks = completedTasks.filter((task) => task.id !== id);
  }

  displayOngoingTasks();
  displayCompletedTasks();
};
