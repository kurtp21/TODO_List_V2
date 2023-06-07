const container = document.getElementById("container"); 
const inputBox = document.getElementById("input-box");
const tasks = document.getElementById("task");
const freshButton = document.getElementById("new-button"); 

function addTask() {
    let li = document.createElement("li");
    let buttonDisplay = freshButton.style.display; 

    if (inputBox.value == '') {
        alert("Cannont add an empty task!");
    } else {
        li.innerHTML = inputBox.value; 
        freshButton.style.display = 'block';
        tasks.appendChild(li);
    }
}
