const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const DoForm = document.querySelector("#todo-form");
const DoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    DoForm.classList.remove(HIDDEN_CLASSNAME);
    DoList.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Good Day, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
    DoForm.classList.add(HIDDEN_CLASSNAME);
    DoList.classList.add(HIDDEN_CLASSNAME);
} else {
    paintGreetings();
    DoForm.classList.remove(HIDDEN_CLASSNAME);
    DoList.classList.remove(HIDDEN_CLASSNAME);
}