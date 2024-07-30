document.addEventListener('DOMContentLoaded', (event) => {
    // Load tasks from localStorage
    loadTask('yeba');
    loadTask('panghui');
});

function registerTask(user) {
    let inputId = user + '-input';
    let taskId = user + '-task';
    let inputValue = document.getElementById(inputId).value;
    if (inputValue.trim() !== "") {
        document.getElementById(taskId).innerText = inputValue;
        localStorage.setItem(taskId, inputValue);
        document.getElementById(inputId).value = "";
    }
}

function loadTask(user) {
    let taskId = user + '-task';
    let savedTask = localStorage.getItem(taskId);
    if (savedTask) {
        document.getElementById(taskId).innerText = savedTask;
    }
}
