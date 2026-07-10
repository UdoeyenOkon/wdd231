
const navbutton = document.querySelector("#ham-button");
const navLink = document.querySelector("#nav-bar");

navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navLink.classList.toggle("show");
});