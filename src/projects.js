class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

class Tasks {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

const newProjectButton = document.querySelector("#add-project-button");
const newProjectInputContainer = document.querySelector(
  "#new-project-input-container"
);
const projectSubmitButton = document.querySelector("#project-submit-button");
const projectInputField = document.querySelector("#project-name-input");
const sidebar = document.querySelector("#sidebar");
const projectContainer = document.querySelector("#project-container");
const formContainer = document.querySelector("#form-container");
const addTaskButton = document.querySelector("#add-task");

let projectArray = [];

function addNewProject() {
  projectSubmitButton.addEventListener("click", () => {
    let newProject = new Project(projectInputField.value);
    projectArray.push(newProject.title);
    console.log(projectArray);
    // Add Project Button On Sidebar
    let newProjectButton = document.createElement("button");
    newProjectButton.textContent = projectInputField.value;
    newProjectButton.classList.add("sidebar-button");
    projectContainer.append(newProjectButton);
    newProjectButton.addEventListener("click", () => {
      // UI Stuff
      let taskContainer = document.querySelector("#tasks-container");
      const mainContent = document.querySelector("#main-content");
      // Tasks Container
      taskContainer.remove();
      let newTaskContainer = document.createElement("div");
      newTaskContainer.setAttribute("id", `${newProject.title}-container`);
      mainContent.prepend(newTaskContainer);
      // Add Task Button
      addTaskButton.remove();
      let newAddTaskButton = document.createElement("button");
      newAddTaskButton.innerText = "+ Add Task";
      newAddTaskButton.setAttribute("id", "new-add-task");
      newAddTaskButton.classList.add("add-task");
      mainContent.append(newAddTaskButton);
    });
    // Empty Input Field
    projectInputField.value = "";
    // Remove Input Field
    newProjectInputContainer.style.display = "none";
    // Storage
    localStorage.setItem("projectStorage", JSON.stringify(projectArray));
  });
}

function mainToDos() {
  let mainToDosButton = document.querySelector("#main-project");
  mainToDosButton.addEventListener("click", () => {
    window.location.reload();
  });
}
let newTaskArray = [];

function loadStoredProjects() {
  let jProjectsArray = JSON.parse(localStorage.getItem("projectStorage"));
  for (let i = 0; i < jProjectsArray.length; i++) {
    projectArray.push(jProjectsArray[i]);
    // Add Project Button On Sidebar
    let newProjectButton = document.createElement("button");
    newProjectButton.textContent = jProjectsArray[i];
    newProjectButton.classList.add("sidebar-button");
    projectContainer.append(newProjectButton);
    localStorage.setItem("projectStorage", JSON.stringify(projectArray));
    // Project Button Event Listener
    newProjectButton.addEventListener("click", () => {
      if (localStorage.getItem(`${jProjectsArray[i]}Storage`)) {
        let projectStorage = JSON.parse(
          localStorage.getItem(`${jProjectsArray[i]}Storage`)
        );
        for (let i = 0; i < projectStorage.length; i++) {
          newTaskArray.push(projectStorage[i]);
        }
      }
      console.log(newTaskArray);
      // UI Stuff
      let oldTaskInputContainer = document.querySelector(
        "#task-input-container"
      );
      oldTaskInputContainer.style.display = "none";
      let taskContainer = document.querySelector("#tasks-container");
      const mainContent = document.querySelector("#main-content");
      let projectHeader = document.createElement("h2");
      projectHeader.textContent = jProjectsArray[i];
      let deleteIcon = document.createElement("button");
      deleteIcon.classList.add("trashcan");
      deleteIcon.setAttribute("id", `${jProjectsArray[i]}-delete-icon`);
      let headerContainer = document.createElement("div");
      headerContainer.classList.add("header-container");
      headerContainer.append(projectHeader);
      headerContainer.append(deleteIcon);
      deleteIcon.addEventListener("click", () => {
        let index = jProjectsArray.indexOf(jProjectsArray[i]);
        if (index > -1) {
          newProjectButton.remove();
          jProjectsArray.splice(index, 1);
          localStorage.setItem(
            "projectStorage",
            JSON.stringify(jProjectsArray)
          );
          window.location.reload();
        }
      });
      projectHeader.classList.add("project-header");
      taskContainer.remove();
      let newTaskContainer = document.createElement("div");
      newTaskContainer.classList.add("tasks-container");
      newTaskContainer.setAttribute("id", `${jProjectsArray[i]}-container`);
      newTaskContainer.classList.add("tasks-container");
      let newTaskList = document.createElement("ul");
      newTaskList.classList.add("task-list");
      newTaskList.setAttribute("id", "new-task-list");
      newTaskContainer.append(newTaskList);
      mainContent.prepend(newTaskContainer);
      mainContent.prepend(headerContainer);
      // Add Task Button
      addTaskButton.remove();
      let mainToDosHeader = document.querySelector("#main-to-dos-header");
      mainToDosHeader.remove();
      let newAddTaskButton = document.createElement("button");
      newAddTaskButton.innerText = "+ Add Task";
      newAddTaskButton.setAttribute("id", "new-add-task");
      newAddTaskButton.classList.add("add-task");
      mainContent.append(newAddTaskButton);
      newAddTaskButton.addEventListener("click", () => {
        newAddTaskButton.disabled = true;
        let taskForm = document.createElement("form");
        taskForm.setAttribute("onsubmit", "return false");
        let newTaskInputContainer = document.createElement("div");
        newTaskInputContainer.classList.add("task-input-container");
        newTaskInputContainer.style.display = "flex";
        let newTaskInput = document.createElement("input");
        newTaskInput.setAttribute("type", "text");
        newTaskInput.setAttribute("id", "new-task-input");
        newTaskInputContainer.append(newTaskInput);
        let newButtonContainer = document.createElement("div");
        newButtonContainer.classList.add("button-container");
        let newSubmitButton = document.createElement("button");
        newSubmitButton.innerText = "Submit";
        newSubmitButton.classList.add("submit");
        newSubmitButton.setAttribute("type", "submit");
        // Submit Button Event Listener
        newSubmitButton.addEventListener("click", () => {
          if (newTaskInput.value === "" || newTaskInput.value === null) {
            newAlertParagraph.style.display = "flex";
          }
          let newTask = new Tasks(newTaskInput.value);
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
          newTaskList.append(newTaskItem);
          newTaskItem.setAttribute("id", newTaskInput.value);
          // Storage
          if (localStorage.getItem(`${jProjectsArray[i]}Storage`)) {
            let storage = JSON.parse(
              localStorage.getItem(`${jProjectsArray[i]}Storage`)
            );
            storage.push(newTask.title);
            localStorage.setItem(
              `${jProjectsArray[i]}Storage`,
              JSON.stringify(storage)
            );
          } else {
            newTaskArray.push(newTask.title);
            localStorage.setItem(
              `${jProjectsArray[i]}Storage`,
              JSON.stringify(newTaskArray)
            );
          }
          newTaskInput.value = "";
          // Delete Button Event Listener
          itemDeleteButton.addEventListener("click", () => {
            let storage = JSON.parse(
              localStorage.getItem(`${jProjectsArray[i]}Storage`)
            );
            let index = storage.indexOf(newTask.title);
            if (index > -1) {
              newTaskItem.remove();
              storage.splice(index, 1);
              localStorage.setItem(
                `${jProjectsArray[i]}Storage`,
                JSON.stringify(storage)
              );
            }
          });
          console.log(storage);
        });
        // Load Tasks to Project Site
        let newCancelButton = document.createElement("button");
        newCancelButton.innerText = "Cancel";
        newCancelButton.classList.add("cancel");
        newCancelButton.addEventListener("click", () => {
          newTaskInputContainer.style.display = "none";
          newAddTaskButton.disabled = false;
        });
        newButtonContainer.append(newSubmitButton);
        newButtonContainer.append(newCancelButton);
        newTaskInputContainer.append(newButtonContainer);
        taskForm.append(newTaskInputContainer);
        const mainContent = document.querySelector("#main-content");
        mainContent.append(taskForm);
        let newAlertParagraph = document.createElement("p");
        newAlertParagraph.textContent = "Please input your task!";
        newAlertParagraph.classList.add("alert-paragraph");
        mainContent.append(newAlertParagraph);
      });
      let projectStorage = JSON.parse(
        localStorage.getItem(`${jProjectsArray[i]}Storage`)
      );
      for (let i = 0; i < projectStorage.length; i++) {
        newTaskArray.push(projectStorage[i]);
        // Task Item List Entry
        let newTaskItem = document.createElement("li");
        newTaskItem.classList.add("task-entry");
        // Task Button
        let newTaskItemButton = document.createElement("button");
        newTaskItemButton.classList.add("task-entry-button");
        newTaskItemButton.textContent = projectStorage[i];
        // Delete Button
        let itemDeleteButton = document.createElement("button");
        itemDeleteButton.classList.add("item-delete-button");
        itemDeleteButton.addEventListener("click", () => {
          let storage = JSON.parse(
            localStorage.getItem(`${jProjectsArray[i]}Storage`)
          );
          let index = storage.indexOf(projectStorage[i]);
          if (index > -1) {
            newTaskItem.remove();
            storage.splice(index, 1);
            localStorage.setItem(
              `${jProjectsArray[i]}Storage`,
              JSON.stringify(storage)
            );
          }
        });
        // Appending
        newTaskItem.append(itemDeleteButton);
        newTaskItem.append(newTaskItemButton);
        newTaskItem.setAttribute("id", projectStorage[i]);
        let newTaskList = document.querySelector("#new-task-list");
        newTaskList.append(newTaskItem);
        // localStorage.setItem(
        //   `${jProjectsArray[i]}Storage`,
        //   JSON.stringify(newTaskArray)
        // );

        // Storage
        // localStorage.setItem("taskStorage", JSON.stringify(taskArray));
        // let storage = JSON.parse(localStorage.getItem("taskStorage"));
      }
    });
  }
}

export { addNewProject, loadStoredProjects, mainToDos };
