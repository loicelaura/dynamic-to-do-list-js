
document.addEventListener('DOMContentLoaded', function () {

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    function addTask(taskText, save = true) {

    // Add task button and store it in a constant named addButton
    const addButton = document.getElementById('add-task-btn');

    // Input field where users enter tasks and unordered list that display the tasks
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Event listener for addButton click event
    addButton.addEventListener('click', addTask);
}

    // Event listener for taskInput 'keypress' event to allow adding task with "Enter"
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add = 'remove-btn';

        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
        if(taskInput){
            taskInput.value = "";
        }
      
    }
    function removeTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});
