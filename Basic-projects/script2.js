document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("icons").addEventListener("click", function () {

        // add the element
        // Create a new 'li' element
        let newTask = document.createElement("li");
        newTask.textContent = "omkar"; // Set the content for the new task
        
        // Append the new 'li' element to the 'tasks-add' container
        document.getElementById("tasks-add").appendChild(newTask);
    });
    
    // remove the element
    document.getElementById(`icons-2`).addEventListener(`click`,function(){
       let remove = document.getElementById(`tasks-add`)
       remove.lastElementChild.remove();
    })
});
