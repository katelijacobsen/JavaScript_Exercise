document.addEventListener('DOMContentLoaded', function() {


    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


    tasks.forEach(task => {
    addTaskToDOM(task);
    });


    document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') return;
    addTaskToDOM(taskText);
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    });
    
    function addTaskToDOM(taskText) {

    const li = document.createElement('li');
    li.textContent = taskText;
    const removeButton = document.createElement('button');

    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');


    removeButton.addEventListener('click', function() {
    li.remove();

    const index = tasks.indexOf(taskText);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    
    li.appendChild(removeButton);
    taskList.appendChild(li);
    }
    });