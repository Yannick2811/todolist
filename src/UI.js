const addTask = document.querySelector("#add-task");
const mainContent = document.querySelector("#main-content");
const taskInput = document.querySelector("#task-input");
const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel");
const tasksContainer = document.querySelector("#tasks-container");
const taskList = document.querySelector("#task-list");
const taskInputContainer = document.querySelector("#task-input-container");
const buttonContainer = document.querySelector("#button-container");
const alertParagraph = document.querySelector(".alert-paragraph");

function openAddMenu() {
  addTask.addEventListener("click", () => {
    taskInputContainer.style.display = "flex";
  });
}

function closeAddMenu() {
  cancelButton.addEventListener("click", () => {
    taskInputContainer.style.display = "none";
  });
}

class Tasks {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

let taskArray = [];

function addRemoveTask() {
  submitButton.addEventListener("click", () => {
    if (taskInput.value === "" || taskInput.value === null) {
      alertParagraph.style.display = "flex";
      return;
    }
    let newTask = new Tasks(taskInput.value);
    taskArray.push(newTask.title);
    // Task Item List Entry
    let newTaskItem = document.createElement("li");
    newTaskItem.classList.add("task-entry");
    // Task Button
    let newTaskItemButton = document.createElement("button");
    newTaskItemButton.classList.add("task-entry-button");
    newTaskItemButton.textContent = newTask.title;
    // Delete Button
    let itemDeleteButton = document.createElement("button");
    itemDeleteButton.classList.add("item-delete-button");
    // Appending
    newTaskItem.append(itemDeleteButton);
    newTaskItem.append(newTaskItemButton);
    taskList.append(newTaskItem);
    newTaskItem.setAttribute("id", taskInput.value);
    // Storage
    localStorage.setItem("taskStorage", JSON.stringify(taskArray));
    let storage = JSON.parse(localStorage.getItem("taskStorage"));
    itemDeleteButton.addEventListener("click", () => {
      let index = storage.indexOf(newTask.title);
      if (index >= 0) {
        newTaskItem.remove();
        storage.splice(index, 1);
        localStorage.setItem("taskStorage", JSON.stringify(storage));
        // console.log(storage);
        // console.log(taskArray);
      }
    });
    // Reset Input Field
    taskInput.value = "";
    alertParagraph.style.display = "none";
    console.log(storage);
  });
}

function loadStoredTasks() {
  let jTaskArray = JSON.parse(localStorage.getItem("taskStorage"));
  // console.log(jTaskArray);
  for (let i = 0; i < jTaskArray.length; i++) {
    taskArray.push(jTaskArray[i]);
    // Task Item List Entry
    let newTaskItem = document.createElement("li");
    newTaskItem.classList.add("task-entry");
    // Task Button
    let newTaskItemButton = document.createElement("button");
    newTaskItemButton.classList.add("task-entry-button");
    newTaskItemButton.textContent = jTaskArray[i];
    // Delete Button
    let itemDeleteButton = document.createElement("button");
    itemDeleteButton.classList.add("item-delete-button");
    // Appending
    newTaskItem.append(itemDeleteButton);
    newTaskItem.append(newTaskItemButton);
    taskList.append(newTaskItem);
    newTaskItem.setAttribute("id", jTaskArray[i]);
    // Storage
    localStorage.setItem("taskStorage", JSON.stringify(taskArray));
    let storage = JSON.parse(localStorage.getItem("taskStorage"));
    itemDeleteButton.addEventListener("click", () => {
      newTaskItem.remove();
      let index = jTaskArray.indexOf(jTaskArray[i]);
      if (index >= 0) {
        jTaskArray.splice(index, 1);
        localStorage.setItem("taskStorage", JSON.stringify(jTaskArray));
        // console.log(jTaskArray);
      }
    });
    // Reset Input Field
    taskInput.value = "";
    alertParagraph.style.display = "none";
  }
}

export { openAddMenu, closeAddMenu, addRemoveTask, loadStoredTasks };
