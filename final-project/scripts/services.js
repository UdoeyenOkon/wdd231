
const url = "https://udoeyenokon.github.io/wdd231/final-project/data/services.json";

let professionalServices = [];

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    professionalServices = data.professionalServices;

    DisplayProfessionalServicesCard(professionalServices);
}

getProfessionalServicesData();

createProfessionalServicesCard(data);
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
    const Services = professionalServices.Services.filter(service => service.class !== 'Equipment');
    createProfessionalServicesCard(Services);
});

const Equipmentink = document.querySelector("#equipment");
Equipmentink.addEventListener("click", () => {
    event.preventDefault();
    document.querySelector("#professional-service-card").innerHTML = "";
    const Equipment = professionalServices.Services.filter(service => service.class === 'Equipment');
    createProfessionalServicesCard(Equipment);
});


function createProfessionalServicesCard(serviceCardToDisplay) {
    serviceCardToDisplay.forEach((x) => {
        let professionalServiceCard = document.createElement("p");
        professionalServiceCard.innerHTML = `${x.Services.type}`
        professionalServiceCard.addEventListener("click", () => showDetails(x));
        document.querySelector("#professional-service-card").appendChild(professionalServiceCard);
    });

 };




// function showDetails(course) {
//     const courseDetails = document.querySelector("#course-details");
//     courseDetails.innerHTML = "";
//     courseDetails.innerHTML = `
//     <button class="close-button">❌</button>
//     <p>${course.subject} ${course.number}</p>
//     <h3>${course.title}</h3>
//     <p><strong>Credits</strong>: ${course.credits}</p>
//     <p>${course.description}</p>
//     <p><strong>Certificate</strong>: ${course.certificate}</p>
//     <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
//   `;
//     courseDetails.showModal();

//     let closeModal = document.querySelector(".close-button");
//     closeModal.addEventListener("click", () => courseDetails.close());
// }