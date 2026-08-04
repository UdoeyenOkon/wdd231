import { uyoBusinesses } from '../data/chamber-businesses.mjs';


function createBusinessCard(uyoBusinesses) {
    uyoBusinesses.forEach((business) => {
        let businessCard = document.createElement("div");

        let title = document.createElement("h2");
        title.textContent = business.name;

        let button = document.createElement("button");
        button.textContent = 'Learn More';

        let figure = document.createElement("figure");

        let image = document.createElement("img");
        image.src =business.photoURL;
        image.alt = business.name;
        image.width = 300;
        image.height = 200;
        image.loading = 'lazy';
        image.decoding = 'async';
        figure.appendChild(image);

        let address = document.createElement("address");
        address.textContent = business.address;

        let description = document.createElement("p");
        description.textContent = business.description;

        businessCard.append(title, button, figure, address, description);

        document.getElementById("businessCard").appendChild(businessCard);

    });

}

createBusinessCard(uyoBusinesses);


let current = Date.now();
let previousVisit = window.localStorage.getItem("lastVisit");
localStorage.setItem("lastVisit", current);

let message;
if (!previousVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    let daysDifference = (current - previousVisit) / 86400000;
    if (daysDifference < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        message = "You last visited 1-day ago";
    } else {
        message = `You last visited ${daysDifference.toFixed(0)} days ago`;
    }
}

document.getElementById("visit-message").textContent = message;
document.getElementById("visitor-info").style.display = "flex";

document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("visitor-info").style.display = "none";
});




