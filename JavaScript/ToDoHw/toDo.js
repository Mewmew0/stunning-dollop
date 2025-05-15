let taskInput = document.querySelector("#task");
let addButton = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");
let toastElement = document.querySelector("#liveToast"); // Select the toast element
let toast = new bootstrap.Toast(toastElement); // Initialize the toast
let toastElement1 = document.querySelector("#liveToast1");
let toast1 = new bootstrap.Toast(toastElement1);

// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

addButton.addEventListener("click", function () {
  if (taskInput.value == "" || taskInput.value == undefined) {
    toast1.show();
  } else {
    // Add the task to the list
    let taskText = taskInput.value;
    addTaskToList(taskText);

    // Save the task to local storage
    saveTaskToLocalStorage(taskText);

    // Clear the input field
    taskInput.value = "";

    // Show the toast notification
    toast.show();
  }
});

// Function to add a task to the list
function addTaskToList(taskText) {
  let a = document.createElement("li");

  // Create a close button
  let closeButton = document.createElement("span");
  closeButton.textContent = "X"; // Close button symbol
  closeButton.style.float = "right"; // Optional: Add some spacing
  closeButton.style.paddingRight = "10px";
  closeButton.addEventListener("click", function () {
    a.remove(); // Remove the <li> when the close button is clicked
    removeTaskFromLocalStorage(taskText); // Remove the task from local storage
  });

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px"; // Optional: Add spacing between checkbox and text
  checkbox.style.width = "30px"
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      a.style.textDecoration = "line-through"; // Mark task as completed
    } else {
      a.style.textDecoration = "none"; // Unmark task
    }
  });

  // Add the checkbox and task text to the <li>
  a.appendChild(checkbox);
  a.appendChild(document.createTextNode(taskText));
  // Append the close button to the <li>
  a.appendChild(closeButton);

  // Append the <li> to the list
  list.appendChild(a);
}

// Function to save a task to local storage
function saveTaskToLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((taskText) => {
    addTaskToList(taskText);
  });
}

// Function to remove a task from local storage
function removeTaskFromLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}