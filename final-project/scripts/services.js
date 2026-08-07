
const url = "https://udoeyenokon.github.io/wdd231/final-project/data/services.json";

let professionalServices = [];

async function getProfessionalServicesData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            professionalServices = data.professionalServices;
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }

    createProfessionalServicesCard(professionalServices);
}

getProfessionalServicesData();

createProfessionalServicesCard(professionalServices);
const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
    event.preventDefault();
    document.querySelector("#professional-service-card").innerHTML = "";
    createProfessionalServicesCard(professionalServices);
});

const ServicesLink = document.querySelector("#services");
ServicesLink.addEventListener("click", () => {
    event.preventDefault();
    document.querySelector("#professional-service-card").innerHTML = "";
    const Services = professionalServices.filter(service => service.class !== 'Equipment');
    createProfessionalServicesCard(Services);
});

const Equipmentink = document.querySelector("#equipment");
Equipmentink.addEventListener("click", () => {
    event.preventDefault();
    document.querySelector("#professional-service-card").innerHTML = "";
    const Equipment = professionalServices.filter(service => service.class === 'Equipment');
    createProfessionalServicesCard(Equipment);
});


function createProfessionalServicesCard(serviceCardToDisplay) {
    serviceCardToDisplay.forEach((x) => {
        let professionalServiceCard = document.createElement("p");
        professionalServiceCard.innerHTML = `${x.type}`
        professionalServiceCard.addEventListener("click", () => showDetailedServices(x));
        document.querySelector("#professional-service-card").appendChild(professionalServiceCard);
    });

};



function showDetailedServices(x) {
    const detailsOfServices = document.querySelector("#detailed-services");
    detailsOfServices.innerHTML = "";
    detailsOfServices.innerHTML = `
    <div><h3>${x.type}</h3>
    <button class="close-button">❌</button></div>
    <p>${x.description}</p>
    <p><strong>Professional Fee / Rate</strong>: ${x.feesRates}</p>
    <p><strong>Available Discount</strong>: ${x.availableDiscount}</p>
  `;
    detailsOfServices.showModal();

    let closeModal = document.querySelector(".close-button");
    closeModal.addEventListener("click", () => detailsOfServices.close());
}


let current = Date.now();
let previousVisit = window.localStorage.getItem("lastVisit");
localStorage.setItem("lastVisit", current);

let message;
if (!previousVisit) {
    message = "You are Welcome!";
} else {
    let daysDifference = (current - previousVisit) / 86400000;
    if (daysDifference < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        message = "You last visited 1-day ago";
    } else {
        message = `You visited ${daysDifference.toFixed(0)} days ago`;
    }
}

document.getElementById("visit-message").textContent = message;
document.getElementById("visitor-info").style.display = "flex";

document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("visitor-info").style.display = "none";
});
