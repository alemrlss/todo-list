import allTasks from './allTasks';
import renderTasks from './renderTasks'
import uniqid from 'uniqid'
import { tasks } from './rigthPanel';
import importantTasks from './importantTasks';

export let projects = [];

var count = 0;
const leftPanel = () => {


  const content = document.querySelector("#content");

  const leftPanel = document.createElement("div");
  leftPanel.classList.add("leftPanel");

  const panelTitle = document.createElement("h3");
  panelTitle.textContent = "Home";
  leftPanel.appendChild(panelTitle);

  const divAllTask = document.createElement("div");
  const allTaskTitle = document.createElement("p");
  allTaskTitle.textContent = "All Tasks";
  divAllTask.appendChild(allTaskTitle);
  leftPanel.appendChild(divAllTask);

  divAllTask.addEventListener('click',e=>{
    allTasks(tasks)
  })

  const divImportant = document.createElement("div");
  const importantTitle = document.createElement("p");
  importantTitle.textContent = "Important";
  divImportant.appendChild(importantTitle);
  leftPanel.appendChild(divImportant);

divImportant.addEventListener('click',e=>{
  importantTasks(tasks)
})
 

  const panelTitle2 = document.createElement("h3");
  panelTitle2.textContent = "Projects";
  leftPanel.appendChild(panelTitle2);

  const divDinamycProjects = document.createElement("div");
  divDinamycProjects.classList.add("dynamic-projects");

  const formProject = document.createElement("form");
  formProject.classList.add("form-project");
  formProject.classList.add("hidden");

  const divIconForm = document.createElement("div");
  divIconForm.classList.add("icon-form");

  const iconForm = document.createElement("img");
  iconForm.classList.add("icon-form");
  iconForm.setAttribute("src", "./img/form.png");

  divIconForm.appendChild(iconForm);
  formProject.appendChild(divIconForm);

  const inputTextForm = document.createElement("input");
  inputTextForm.type = "text";
  inputTextForm.setAttribute("maxlength", "18");
  inputTextForm.classList.add("input-projects");
  inputTextForm.setAttribute("placeholder", "Project Name");

  const inputSubmitForm = document.createElement("input");
  inputSubmitForm.classList.add("submit-form");
  inputSubmitForm.value = "Add";
  inputSubmitForm.type = "submit";

  const inputCancelForm = document.createElement("input");
  inputCancelForm.classList.add("cancel-form");
  inputCancelForm.value = "Cancel";
  inputCancelForm.type = "submit";

  const divInputForm = document.createElement("div");
  divInputForm.classList.add("input-form");

  const divInputFormButtons = document.createElement("div");
  divInputFormButtons.classList.add("input-form-btns");

  divInputFormButtons.appendChild(inputSubmitForm);
  divInputFormButtons.appendChild(inputCancelForm);

  divInputForm.appendChild(inputTextForm);
  divInputForm.appendChild(divInputFormButtons);

  formProject.appendChild(divInputForm);

  formProject.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.matches(".cancel-form")) {
      formProject.classList.add("hidden");
      formProject.reset();
    }
    if (e.target.matches(".submit-form")) {

     
      let idProject
      idProject = uniqid()
      const newProject = document.createElement("div");
      const inputTextValue = document.querySelector(".input-projects").value;
      newProject.classList.add("item-project");
      newProject.dataset.idCount = count;
      newProject.dataset.id = idProject;
      count++;

      const newProjectObj = {
        id: idProject,
        title: inputTextValue,
        tasks:[]
      };

      if (inputTextValue === "") return;
      projects.push(newProjectObj);
      const newProjectIcon = document.createElement("img");
      newProjectIcon.classList.add("new-project-icon");
      newProjectIcon.dataset.id = newProjectObj.id;
      newProjectIcon.setAttribute("src", "./img/project.png");
      newProject.appendChild(newProjectIcon);

      const newProjectTitle = document.createElement("p");
      newProjectTitle.classList.add("new-project-title");
      newProjectTitle.dataset.id = newProjectObj.id;
      newProjectTitle.textContent = newProjectObj.title;
      newProject.appendChild(newProjectTitle);

      const newProjectEdit = document.createElement("img");
      newProjectEdit.classList.add("new-project-edit");
      newProjectEdit.dataset.id = newProjectObj.id;
      newProjectEdit.setAttribute("src", "./img/edit.png");

      const newProjectDelete = document.createElement("img");
      newProjectDelete.classList.add("new-project-delete");
      newProjectDelete.dataset.id = newProjectObj.id;
      newProjectDelete.setAttribute("src", "./img/delete.png");

      const divOptions = document.createElement("div");
      divOptions.classList.add("div-options");
      divOptions.appendChild(newProjectEdit);
      divOptions.appendChild(newProjectDelete);
      newProject.appendChild(divOptions);
  
      newProjectEdit.addEventListener("click", (e) => {  
        const projectsNodes = document.querySelectorAll(".item-project");
        let nodeEdit;
        projectsNodes.forEach((el) => {
          if (el.dataset.id == e.target.dataset.id) {
            nodeEdit = el;
          }
        });

        const formProjects = document.createElement("form");
        formProjects.classList.add("form-projects-edit");
        const inputTextEdit = document.createElement("input");
        inputTextEdit.value = nodeEdit.children[1].textContent;
        inputTextEdit.setAttribute("maxlength", "18");
        inputTextEdit.type = "text";
        inputTextEdit.placeholder = "type a new name here...";
        inputTextEdit.classList.add("input-text-edit");

        const inputSubmitEdit = document.createElement("input");
        inputSubmitEdit.type = "submit";
        inputSubmitEdit.value = "Edit";
        inputSubmitEdit.classList.add("input-submit-edit");
        formProjects.appendChild(inputTextEdit);
        formProjects.appendChild(inputSubmitEdit);
        nodeEdit.replaceWith(formProjects);


        formProjects.addEventListener("submit", (e) => {
          e.preventDefault();
          const inputTextEditValue =
            document.querySelector(".input-text-edit").value;
          const mainTitleText = document.querySelector('.mainTitleText')
          mainTitleText.textContent = inputTextEditValue
          nodeEdit.children[1].textContent = inputTextEditValue;
          const objFind = projects.find((obj) => obj.id == nodeEdit.dataset.id);
          objFind.title = inputTextEditValue;
          formProjects.replaceWith(nodeEdit);
        });
      });


      newProjectDelete.addEventListener("click", (e) => {
        
        const projectsNodes = document.querySelectorAll(".item-project");
        let nodeEdit;
        const mainTitle = document.querySelector('.mainTitle')
        const mainTitleValue = mainTitle.children[0].textContent

        projectsNodes.forEach((el) => {
          if (el.dataset.id == e.target.dataset.id) {
            nodeEdit = el;
          }
        });

        const filterDeleteTasks = tasks.filter((task)=> task.idProject == nodeEdit.dataset.id)

          function obtenerObjetosConIDsdiferentes(arr1, arr2) {
            const result = [];
            for (let i = 0; i < arr1.length; i++) {
              let existeCoincidencia = false;
              for (let j = 0; j < arr2.length; j++) {
                if (arr1[i].idProject === arr2[j].idProject) {
                  existeCoincidencia = true;
                  break;
                }
              }
              if (!existeCoincidencia) {
                result.push(arr1[i]);
              }
            }
          
            return result;
          } 
        
         let newAllTasks = obtenerObjetosConIDsdiferentes(tasks,filterDeleteTasks)
        tasks = newAllTasks


        nodeEdit.remove();
        const filter = projects.filter((obj) => obj.id != nodeEdit.dataset.id);
        projects = filter;


          allTasks(newAllTasks)
        if(nodeEdit.children[1].textContent == mainTitleValue) { 
          allTasks(newAllTasks)
        }


      
      });












      divDinamycProjects.appendChild(newProject);
      formProject.classList.add("hidden");
      formProject.reset();
    }
  });




  divDinamycProjects.appendChild(formProject);
  leftPanel.appendChild(divDinamycProjects);

  const addProject = document.createElement("div");
  addProject.classList.add("add-project");

  const addProjectIcon = document.createElement("img");
  addProjectIcon.classList.add("addProjectIcon");
  addProjectIcon.setAttribute("src", "./img/add.png");
  addProject.appendChild(addProjectIcon);

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("addProjectBtn");
  addProjectBtn.textContent = "Add Projects";
  addProject.appendChild(addProjectBtn);

  divDinamycProjects.appendChild(addProject);

  addProject.addEventListener("click", () => {
    const form = document.querySelector(".form-project");
    form.classList.remove("hidden");
  });

  content.appendChild(leftPanel);
};

export default leftPanel;
