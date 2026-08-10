const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    const submissionTime = new Date();
    const formattedTime = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium" }).format(submissionTime);
    document.getElementById("timestamp").value = formattedTime

});



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

    displayProfessionalServices(professionalServices);
}

getProfessionalServicesData();

const selectService = document.getElementById("service");

function displayProfessionalServices(professionalServices) {
    professionalServices.forEach((service) => {
        let option = document.createElement("option")
        option.textContent = service.type;
        option.value = service.type;
        document.getElementById("service").appendChild(option);

    });
}
 