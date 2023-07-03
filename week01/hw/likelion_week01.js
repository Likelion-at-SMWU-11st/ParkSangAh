const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

function loginProcess(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName=loginInput.value;
    greeting.innerText=`Glad to see ${userName} !`
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit",loginProcess);
