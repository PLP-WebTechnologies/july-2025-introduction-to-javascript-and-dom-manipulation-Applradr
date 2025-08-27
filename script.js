// ================================
// Variables and Conditionals
// ================================

// Array to store tasks
let tasks = [];

// ================================
// Functions
// ================================

// Function to add a task
function addTask() {
  let input = document.getElementById("taskInput");
  let newTask = input.value;

  // Conditional: Check if input is empty
  if (newTask === "") {
    alert("Please enter a task! ❌");
  } else {
    tasks.push(newTask); // Add task to array
    input.value = ""; // Clear input
    displayTasks(); // Refresh task list
  }
}

// Function to clear all tasks
function clearTasks() {
  tasks = []; // Empty the array
  displayTasks(); // Refresh task list
}

// ================================
// Loops
// ================================

// Function to display all tasks
function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = ""; // Clear old list

  // Loop through tasks array
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li"); // Create <li>
    li.textContent = tasks[i]; // Set text
    list.appendChild(li); // Add to list
  }
}
