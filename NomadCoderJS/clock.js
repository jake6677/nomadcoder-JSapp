const clock = document.querySelector("h2#clock");
const day = document.querySelector("h2#days");

function getClock() {
    const date = new Date();
    const months = String(date.getMonth() + 1);
    const days = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    day.innerHTML = `${months}. ${days}.`;
    clock.innerHTML = `${hours} : ${minutes}`;
}
getClock();
setInterval(getClock, 1000);