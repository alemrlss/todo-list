import { projects } from "./leftPanel";
import renderTasks from "./renderTasks";
import uniqid from 'uniqid'

export let tasks = [];
const rigthPanel = () => {


  const content = document.querySelector("#content");
  const rigthPanel = document.createElement("div");
  rigthPanel.classList.add("rigthPanel");

  const mainTitle = document.createElement("div");
  mainTitle.classList.add("mainTitle");
  rigthPanel.appendChild(mainTitle);

  const mainTitleText = document.createElement("h2");
  mainTitleText.classList.add("mainTitleText");
  mainTitleText.textContent = "All Tasks";
  mainTitle.appendChild(mainTitleText);

  const controlContent = document.createElement("div");
  controlContent.classList.add("control-content");

  rigthPanel.appendChild(controlContent);

  const contentTasks = document.createElement("div");
  contentTasks.classList.add("tasks-content");
  rigthPanel.appendChild(contentTasks);

  content.addEventListener("click", (e) => {
    if (
      e.target.matches(".new-project-title") ||
      e.target.matches(".new-project-icon")
    ) {

      const mainTitle = document.querySelector(".mainTitle");
      const projectsNodes = document.querySelectorAll(".item-project");
      const controlContent = document.querySelector(".control-content");
      let nodeEdit;

     
      projectsNodes.forEach((el) => {
        if (el.dataset.id == e.target.dataset.id) {
          nodeEdit = el;
        }
      });
      renderTasks(tasks,nodeEdit)
      if (mainTitle.children[0].textContent == nodeEdit.children[1].textContent)
        return;

      mainTitle.children[0].textContent = nodeEdit.children[1].textContent;

      const divNewTask = document.createElement("div");
      divNewTask.classList.add("new-task");

      const iconNewTask = document.createElement("img");
      iconNewTask.setAttribute("src", "./img/add.png");
      iconNewTask.classList.add("iconNewTask");
      divNewTask.appendChild(iconNewTask);

      const textNewTask = document.createElement("p");
      textNewTask.classList.add("textNewTask");
      textNewTask.textContent = "Add Task..";
      divNewTask.appendChild(textNewTask);

      controlContent.innerHTML = ``;
      controlContent.appendChild(divNewTask);

      divNewTask.addEventListener("click", (e) => {
        
        if (document.querySelector(".form-new-task") != e.target.children[1])
          return;

        const formNewTask = document.createElement("form");
        formNewTask.classList.add("form-new-task");

        const labelTextTitleTask = document.createElement("label");
        labelTextTitleTask.textContent = "Title:";
        formNewTask.appendChild(labelTextTitleTask);

        const inputTextTitleTask = document.createElement("input");
        inputTextTitleTask.classList.add("title-input-task");
        inputTextTitleTask.type = "text";
        formNewTask.appendChild(inputTextTitleTask);

        const labelTextDetailsTask = document.createElement("label");
        labelTextDetailsTask.textContent = "Details:";
        formNewTask.appendChild(labelTextDetailsTask);

        const inputTextDetailsTask = document.createElement("input");
        inputTextDetailsTask.classList.add("details-input-task");
        inputTextDetailsTask.type = "text";
        formNewTask.appendChild(inputTextDetailsTask);

        const labelTextDateTask = document.createElement("label");
        labelTextDateTask.textContent = "Date:";
        formNewTask.appendChild(labelTextDateTask);

        const inputTextDateTask = document.createElement("input");
        inputTextDateTask.classList.add("date-input-task");
        inputTextDateTask.type = "date";
        formNewTask.appendChild(inputTextDateTask);

        const divButtons = document.createElement("div");
        divButtons.classList.add("btns-form-addTask");

        const addBtn = document.createElement("button");
        addBtn.classList.add("add-btn");
        addBtn.textContent = "Add";

        const cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";

        divButtons.appendChild(addBtn);
        divButtons.appendChild(cancelBtn);

        formNewTask.appendChild(divButtons);
        controlContent.appendChild(formNewTask);

        divButtons.addEventListener("click", (e) => {
          e.preventDefault();
          const controlTask = document.querySelector(".control-content");

          if (e.target.matches(".cancel-btn")) {
            controlTask.children[1].remove();
          }

          if (e.target.matches(".add-btn")) {
            let idTask = uniqid()
            const taskControl = document.querySelector('.control-content')
            
      
            const inputTitleValue =
              document.querySelector(".title-input-task").value;
            const inputDetailsValue = document.querySelector(
              ".details-input-task"
            ).value;

            if(!inputTitleValue) return
            
            const newTask = { 
                title: inputTitleValue,
                inputDetailsValue: inputDetailsValue || 'not details',
                date: 'NO FUNCIONA',
                idProject: nodeEdit.dataset.id,
                idTask: idTask
            }

            tasks.push(newTask)
            renderTasks(tasks,nodeEdit)


            formNewTask.reset()
            taskControl.children[1].remove()
          }
        });
      });
    }



  });

  content.appendChild(rigthPanel);
};
export default rigthPanel;
