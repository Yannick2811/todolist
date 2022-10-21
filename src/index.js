import { openAddMenu } from "./UI";
import { closeAddMenu } from "./UI";
import { addRemoveTask } from "./UI";
import { loadStoredTasks } from "./UI";
import { addNewProject } from "./projects";
import { loadStoredProjects } from "./projects";
import { mainToDos } from "./projects";

openAddMenu();
closeAddMenu();
addRemoveTask();
addNewProject();
mainToDos();

window.onload = function () {
  loadStoredProjects();
};

function addLoadEvent(func) {
  let oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

const newProjectButton = document.querySelector("#add-project-button");
const newProjectInputContainer = document.querySelector(
  "#new-project-input-container"
);

newProjectButton.addEventListener("click", () => {
  newProjectInputContainer.style.display = "flex";
});

addLoadEvent(loadStoredTasks());
