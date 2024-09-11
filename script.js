
document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    addTaskButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const newTask = document.createElement('li');
            newTask.textContent = taskText;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Added';
            completeButton.addEventListener('click', function() {
                newTask.classList.toggle('completed');
            });

            newTask.appendChild(completeButton);
            taskList.appendChild(newTask);

            newTaskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    });
});
