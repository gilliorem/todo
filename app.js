const input = document.querySelector('input');
const addTaskButton = document.querySelector('.add-task-button');
const taskContainer = document.querySelector('.task-container');
const taskDoneContainer = document.querySelector('.task-done');

class Task
{
    constructor(name, isDone = false)
    {
        this.name = name;
        this.isDone = isDone;
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
        this.tasks.forEach((task, index) => {
            let taskElement = document.createElement('div');
            taskContainer.append(taskElement);
            taskElement.innerText = task.name;

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.isDone;
            checkbox.addEventListener('change',()=>
            {
                this.tasks[index].isDone = checkbox.checked;
                this.updateLocalStorage();
            });

            let deleteCross = document.createElement('div');
            deleteCross.classList.add('delete-mark');
            deleteCross.addEventListener('click',()=>
            {
                this.tasks.splice(index, 1);
                taskElement.remove();
                this.updateLocalStorage();
            })

            taskContainer.appendChild(taskElement);
            taskElement.appendChild(checkbox);
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

        let deleteCross = document.createElement('div');
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