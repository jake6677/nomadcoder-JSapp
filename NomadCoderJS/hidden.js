const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
// const toDoForm = document.querySelector("#todo-form");
// const toDoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // toDoForm.classList.remove(HIDDEN_CLASSNAME);
    // toDoList.classList.remove(HIDDEN_CLASSNAME);
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
} else {
    paintGreetings();
    // toDoForm.addEventListener("submit", handleToDoSubmit);
    // toDoForm.classList.remove(HIDDEN_CLASSNAME);
    // toDoList.classList.remove(HIDDEN_CLASSNAME);
}
//to-do form을 제출할 시에 페이지가 새로고침되는 문제가 발생