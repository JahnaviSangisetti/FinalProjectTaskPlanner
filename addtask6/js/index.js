const taskManager = new TaskManager(0);
const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit',(event)=>{
event.preventDefault();

    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');

   
    const formValidateFirstName = document.querySelector('#newTaskNameInput');
     const formValidateDescription = document.querySelector('#newTaskDescription');
     const formValidateAssignedto = document.querySelector('#newTaskAssignedTo');
        //Name
        newTaskNameInput.addEventListener('click', (event) => {
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
    
    newTaskDescription.addEventListener('click', (event) => {
        event.preventDefault();
    
        if (formValidateDescription.value.length > 15) {
            formValidateDescription.classList.add('is-valid');
            formValidateDescription.classList.remove('is-invalid');
        } else {
            formValidateDescription.classList.add('is-invalid');
            formValidateDescription.classList.remove('is-valid');
        }
    });
    
    newTaskAssignedTo.addEventListener('click', (event) => {
        event.preventDefault();
    
        if (formValidateAssignedto.value.length > 7) {
            formValidateAssignedto.classList.add('is-valid');
            formValidateAssignedto.classList.remove('is-invalid');
        } else {
            formValidateAssignedto.classList.add('is-invalid');
            formValidateAssignedto.classList.remove('is-valid');
        }
    });
  
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedto = newTaskAssignedTo.value;
    const duedate = newTaskDueDate.value;

taskManager.addTask(name,description,assignedto,duedate);
newTaskNameInput.value = '';
newTaskDescription.value = '';
newTaskAssignedTo.value = '';
newTaskDueDate.value = '';
}); 