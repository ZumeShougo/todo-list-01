function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // 入力が空でなければ処理を進める
    if (taskInput.value.trim() !== "") {
        // 新しいタスク項目を作成
        const newTask = document.createElement("li");

        // タスク内容のテキストノード
        const taskText = document.createTextNode(taskInput.value);
        newTask.appendChild(taskText);

        // チェックボックスを追加して完了機能を実装
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.onclick = function() {
            taskList.removeChild(newTask);
            alert("やったな！！！！！")
        };
        newTask.prepend(checkBox);

        // タスクをリストに追加
        taskList.appendChild(newTask);

        // 入力欄をクリア
        taskInput.value = "";
    } else {
        alert("タスク入れろや");
    }
}