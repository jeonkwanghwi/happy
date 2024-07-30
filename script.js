document.addEventListener('DOMContentLoaded', (event) => {
    // 페이지 로드 시 저장된 작업을 불러옵니다.
    loadTask('yeba');
    loadTask('panghui');

    // 엔터 키 입력 이벤트를 추가합니다.
    document.getElementById('yeba-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // 기본 동작을 방지합니다.
            registerTask('yeba');
        }
    });

    document.getElementById('panghui-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // 기본 동작을 방지합니다.
            registerTask('panghui');
        }
    });
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
