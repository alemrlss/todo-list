import { tasks } from "./rigthPanel";
let importantTask = [];
const renderTasks = (arrayTasks, nodeEdit) => {
  const taskContent = document.querySelector(".tasks-content");
  while (taskContent.firstChild) {
    taskContent.removeChild(taskContent.firstChild);
  }

  const filterTasks = tasks.filter(
    (task) => task.idProject == nodeEdit.dataset.id
  );

  filterTasks.forEach((task) => {
    const newTask = {
      title: task.title,
      details: task.inputDetailsValue,
      date: task.date,
    };

    const divTask = document.createElement("div");
    divTask.dataset.idTask = task.idTask;
    divTask.classList.add("task-item");

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    const titleTask = document.createElement("h4");
    titleTask.classList.add("title-task");
    titleTask.textContent = newTask.title;
    taskInfo.appendChild(titleTask);

    const detailsTask = document.createElement("p");
    detailsTask.classList.add("details-task");
    detailsTask.textContent = newTask.details;
    taskInfo.appendChild(detailsTask);

    divTask.appendChild(taskInfo);

    const taskControl = document.createElement("div");
    taskControl.classList.add("taskControl");

    const importantTask = document.createElement("img");
    importantTask.classList.add("important-task");
    importantTask.dataset.idTask = task.idTask;
    task.isImportant?importantTask.setAttribute('src','./img/starYellow.png'):importantTask.setAttribute('src','./img/star.png')
    taskControl.appendChild(importantTask);

    const editTask = document.createElement("img");
    editTask.classList.add("edit-task");
    editTask.dataset.idTask = task.idTask;
    editTask.setAttribute("src", "./img/edit.png");
    taskControl.appendChild(editTask);

    const deleteTask = document.createElement("img");
    deleteTask.classList.add("delete-task");
    deleteTask.dataset.idTask = task.idTask;
    deleteTask.setAttribute("src", "./img/delete.png");
    taskControl.appendChild(deleteTask);

    deleteTask.addEventListener("click", (e) => {
      const tasksContent = document.querySelectorAll(".task-item");
      let nodeEdit;
      tasksContent.forEach((el) => {
        if (el.dataset.idTask == e.target.dataset.idTask) {
          nodeEdit = el;
        }
      });
      const filterDeleteTask = tasks.filter(
        (obj) => obj.idTask != nodeEdit.dataset.idTask
      );
      tasks = filterDeleteTask;

      nodeEdit.remove();
    });

    importantTask.addEventListener("click", (e) => {
      const tasksContent = document.querySelectorAll(".task-item");
      let nodeEdit;
      tasksContent.forEach((el) => {
        if (el.dataset.idTask == e.target.dataset.idTask) {
          nodeEdit = el;
        }
      });

      const filterImportantTask = tasks.filter(
        (obj) => obj.idTask == nodeEdit.dataset.idTask
      );
      let isImportant = filterImportantTask[0].isImportant;

      if (!isImportant) {
        importantTask.setAttribute("src", "./img/starYellow.png");
        console.log(`El campo isImportant es: ${isImportant}`);

        const index = tasks.findIndex((task) => task.idTask === nodeEdit.dataset.idTask);
        if (index !== -1) {
          tasks[index].isImportant = true;
        }
      } else {
        importantTask.setAttribute("src", "./img/star.png");
        console.log(`El campo isImportant es: ${isImportant}`);
        const index = tasks.findIndex((task) => task.idTask === nodeEdit.dataset.idTask);
        if (index !== -1) {
          tasks[index].isImportant = false;
        }

      }
    });

    divTask.appendChild(taskControl);
    taskContent.appendChild(divTask);
  });
};

export default renderTasks;
