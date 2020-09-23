// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

// Select the New Task Form
const newTaskForm = document.querySelector('#form-button');
// show todays date 
const dateElement = document.getElementById("date");
const options = {weekday : "long", month : "short", day : "numeric"};
var today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


// Add an 'onsubmit' event listener
newTaskForm.addEventListener('click', (event) => {
    
    // Prevent default action
    event.preventDefault();


    // Select the inputs
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');


    // Validation code here
    const formValidateFirstName = document.querySelector('#newTaskNameInput');
    const formValidateDescription = document.querySelector('#newTaskDescription');
    const formValidateAssignedto = document.querySelector('#newTaskAssignedTo');
    
   
    //Name
    newTaskNameInput.addEventListener('mouseout', (event) => {
        event.preventDefault();
       if (formValidateFirstName.value.length > 7) {
           
            formValidateFirstName.classList.add('is-valid');
            formValidateFirstName.classList.remove('is-invalid');
        } else {
          
            formValidateFirstName.classList.add('is-invalid');
            formValidateFirstName.classList.remove('is-valid');
        }
    });
   

   //Description
    newTaskDescription.addEventListener('mouseout', (event) => {
        event.preventDefault();
   
        if (formValidateDescription.value.length > 15) {
           formValidateDescription.classList.add('is-valid');
           formValidateDescription.classList.remove('is-invalid');
        } else {
           formValidateDescription.classList.add('is-invalid');
           formValidateDescription.classList.remove('is-valid');
        }
    });
   

    //AssignedTo
    newTaskAssignedTo.addEventListener('mouseout', (event) => {
        event.preventDefault();
   
        if (formValidateAssignedto.value.length > 7) {
           formValidateAssignedto.classList.add('is-valid');
           formValidateAssignedto.classList.remove('is-invalid');
        } else {
           formValidateAssignedto.classList.add('is-invalid');
           formValidateAssignedto.classList.remove('is-valid');
        }
    });


    // Get the values of the inputs
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;


    // Add the task to the task manager
    taskManager.addTask(name, description, assignedTo, dueDate);

    
    // Render the tasks
    taskManager.render();


    // Clear the form
    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';
   
});

const tasksList = document.querySelector('#tasksList');
tasksList.addEventListener('click', (event) => { 
    if (event.target.classList.contains('done-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement;

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        // Get the task from the TaskManager using the taskId
        const task = taskManager.getTaskById(taskId);

        // Update the task status to 'DONE'
        task.status = 'DONE';

        // Render the tasks
        taskManager.render();
    }

});

// const deleteListItem = taskManager.classList.add('#tasksList');
// const dButton = document.querySelector('.dButton');
// dButton.addEventListener('click', (event) => { 
//     debugger;
//     newTaskForm.parentNode.removeChild(newTaskForm.parentNode);
//     this.tasks[]
    
    


// });

// function removeToDo(element){
//     element.parentNode.parentNode.removeChild(element.parentNode);

//     LIST[element.id].trash = true;
// }