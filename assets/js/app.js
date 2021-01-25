const taskInput = document.querySelector('#task'); //the task input text field

const form = document.querySelector('#task-form'); //The form at the top

const filter = document.querySelector('#filter'); //the task filter text field

const taskList = document.querySelector('.collection'); //The ul

const clearBtn = document.querySelector('.clear-tasks')

form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);

form.addEventListener('submit', addNewTask);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('keyup', filterTasks);

function addNewTask(e) {
    alert("add new Task...");
    e.preventDefault();
}

function clearAllTasks() {
    alert("clear tasks ")
}

function filterTasks() {
    console.log("Typing...")
}