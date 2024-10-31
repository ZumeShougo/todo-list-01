function addTask() {
    // inputタグの内容を変数に格納
    const taskInput = document.getElementById("taskInput");
    // ul要素を格納
    const taskList = document.getElementById("taskList");

    // 入力が空でなければ処理を進める
    if (taskInput.value.trim() !== "") {
        // 新しいHTML要素を作成(liを作成)
        const newTask = document.createElement("li");

        // タスク内容のテキストノード
        const taskText = document.createTextNode(taskInput.value);
        // インプットの内容を新しく生成したliの中に入れる
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