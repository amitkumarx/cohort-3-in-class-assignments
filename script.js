// Creating a create component function.
function createToDoComponent(todo, index) {
    // Getting hold of toDoList div.
    const parentElement = document.getElementById("toDoList");
    // Creating Elements.
    const headEl = document.createElement("h3");
    const buttonDel = document.createElement("button");

    // Structuring Elements and defining inner HTML.
    headEl.innerHTML = `${index}. ${todo}`;
    headEl.style.display = "inline-block";
    headEl.style.marginRight = "20px";
    headEl.style.marginTop = "";
    headEl.style.marginBottom = "0";
    buttonDel.innerHTML = "Mark as complete";
    buttonDel.setAttribute("onclick", "completeTask(event)");

    // Creating div element for individual To-Do item.
    const newToDoElement = document.createElement("div");
    newToDoElement.setAttribute("id", `todo${index}`);
    newToDoElement.style.marginTop = "4px";
    newToDoElement.style.marginBottom = "0";
    newToDoElement.appendChild(headEl);
    newToDoElement.appendChild(buttonDel);

    // Appending the individual div element to toDoList id div.
    parentElement.appendChild(newToDoElement);
}

// Creating a render function.
function render(arr) {

    //Clearing the items in parent div.
    document.getElementById("toDoList").innerHTML = "";

    // Iterating over each input value in todos array.
    arr.forEach((item, index) => {

        // Getting the input value from the todos.
        const toDoItem = item.inputTitle;

        // Using current index to assign the todo index.
        const toDoIndex = index + 1;

        // Calling create component function.
        createToDoComponent(toDoItem, toDoIndex);
    });

    // Clearing the input box.
    document.querySelector("input").value = "";
}

// Creating a todos array to store value from input box.
let todos = [];

//creating an add todo function
function addToDo() {
    todos.push({
        inputTitle: document.querySelector("input").value.trim()
    });
    render(todos);
        
}

// Creating a complete task function.
function completeTask(clickEvent) {
     const parentDiv=clickEvent.target.parentNode;
     const headingElTextContent = parentDiv.querySelector("h3").textContent;
     const filteredTextContent = headingElTextContent.split(". ")[1].trim();
     todos = todos.filter(todo => todo.inputTitle !== filteredTextContent);
     console.log(todos);
     render(todos);
}

