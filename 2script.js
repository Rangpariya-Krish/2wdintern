document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Add task
  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // Toggle complete
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent toggle
      taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  });
});