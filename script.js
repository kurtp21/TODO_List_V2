const container = document.getElementById("container"); 
const inputBox = document.getElementById("input-box");
const tasks = document.getElementById("task");
const newList = document.getElementById("new-list"); 

function addTask() {
    let li = document.createElement("li");
    let button = document.createElement("button");
    let buttonDisplay = button.style.display; 

    if (inputBox.value == '') {
        alert("Cannont add an empty task!");
    } else {
        li.innerHTML = inputBox.value; 
        tasks.appendChild(li);
    }
}

function showButton() {
    
}