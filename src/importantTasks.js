
const importantTasks=(tasks)=>{


        const titleMain = document.querySelector('.mainTitle')
        const taskContent = document.querySelector('.tasks-content')
        const taskControl = document.querySelector('.control-content')
    
    
            titleMain.children[0].textContent ='Important Tasks'
            if(taskControl.childNodes.length == 2){  
                taskControl.children[0].textContent =''
                taskControl.children[1].remove()
            } else { 
                taskControl.children[0].textContent =''
            }
                while (taskContent.firstChild) {
                  taskContent.removeChild(taskContent.firstChild);
                }
        
                const filter = tasks.filter((task)=> task.isImportant == true)
                let tasksImportant = filter

                tasksImportant.forEach(task=>{
                    const newTask = {
                        title: task.title,
                        details: task.inputDetailsValue,
                        date: task.date,
                      };
                  
                      const divTask = document.createElement("div");
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
                     
                      const importantTask = document.createElement('img')
                      importantTask.classList.add('important-task')
                      importantTask.setAttribute('src','./img/starYellow.png')
                      taskControl.appendChild(importantTask)
                  
                 
    
                      divTask.appendChild(taskControl);
                      taskContent.appendChild(divTask);
                
                        })
            
        
              
    
        
    
    
       

    



}
export default importantTasks