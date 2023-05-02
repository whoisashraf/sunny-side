import './style.css'
const navBtn = document.querySelector("#menu");
const navItem = document.querySelector("#menubar");
navBtn.addEventListener("click", () => {
    navItem.classList.toggle("flex");
    navItem.classList.toggle("hidden");
});