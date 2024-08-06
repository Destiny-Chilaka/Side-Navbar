const toggle = document.getElementById("menu");
const sideBar = document.getElementById("side-bar");
const close = document.getElementById("close");

toggle.addEventListener('click', function () {
    sideBar.classList.toggle("show-side-bar");
});

close.addEventListener('click', function () {
    sideBar.classList.remove("show-side-bar");
});