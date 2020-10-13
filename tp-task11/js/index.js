// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);
taskManager.load();
taskManager.render();

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
    const formValidateDueDate = document.querySelector('#newTaskDueDate');
   
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
//    //Date
newTaskDueDate.addEventListener('mouseout', (event) => {
    event.preventDefault();

    if (today <= Date.parse(formValidateDueDate.value)) {
        formValidateDueDate.classList.add('is-valid');
       formValidateDueDate.classList.remove('is-invalid');
    } else {
       formValidateDueDate.classList.add('is-invalid');
       formValidateDueDate.classList.remove('is-valid');
    }
});


    // Get the values of the inputs
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;


    // Add the task to the task manager
    taskManager.addTask(name, description, assignedTo, dueDate);

    taskManager.save();
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
          // Save the tasks to localStorage
       taskManager.save();
       // Render the tasks
       taskManager.render();
       
   }
        if(event.target.classList.contains('dbutton')){
            const parentTask = event.target.parentElement.parentElement;
             // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);
        taskManager.deleteTask(taskId);
        taskManager.save()
        taskManager.render();
        }
      

});



//ref from https://www.ricocheting.com/code/javascript/html-generator/date-time-clock and edited to suit this project

let tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
  let d=new Date();
  let nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
  let nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

let clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
document.getElementById('clockbox').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);



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