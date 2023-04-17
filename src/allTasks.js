const allTasks=(tasks)=>{

    const titleMain = document.querySelector('.mainTitle')
    const taskContent = document.querySelector('.tasks-content')
    const taskControl = document.querySelector('.control-content')

   
    
        titleMain.children[0].textContent ='All Tasks'

        if( taskControl.children[1]){ 
            taskControl.children[1].remove()
          }
    
            while (taskContent.firstChild) {
              taskContent.removeChild(taskContent.firstChild);
            }
    
    
            tasks.forEach(task=>{
              
                const newTask = {
                    title: task.title,
                    details: task.inputDetailsValue,
                    date: task.date,
                    isImportant: task.isImportant
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
                  task.isImportant?importantTask.setAttribute('src','./img/starYellow.png'):importantTask.setAttribute('src','./img/star.png')
                  taskControl.appendChild(importantTask)
              
                  const editTask = document.createElement('img')
                  editTask.classList.add('delete-task')
                  editTask.setAttribute('src','./img/edit.png')
                  taskControl.appendChild(editTask)
                  
                


                  divTask.appendChild(taskControl);
                  taskContent.appendChild(divTask);
            
                    })
        
    
          

    


   

    }
    
    export default allTasks
