
document.addEventListener('DOMContentLoaded', function () {
    // Add task button and store it in a constant named addButton
    const addButton = document.getElementById('add-task-btn');

    // Input field where users enter tasks and unordered list that display the tasks
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Event listener for addButton click event
    addButton.addEventListener('click', addTask);

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
        removeButton.className = 'remove-btn';

        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});
