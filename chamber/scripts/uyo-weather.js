const currentTemperature = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');
const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=5.04&lon=7.93&units=metric&appid=2b076b89deb5d8cef26a23a24963acce';


async function apiFetch() { // alternatively: const myApiFetchFunction = async () => {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    // Get the current weather
    // currentTemperature.innerHTML = `${data.list[0].main.temp}&deg;C`;
    // const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    // let desc = data.list[0].weather[0].description;
    // weatherIcon.setAttribute('src', iconsrc);
    // weatherIcon.setAttribute('alt', desc );
    // captionDesc.textContent = desc;

    // Get the forecast for the next 3 days
    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const forecastItem = data.list[i * 8]; // Get the forecast for every 8th item (i.e., every 24 hours)
        const forecastHtml = `
      <div>
        <h3>${new Date(forecastItem.dt * 1000).toDateString()}</h3>
        <p><strong>${forecastItem.main.temp}&deg;C</strong></p>
        <img src="https://openweathermap.org/img/w/${forecastItem.weather[0].icon}.png" alt="${forecastItem.weather[0].description}">
         <p>${forecastItem.weather[0].description}</p>
      </div>
    `;
        forecastContainer.innerHTML += forecastHtml;
    }
}
