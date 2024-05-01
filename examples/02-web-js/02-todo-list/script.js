let newTaskName, newTaskButton, taskWrapper;
let curId = 0;

const completeTask = function (ev, id) {
    let parent = document.getElementById(`task-${id}`)
    let title = parent.getElementsByClassName("task-title")[0]
    let checkbox = parent.getElementsByClassName("task-complete")[0]

    // this deals with clicks on the title
    if (ev.target != checkbox) {
        checkbox.click()
    }

    if (checkbox.checked) title.classList.add("strike")
    else title.classList.remove("strike")
}

const deleteTask = function (id) {
    let parent = document.getElementById(`task-${id}`)
    parent.remove()
}

const createNewTask = function (ev) {

    let taskHTML = `
        <div id="task-${curId}" class="task-box flex-row">
            <span class="button-spacing"><input class="task-complete" type="checkbox"></input></span>
            <span class="task-title">Hello</span>
            <span class="spacer"></span>
            <span class="delete button-spacing">[Delete]</span>
        </div>
    `

    // this is necessary to generate a closure
    let myId = curId
    curId += 1

    taskWrapper.insertAdjacentHTML("beforeend",taskHTML)
    let $checkBox = document.querySelector(`#task-${myId} > span > .task-complete`)
    $checkBox.addEventListener("click", (ev) => completeTask(ev, myId))
    
    let $title = document.querySelector(`#task-${myId} > .task-title`)
    $title.innerText = newTaskName.value
    $title.addEventListener("click", (ev) => completeTask(ev, myId))

    $delete = document.querySelector(`#task-${myId} > .delete`)
    $delete.addEventListener("click", (ev) => deleteTask(myId))

    newTaskName.value = ""
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
