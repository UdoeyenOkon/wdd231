// ..............PROFESSIONAL SERVICES OBJECT...................................
const url = "data/services.json";

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
        message = "Welcome! Back so soon. Awesome!";
    } else if (daysDifference === 1) {
        message = "Welcome! You visited 1-day ago.";
    } else {
        message = `Welcome! You visited ${daysDifference.toFixed(0)} days ago.`;
    }
}

document.getElementById("visit-message").textContent = message;
document.getElementById("visitor-info").style.display = "flex";

document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("visitor-info").style.display = "none";
});



// ..............WEATHER FORCASTING OBJECT...................................
import { getWeather } from "./uyo-weather.mjs";
const currentTemperature = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const forecastContainer = document.querySelector("#forecast");


async function displayWeather() {

    try {

        const { current, forecast } = await getWeather();

        //......................... CURRENT WEATHER............................
        currentTemperature.innerHTML =
            `${current.main.temp}&deg;C`;

        const currentIcon =
            `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;

        const currentDescription =
            current.weather[0].description;

        weatherIcon.src = currentIcon;

        weatherIcon.alt =
            `Weather condition: ${currentDescription}`;

        captionDesc.textContent =
            currentDescription;



        // ..........4-DAY FORECAST.........................................
        forecastContainer.innerHTML = "";

        // Select the forecast entries at 12:00
        const dailyForecast = forecast.list.filter(item => {
            return item.dt_txt.includes("12:00:00");
        });

        console.log("Noon forecasts:", dailyForecast);

        // Display the first three forecasts
        dailyForecast.slice(0, 4).forEach(forecastItem => {

            const forecastDate =
                new Date(forecastItem.dt * 1000);

            const forecastIcon =
                `https://openweathermap.org/img/w/${forecastItem.weather[0].icon}.png`;

            const forecastDescription =
                forecastItem.weather[0].description;

            // Probability of precipitation
            const rainProbability =
                Math.round(forecastItem.pop * 100);

            // Wind speed
            const windSpeed =
                forecastItem.wind.speed;


            const forecastHtml = `
        <div class="forecast-card">

            <h3>
                ${forecastDate.toDateString()}
            </h3>

            <img
                src="${forecastIcon}"
                alt="${forecastDescription}"
            >

            <p>
                <strong>
                    ${forecastItem.main.temp}&deg;C
                </strong>
            </p>

            <p>
                ${forecastDescription}
            </p>

            <p>
                🌧️ Rain probability:
                <strong>${rainProbability}%</strong>
            </p>

            <p>
                💨 Wind speed:
                <strong>${windSpeed} m/s</strong>
            </p>

        </div>
    `;

            forecastContainer.innerHTML += forecastHtml;
        });

    } catch (error) {

        console.error(
            "Unable to display weather:",
            error
        );
    }
}

displayWeather();
