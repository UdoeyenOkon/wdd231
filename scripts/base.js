const today = new Date();
const year = document.getElementById("CurrentYear").innerHTML = `${today.getFullYear()}`;
const day = document.getElementById("LastModified").innerHTML = `${new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium" }).format(today)}`;

const navbutton = document.querySelector("#ham-button");
const navLink = document.querySelector("#nav-bar");

navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navLink.classList.toggle("show");
});