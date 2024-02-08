const input = document.querySelector('input');
const addTaskButton = document.querySelector('.add-task-button');
const taskContainer = document.querySelector('.task-container');
const taskDoneContainer = document.querySelector('.task-done');
let taskArray = [];


function fillCheckMark()
{
    let checkMarkElement = drawCheckMark();
    checkMarkElement.addEventListener("click",()=>
    {
        checkMarkElement.classList.toggle("checked");
    })
}

class Task
{
    constructor(name)
    {
        this.name = name;
        this.isDone = false;
        this.element = document.createElement("div");
        this.checkSpan = document.createElement("span");
        this.deleteSpan = document.createElement("span");
        taskArray.push(this);
        this.draw();
        this.listenCheck();
        this.listenDelete();
    }

    draw()
    {
        taskContainer.append(this.element, this.checkSpan);
        taskContainer.append(this.element, this.deleteSpan);
        this.element.classList.add("task-div");
        this.element.innerText = this.name;
        this.element.append(this.checkSpan);
        this.element.append(this.deleteSpan);
        this.checkSpan.classList.add("check-mark");
        this.deleteSpan.classList.add("delete-mark");
    }

    check()
    {
        let taskToCheck = taskArray.indexOf(this);
        this.isDone = true;
        this.checkSpan.classList.toggle('checked');
        taskDoneContainer.append(this.element);
        console.log(this);
        this.deserialize(this);
    }

    uncheck()
    {
        this.isDone = false;
        this.checkSpan.classList.toggle('checked');
        taskContainer.append(this.element);
        console.log(this);
    }

    delete()
    {
        let indexToDelete = taskArray.indexOf(this);
        this.element.remove();
        if (indexToDelete !== -1)
        {
            taskArray.splice(indexToDelete, 1);
            console.log("updated array :", taskArray);
        }
        else
        console.log("error, element could not be deleted");
    }

    listenCheck()
    {
        this.checkSpan.addEventListener("click",()=>
        {
            if (!this.isDone)
            {
                this.check();
            }
            else if (this.isDone)
            {
                this.uncheck();
            }
        })
    }
    
    listenDelete()
    {
        this.deleteSpan.addEventListener('click',()=>
        {
            this.delete();
            
        })
    }

    serialize()
    {
        let serializeTask = 
        {
            name : this.name,
            isDone : this.isDone
        }
        return serializeTask;
    }
    deserialize(data)
    {
        this.name = data.name;
        this.isDone = data.isDone;
        if (data.isDone)
        {
            this.checkSpan.classList.add("checked");
            this.isDone = true;
        }
    }
}
function storeTasks()
{   
    let tasks = [];
    for (let task of taskArray)
    {
        tasks.push(task.serialize());
    }
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

function readTask()
{
    let tasks = [];
    for (let task of taskArray)
    {
        let data = localStorage.getItem("tasks", )
    }
    deserialize()
}

addTaskButton.addEventListener("click",()=>
{
    let task = new Task(input.value);
    input.value = "";
    storeTasks();
})

window.addEventListener('load',()=>
{
    readTask();
})