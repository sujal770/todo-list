function addTask() {
  var input = document.getElementById("taskInput");
  var newTask = input.value;
  if (newTask !== "") {
    var li = document.createElement("li");
    li.textContent = newTask;
    li.onclick = function () {
      this.classList.toggle("completed");
    };
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function clearTasks() {
  var list = document.getElementById("taskList");
  list.innerHTML = "";
}
