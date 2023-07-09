const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const addButton=document.querySelector("#todo-form button");
const toDoList=document.getElementById("todo-list");

function paintToDo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    li.appendChild(span);
    span.innerText=newTodo;
    const button = document.createElement("button");
    button.innerText="✔️";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    addButton.addEventListener('click',()=>{
        const newTodo=toDoInput.value;
        toDoInput.value="";
        paintToDo(newTodo); 
    }); 
}

function addToDo(event){
    const li=event.target.parentElement;
    li.add();
}

function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
}


toDoForm.addEventListener("submit", handleToDoSubmit);