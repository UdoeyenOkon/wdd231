const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cardToDisplay = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

const url = "https://udoeyenokon.github.io/wdd231/chamber/data/members.json";
const businessCard = document.querySelector("#business-card");
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // displayBusinesses(data.businesses);
};

getBusinessData();




