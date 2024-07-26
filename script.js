// Selecting 

let inputValue = document.querySelector(".todo-input");
let button = document.querySelector(".submit");
let todoList = document.querySelector(".todo-list");

// Event Listening 

button.addEventListener("click", addingTodo);

// Functions 

function addingTodo(event){
    event.preventDefault(); //form wont be refreshing with this
  
    // creating a div 
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // creating a li 
    let litodo = document.createElement("li");
    litodo.innerText = "Hey";
    litodo.classList.add("todo-item");
    todoDiv.appendChild(litodo);
    console.log(todoDiv);
    //checked button
    let checkedBtn = document.createElement("button");
    checkedBtn.innerHTML= '<i class="fas fa-check"></i>';
    checkedBtn.classList.add("checked-btn");
    todoDiv.appendChild(checkedBtn);
    // delete button 
    let delBtn = document.createElement("button");
    delBtn.innerHTML= '<i class="fas fa-trash"></i>';
    delBtn.classList.add("checked-btn");
    todoDiv.appendChild(delBtn);
    // append to ul 
    todoList.appendChild(todoDiv);
}