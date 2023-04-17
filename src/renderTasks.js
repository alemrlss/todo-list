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
    task.isImportant
      ? importantTask.setAttribute("src", "./img/starYellow.png")
      : importantTask.setAttribute("src", "./img/star.png");
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

        const index = tasks.findIndex(
          (task) => task.idTask === nodeEdit.dataset.idTask
        );
        if (index !== -1) {
          tasks[index].isImportant = true;
        }
      } else {
        importantTask.setAttribute("src", "./img/star.png");

        const index = tasks.findIndex(
          (task) => task.idTask === nodeEdit.dataset.idTask
        );
        if (index !== -1) {
          tasks[index].isImportant = false;
        }
      }
    });

    editTask.addEventListener("click", (e) => {
      console.log(tasks);
      const tasksContent = document.querySelectorAll(".task-item");
      let nodeEdit;
      tasksContent.forEach((el) => {
        if (el.dataset.idTask == e.target.dataset.idTask) {
          nodeEdit = el;
        }
      });

      const formTasks = document.createElement("form");
      formTasks.classList.add("form-edit-task");

      const taskFind = tasks.find(
        (task) => task.idTask === e.target.dataset.idTask
      );

      const labelEditMode = document.createElement("label");
      labelEditMode.textContent = `Mode Edit: ${taskFind.title}`;
      labelEditMode.classList.add('form-mode-edit')
      formTasks.appendChild(labelEditMode);

      const labelTextTitleTask = document.createElement("label");
      labelTextTitleTask.textContent = "Title:";
      formTasks.appendChild(labelTextTitleTask);

      const inputTextTitleTask = document.createElement("input");
      inputTextTitleTask.classList.add("title-input-edit-task");
      inputTextTitleTask.value = taskFind.title;
      inputTextTitleTask.type = "text";
      formTasks.appendChild(inputTextTitleTask);

      const labelTextDetailsTask = document.createElement("label");
      labelTextDetailsTask.textContent = "Details:";
      formTasks.appendChild(labelTextDetailsTask);

      const inputTextDetailsTask = document.createElement("input");
      inputTextDetailsTask.classList.add("details-input-edit-task");
      inputTextDetailsTask.value = taskFind.inputDetailsValue;
      inputTextDetailsTask.type = "text";
      formTasks.appendChild(inputTextDetailsTask);

      const labelTextDateTask = document.createElement("label");
      labelTextDateTask.textContent = "Date:";
      formTasks.appendChild(labelTextDateTask);

      const inputTextDateTask = document.createElement("input");
      inputTextDateTask.classList.add("date-input-edit-task");
      inputTextDateTask.type = "date";
      formTasks.appendChild(inputTextDateTask);

      const divButtons = document.createElement("div");
      divButtons.classList.add("btns-form-addTask");

      const addBtn = document.createElement("button");
      addBtn.dataset.idTask = e.target.dataset.idTask;
      addBtn.classList.add("add-btn");
      addBtn.textContent = "Add";

      const cancelBtn = document.createElement("button");
      cancelBtn.classList.add("cancel-btn");
      cancelBtn.textContent = "Cancel";

      divButtons.appendChild(addBtn);
      divButtons.appendChild(cancelBtn);
      formTasks.appendChild(divButtons);

      nodeEdit.replaceWith(formTasks);

      divButtons.addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target.matches(".add-btn")) {
          const taskFindEdit = tasks.find(
            (task) => task.idTask === e.target.dataset.idTask
          );
          const inputTitleValue = document.querySelector(
            ".title-input-edit-task"
          ).value;
          const inputDetailsValue = document.querySelector(
            ".details-input-edit-task"
          ).value;


          nodeEdit.children[0].children[0].textContent = inputTitleValue
          nodeEdit.children[0].children[1].textContent = inputDetailsValue

          const newTask = {
            title: inputTitleValue,
            inputDetailsValue: inputDetailsValue || "not details",
            date: "NO FUNCIONA",
            idTask: nodeEdit.dataset.idTask,
            idProject: taskFindEdit.idProject,
          };

          let objetoABuscar = taskFindEdit;
          let indice = tasks.indexOf(objetoABuscar);
          tasks[indice] = newTask;
          formTasks.replaceWith(nodeEdit);
        }

        if (e.target.matches(".cancel-btn")) {
          formTasks.replaceWith(nodeEdit);
        }
      });
    });

    divTask.appendChild(taskControl);
    taskContent.appendChild(divTask);
  });
};

export default renderTasks;
