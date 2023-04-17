const importantTasks = (tasks) => {
  const titleMain = document.querySelector(".mainTitle");
  const taskContent = document.querySelector(".tasks-content");
  const taskControl = document.querySelector(".control-content");

  if (taskControl.children[1]) {
    taskControl.children[1].remove();
  }
  if (taskControl.children[0]) {
    taskControl.children[0].remove();
  }

  titleMain.children[0].textContent = "Important Tasks";

  while (taskContent.firstChild) {
    taskContent.removeChild(taskContent.firstChild);
  }

  const filter = tasks.filter((task) => task.isImportant == true);
  let tasksImportant = filter;

  tasksImportant.forEach((task) => {
    const newTask = {
      title: task.title,
      details: task.inputDetailsValue,
      date: task.date,
      idTask: task.idTask,
      isChecked: task.isChecked
    };

    const divTask = document.createElement("div");
    divTask.classList.add("task-item");
    divTask.dataset.idTask = task.idTask;

    const taskChecked = document.createElement("div");
    taskChecked.classList.add("task-checked");

    const checkTask = document.createElement("input");
    checkTask.type = "checkbox";
    checkTask.classList.add("checkbox");
    checkTask.dataset.idTask = task.idTask;
    newTask.isChecked?checkTask.checked = true:checkTask.checked = false
    taskChecked.appendChild(checkTask);
    divTask.appendChild(taskChecked);

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    const titleTask = document.createElement("h4");
    titleTask.classList.add("title-task");
    !newTask.isChecked
    ? titleTask.classList.remove("textDecoration")
    : titleTask.classList.add("textDecoration");
    titleTask.textContent = newTask.title;
    taskInfo.appendChild(titleTask);

    const detailsTask = document.createElement("p");
    detailsTask.classList.add("details-task");
    detailsTask.textContent = newTask.details;
    !newTask.isChecked
    ? detailsTask.classList.remove("textDecoration")
    : detailsTask.classList.add("textDecoration");
    taskInfo.appendChild(detailsTask);

    divTask.appendChild(taskInfo);

    const taskControl = document.createElement("div");
    taskControl.classList.add("taskControl");

    const importantTask = document.createElement("img");
    importantTask.classList.add("important-task");
    importantTask.dataset.idTask = task.idTask
    importantTask.setAttribute("src", "./img/starYellow.png");
    taskControl.appendChild(importantTask);

    const dateTask = document.createElement("p");
    dateTask.classList.add("date-task");
    dateTask.textContent = task.date;
    taskControl.appendChild(dateTask);

    divTask.appendChild(taskControl);
    taskContent.appendChild(divTask);

    checkTask.addEventListener("change", (e) => {  
      const tasksContent = document.querySelectorAll(".task-item");
      let nodeEdit;
      tasksContent.forEach((el) => {
        if (el.dataset.idTask == e.target.dataset.idTask) {
          nodeEdit = el;
        }
      });

      const filterCheckboxTask = tasks.filter(
        (obj) => obj.idTask == nodeEdit.dataset.idTask
      );

     
      let isChecked = filterCheckboxTask[0].isChecked;

      if (!isChecked) {
        const index = tasks.findIndex(
          (task) => task.idTask === nodeEdit.dataset.idTask
        );
        if (index !== -1) {
          tasks[index].isChecked = true;
        }
        nodeEdit.children[1].children[0].style.textDecoration ='line-through'
        nodeEdit.children[1].children[1].style.textDecoration ='line-through'
      } else {
        isChecked = true;
        const index = tasks.findIndex(
          (task) => task.idTask === nodeEdit.dataset.idTask
        );
        if (index !== -1) {
          tasks[index].isChecked = false;
        }
        nodeEdit.children[1].children[0].style.textDecoration ='none'
        nodeEdit.children[1].children[1].style.textDecoration ='none'
      }
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
       
      } else {
      nodeEdit.remove();
        const index = tasks.findIndex(
          (task) => task.idTask === nodeEdit.dataset.idTask
        );
        if (index !== -1) {
          tasks[index].isImportant = false;
        }
      }



    });
  });


};
export default importantTasks;
