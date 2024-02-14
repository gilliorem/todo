import { Tracker, startTimerButton } from "./Timer.js";

const input = document.querySelector('input');
const addTaskButton = document.querySelector('.add-task-button');
const taskContainer = document.querySelector('.task-container');



class Task
{
    constructor(name, isDone = false, isTracked)
    {
        this.name = name;
        this.isDone = isDone;
        this.isTracked = 0;
    }
}

class TodoList 
{
    constructor()
    {
        this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    }

    updateLocalStorage()
    {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    renderTasks()
    {
        this.tasks.forEach((task, index) => 
        {
            let taskElement = document.createElement('div');
            taskElement.classList.add('task-div');
            taskContainer.append(taskElement);
            let taskTitle = document.createElement('p');
            taskTitle.innerText = task.name
            taskElement.append(taskTitle);

            let checkbox = document.createElement('input');
            checkbox.classList.add("checkbox");
            checkbox.type = 'checkbox';
            checkbox.checked = task.isDone;

            checkbox.addEventListener('change',()=>
            {
                this.tasks[index].isDone = checkbox.checked;
                taskTitle.classList.toggle("crossed");
                this.updateLocalStorage();
            });

            let startTimerButton = document.createElement("button");
            startTimerButton.classList.add("start-timer-button");
            let spanTimer = document.createElement("span");
            spanTimer.classList.add("start-timer-span");
            spanTimer.innerText = "v";

            startTimerButton.addEventListener("click",()=>
            {
                let tracker = new Tracker(taskElement);
                this.tasks[index].isTracked = tracker;
                this.updateLocalStorage();
            })

           
            
            let deleteCross = document.createElement('button');
            deleteCross.classList.add('delete-mark');
            deleteCross.innerText='+';
            deleteCross.addEventListener('click',()=>
            {
                this.tasks.splice(index, 1);
                taskElement.remove();
                this.updateLocalStorage();
            })
            
            taskContainer.appendChild(taskElement);
            taskElement.appendChild(checkbox);
            taskElement.append(startTimerButton);
            startTimerButton.append(spanTimer);
            taskElement.appendChild(deleteCross);
        });
    }
    renderTask(name, isDone)
    {
        let taskElement = document.createElement('div');
        taskContainer.append(taskElement);
        taskElement.innerText = name;

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = isDone;
        checkbox.addEventListener('change',()=>
        {
            this.tasks.isDone = checkbox.checked;
            this.updateLocalStorage();
        });

        let startTimerButton = document.createElement("button");
        startTimerButton.classList.add("start-timer-button");
        let spanTimer = document.createElement("span");
        spanTimer.classList.add("start-timer-span");

        startTimerButton.addEventListener("click",()=>
            {
                let tracker = new Tracker(taskElement);
                this.tasks[index].isTracked = tracker;
                this.updateLocalStorage();
            })

        let deleteCross = document.createElement('button');
        deleteCross.classList.add('delete-mark');
        deleteCross.addEventListener('click',()=>
        {
            let indexToDelete = this.tasks.indexOf(this);
            this.tasks.splice(indexToDelete, 1);
            taskElement.remove();
            this.updateLocalStorage();
        });

        taskElement.appendChild(checkbox);
        taskContainer.appendChild(taskElement);
        taskElement.append(startTimerButton);
        startTimerButton.append(spanTimer);
        taskElement.appendChild(deleteCross);
    }
    
    addTask(name)
    {
        this.tasks.push(new Task(name));
        this.updateLocalStorage();
        this.renderTask(name)
    }
}

const todoList = new TodoList();
window.onload = () =>
{
    todoList.renderTasks();
}

addTaskButton.addEventListener('click',()=>
{
    todoList.addTask(input.value);
});
