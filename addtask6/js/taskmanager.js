class TaskManager{
    constructor(currentId=0){
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(name,description,assignedto,duedate){
        const task = {
            id:     this.currentId++,
            name:   name,
            description: description,
            assignedto: assignedto,
            duedate: duedate,
            status: 'ToDo'

        }
        this.tasks.push(task);
    }
    
}

