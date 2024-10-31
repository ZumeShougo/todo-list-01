function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement("li");

        const taskText =document.createTextNode(taskInput.value);
        newTask.appendChild(taskText);

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.onclick = function() {
            taskList.removeChild(newTask);
        };
        newTask.prepend(checkBox);

        teskInput.value = "";
    } else {
        alert("タスクを入れろや")
    }
}