let navUl = document.querySelector(".nav-ul");
let a = document.querySelectorAll(".menu-li");
let b = document.querySelectorAll(".mobile");
let close = document.querySelectorAll(".close");

a[0].addEventListener("click", displayMenu);
close[0].addEventListener("click", hideMenu);
function displayMenu() {
  b[0].hidden = false;
  navUl.style.display = "none";
}
function hideMenu() {
  b[0].hidden = true;
  navUl.style.display = "grid";
}
