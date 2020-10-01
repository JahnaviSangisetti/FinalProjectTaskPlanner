const myStorage = window.localStorage;
//create a new function, createTaskHtml
const createTaskHtml = (id,name, description, assignedTo, dueDate, status) => `
    <li class="list-group-item" data-task-id="${id}" style="background-color:lemonchiffon;">
    
    <div class="d-flex w-100 justify-content-end">
    <button class="dbutton btn-danger btn-sm" type="submit">X</button>
    </div>
    <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <h5>${name}</h5>
        
        <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
    </div>
    <div class="d-flex w-100 mb-3 justify-content-between">
        <small>Assigned To: ${assignedTo}</small>
        <small>Due: ${dueDate}</small>
    </div>
    <p style="overflow-wrap: break-word; word-wrap: break-word;  white-space: normal;">${description}</p>
    <div class="d-flex w-100 justify-content-end">
    <button class="btn btn-outline-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
</div>
    </li>
`;


// Create a TaskManager class
class TaskManager {
    // Set up the tasks and currentId property in the contructor
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    getTaskById(taskId){
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Check if its the right task by comparing the task's id to the id passed as a parameter
            if (task.id === taskId) {
                // Store the task in the foundTask variable
                foundTask = task;
            }
        }
        return foundTask;
    }

    // Create the addTask method
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };

        // Push the task to the tasks property
        this.tasks.push(task);

        
    }
    deleteTask(taskId){
        const newTasks =[];
        for(let i=0;i< this.tasks.length;i++ ){
            const task = this.tasks[i];
            if(task.id !== taskId){
                newTasks.push(task);
                
             }
        }
        this.tasks = newTasks;
    }
    // Create the render method
    render() {
        // Create an array to store the tasks' HTML
        const tasksHtmlList = [];

        // Loop over our tasks and create the html, storing it in the array
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Format the date
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Create the task html
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

            // Push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);

           

        }

        // Create the tasksHtml by joining each item in the tasksHtmlList
        // with a new line in between each item.
        const tasksHtml = tasksHtmlList.join('\n');

        // Set the inner html of the tasksList on the page
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }
    save(){
// const tasksJSON = JSON.stringify(this.tasks);
       myStorage.setItem('tasks', JSON.stringify(this.tasks));
// const currentId = String(this.currentId);
      myStorage.setItem('currentId', String(this.currentId));
    }
    load(){
        if(myStorage.getItem('tasks')){
            const tasksJson =  myStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
        }
        if(myStorage.getItem('currenId')){
            const currentId = myStorage.getItem(currentId);
            this.currentId = Number(currentId);
        }
       
       

    }
   
}