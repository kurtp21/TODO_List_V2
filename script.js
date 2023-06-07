// Getting the const variables to be used
const inputBox = document.getElementById("input-box");
const tasks = document.getElementById("task");
const freshButton = document.getElementById("new-button"); 

/*
    addTask(): Adds the given task in the input box to the 
               tasks container.
    @Param: None
    @Post-Cond: The inputed task will be in the task container 
                and will show on the document
    @Return: None
*/
function addTask() {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";  // Code for the span(x) icon

    if (inputBox.value == '') {
        // The input box is empty, show an alert
        alert("Cannont add an empty task!");
    } else {
        // The text is the task to be added 
        freshButton.style.display = 'block';   // Show the new-list button 
        li.innerHTML = inputBox.value; 
        tasks.appendChild(li);
        li.appendChild(span); 
    }
    inputBox.value = "";    // Clear the input box text field everytime 
    saveData();     // Save the data into the local storage
    return;
}

// Check if the task is selected or if the (x) is selected
tasks.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        // The task is selected, so change text
        event.target.classList.toggle("checked"); 
        saveData();
    } else if (event.target.tagName === "SPAN") {
        // The (x) is selected, so remove task
        event.target.parentElement.remove();
        
        // Check if there is no tasks left after removing a task
        if (tasks.childNodes.length === 0) {
            // All tasks are removed, so don't show the new-list function
            freshButton.style.display = 'none';
        }
        saveData();     // Save the data onto the localStorage
    }
});

// Checks if the new-list button is selected
freshButton.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        // The new-list button is selected, so clear the 
        // tasks container
        tasks.innerHTML = "";
    }
    // Don't show button after clearing the tasks container 
    freshButton.style.display = 'none';
    saveData();   // Save the data onto the localStorage
}); 


/*
    saveData(): Saves all the current data of the document onto the 
                localStorage
    @Param: None
    @Pre-Cond: None
    @Post-Cond: All data currently on the document is saved on the 
                localStorage
    @Return: None
*/
function saveData() {
    localStorage.setItem("data", tasks.innerHTML);
    return;
}


/*
    showData(): Shows all the data the was saved on the localStorage
    @Param: None
    @Pre-Cond: The localStorage has the previous document data stored
    @Post-Cond: The Data saved on the localStorage will be visible 
                on the document
    @Return: None 

*/
function showData() {
    tasks.innerHTML = localStorage.getItem("data");

    // Save the new-list button aswell
    if (tasks.childNodes.length === 0) {
        // Saved the data when there was no tasks, so hide it 
        freshButton.style.display = 'none'; 
    } else {
        // There are tasks when data was saved, so show it 
        freshButton.style.display = 'block';
    }
    return; 
}

// Call the showData(), to display the data
showData();