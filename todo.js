function createToDo() {
    let el; // the list item element
    const input = document.getElementById("toDoTitleInput");
    const list = document.getElementById("toDoList");
    const removeButton = document.createElement("button");
    let elText = document.createTextNode(input.value);

    if (input && input.value) {
        el = document.createElement("li");
        input.setAttribute("placeholder", "title");
        input.style.textDecoration = "none";
    } else {
        location.href = "#toDoTitleInput";
        input.setAttribute("placeholder", "Add a title first!");
        input.style.textDecoration = "underline currentColor";
    }
    
    el.className = "ToDoListItem";
    removeButton.className = "RemoveToDo";
    removeButton.appendChild(document.createTextNode("\u00D7"));

    if (el) {
        el.appendChild(elText);
        el.appendChild(removeButton);
    }

    document.body.appendChild(el);
    list.appendChild(el);

    let isChecked = false;
    el.addEventListener("click", () => {
        if (isChecked) {
            el.classList.add("ToDoListItem");
            el.classList.remove("CheckedToDoListItem");

            el.className = "ToDoListItem";
            removeButton.className = "RemoveToDo";
            el.innerHTML = input.value;
            el.appendChild(removeButton);

            isChecked = false;
        } else {
            el.classList.add("CheckedToDoListItem");
            el.classList.remove("ToDoListItem");
    
            el.innerHTML = "✓ | " + input.value;

            isChecked = true;
        }
        
    });

    removeButton.addEventListener("click", () => {
        el.remove();
    })
}

setInterval(FrameInterval, 10);
function FrameInterval() {
    function noTasksMsg() {
        let noTasksText = document.getElementById("noTasksMsg");
        if (document.getElementsByClassName("ToDoListItem").length > 0 || document.getElementsByClassName("CheckedToDoListItem").length > 0) {
            noTasksText.style.display = "none";
        } else if (document.getElementsByClassName("ToDoListItem").length <= 0 || document.getElementsByClassName("CheckedToDoListItem").length <= 0) {
            noTasksText.style.display = "block";
        }
    }
    noTasksMsg();
}
