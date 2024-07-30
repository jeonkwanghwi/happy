function registerTask(user) {
    let inputId = user + '-input';
    let taskId = user + '-task';
    let inputValue = document.getElementById(inputId).value;
    if (inputValue.trim() !== "") {
        document.getElementById(taskId).innerText = inputValue;
        document.getElementById(inputId).value = "";
    }
}
