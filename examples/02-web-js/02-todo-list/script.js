let newTaskName, newTaskButton, taskWrapper;
let curId = 0;

const completeTask = function (ev, id) {
    let parent = document.getElementById(id.toString())
    let title = parent.getElementsByClassName("task-title")[0]
    let checkbox = parent.getElementsByClassName("task-complete")[0]
    
    if (ev.target != checkbox) {
        checkbox.click()
    }

    if (checkbox.checked) title.classList.add("strike")
    else title.classList.remove("strike")
}

const deleteTask = function (id) {
    let parent = document.getElementById(id.toString())
    parent.remove()
}

const createNewTask = function (ev) {
    let myId = curId
    let taskBox = document.createElement("div");
    taskBox.classList.add("flex-row", "task-box")
    taskBox.id = curId.toString()
    let checkboxHolder = document.createElement("span")
    checkboxHolder.classList.add("button-spacing")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("task-complete")
    checkbox.addEventListener("click", (ev) => completeTask(ev, myId))
    checkboxHolder.appendChild(checkbox)
    let title = document.createElement("span")
    title.classList.add("task-title")
    title.innerText = newTaskName.value
    title.addEventListener("click", (ev) => completeTask(ev, myId))
    let spacer = document.createElement("span")
    spacer.classList.add("spacer")
    // let editButton = document.createElement("span")
    // editButton.innerText = "[Edit]"
    // editButton.classList.add("edit", "button-spacing")
    // add delete button
    let deleteButton = document.createElement("span")
    deleteButton.classList.add("delete", "button-spacing")
    deleteButton.innerText = "[Delete]"
    deleteButton.addEventListener("click", (ev) => deleteTask(myId))
    for( const el of [checkboxHolder, title, spacer, deleteButton] ) {
        taskBox.appendChild(el)
    }
    taskWrapper.appendChild(taskBox)
    newTaskName.value = ""
    curId += 1;
}

window.onload = () => {
    newTaskName = document.getElementById("newTaskName")
    newTaskButton = document.getElementById("newTaskButton")
    taskWrapper = document.getElementById("task-wrapper")
    newTaskButton.addEventListener("click", createNewTask)
    newTaskName.addEventListener("keypress", (ev) => {
        if ((ev.key) == "Enter") createNewTask(ev);
    })
}