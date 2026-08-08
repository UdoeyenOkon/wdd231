const projects = [
    {
        name: "Doctor Quarters for Akwa Ibom State",
        details: "Rehabilitation of 15 units, 5-bedroom duplex",
        servicesProvided: "Reconstruction",
        yearCompletedOrAcquired: 2022,
        imageShowing: "Condition Survey",
        imageUrl: "images/condition-survey-doctors-quarters-akwa-ibom-state.webp"
    },
    {
        name: "Doctor Quarters for Akwa Ibom State",
        details: "Rehabilitation of 15 units, 5-bedroom duplex",
        servicesProvided: "Reconstruction",
        yearCompletedOrAcquired: 2022,
        imageShowing: "Completed Work",
        imageUrl: "images/rehabilitation-doctors-quarters-akwa-ibom-state.webp"
    },
    {
        name: "Generator House, Old Governor Office",
        details: "Rehabilitation of the Shell and Roof",
        servicesProvided: "Renovation",
        yearCompletedOrAcquired: 2023,
        imageShowing: "Condition Survey",
        imageUrl: "images/condition-survey-gen-house-old-gov-office-akwa-ibom-state.webp"
    },
    {
        name: "Generator House, Old Governor Office",
        details: "Rehabilitation of the Shell and Roof",
        servicesProvided: "Renovation",
        yearCompletedOrAcquired: 2023,
        imageShowing: "Completed Work",
        imageUrl: "images/rehabilitation-gen-house-old-gov-office-akwa-ibom-state.webp"
    },
    {
        name: "Governor Office Annex Complex",
        details: "Rehabilitation of the Shell and Roof",
        servicesProvided: "Rehabilitation",
        yearCompletedOrAcquired: 2020,
        imageShowing: "Condition Survey",
        imageUrl: "images/condition-survey-gov-office-annex-akwa-ibom-state.webp"
    },
    {
        name: "Governor Office Annex Complex",
        details: "Rehabilitation of the Shell and Roof",
        servicesProvided: "Rehabilitation",
        yearCompletedOrAcquired: 2020,
        imageShowing: "Completed Work",
        imageUrl: "images/rehabilitation-gov-office-annex-akwa-ibom-state.webp"
    },

    {
        name: "Hotel Suites for Majesty Realm Hotel, Uyo",
        details: "Construction of a 10-suite complex (infrastructure including concrete paved floor, landscaping, Water supply, and inverter system)",
        servicesProvided: "Design and Build",
        yearCompletedOrAcquired: 2021,
        imageShowing: "Completed Work",
        imageUrl: "images/hotel-suites-building-majestyrealm.webp"
    },
    {
        name: "Hotel Rooms for Majesty Realm Hotel, Uyo",
        details: "Construction of a 9-room, Gym, and Restaurant",
        servicesProvided: "Design and Build",
        yearCompletedOrAcquired: 2021,
        imageShowing: "Completed Work",
        imageUrl: "images/hotelrooms-building-majestyrealm.webp"
    },
    {
        name: "Block of Flats for a private client, Uyo",
        details: "Construction of 2 blocks of 4nr 3-bedroom flats (infrastructure including Fence, Gate/generator House, concrete paved floor, landscaping, Water supply, and inverter system)",
        servicesProvided: "Design and Build",
        yearCompletedOrAcquired: 2018,
        imageShowing: "Completed Work",
        imageUrl: "images/housing-estate-majesty-realm.webp"
    },
    {
        name: "Residential Mansion for a private client, Uyo",
        details: "Construction of a 7-bedroom duplex/penthouse complex (infrastructure including Gate House, Fence, Service Quarters, generator House, concrete paved floor, landscaping, Water supply, and inverter system)",
        servicesProvided: "Design and Build",
        yearCompletedOrAcquired: 2015,
        imageShowing: "Completed Work",
        imageUrl: "images/mansion-development-idu-uruan.webp"
    },
    {
        name: "Residential Mansion for a private client, Essien Udim",
        details: "Construction of a 10-bedroom duplex/penthouse complex (infrastructure including concrete paved floor, landscaping, Water supply, and inverter system)",
        servicesProvided: "Design and Build",
        yearCompletedOrAcquired: 2019,
        imageShowing: "Completed Work",
        imageUrl: "images/mansion-development-private-mkpatak.webp"
    },
    {
        name: "Security / Plant House for a private client, Essien Udim",
        details: "Construction of a 1-storey, 2nr 1-bedroom self-contained /plant room building (with inverter system)",
        servicesProvided: "Design and Build",
        yearCompletedOrAcquired: 2019,
        imageShowing: "Completed Work",
        imageUrl: "images/infrastructure-development-private-mkpatak.webp"
    },
    {
        name: "Affordable Housing Estate",
        details: "Construction of 236 units of 2-bedroom Flats (infrastructure including Fence/Gatehouse, concrete paved roads and drainage, landscaping, Water supply, and public power installation)",
        servicesProvided: "Project Management / Contract Administration",
        yearCompletedOrAcquired: 2023,
        imageShowing: "Arial View",
        imageUrl: "images/mass-housing-estate-akwa-ibom-state.webp"
    },
    {
        name: "Affordable Housing Estate",
        details: "Construction of 236 units of 2-bedroom Flats (infrastructure including Fence/Gatehouse, concrete paved roads and drainage, landscaping, Water supply, and public power installation)",
        servicesProvided: "Project Management / Contract Administration",
        yearCompletedOrAcquired: 2023,
        imageShowing: "Completed work",
        imageUrl: "images/mass-housing-estate-akwa-ibom-state-2.webp"
    },
    {
        name: "Big-Mixer",
        details: "Capacity of up to 1 bag, self-loaded, and delivers mixed concrete up to the 10th floor with a pulley system.",
        servicesProvided: "Not Applicable",
        yearCompletedOrAcquired: "",
        imageShowing: "Equipment in action",
        imageUrl: "images/big-tower-mixer.webp"
    },
    {
        name: "Small-Mixer",
        details: "Capacity of up to 1 bag, labour loaded",
        servicesProvided: "Not Applicable",
        yearCompletedOrAcquired: "",
        imageShowing: "Equipment in the yard",
        imageUrl: "images/small-size-mixer.webp"
    },
    {
        name: "Small Roller Compactor",
        details: "2-steel drums, suitable for compacting building and road works",
        servicesProvided: "Not Applicable",
        yearCompletedOrAcquired: "",
        imageShowing: "Equipment in action",
        imageUrl: "images/small-roller-compactor.webp"
    },
    {
        name: "Scaffolding",
        details: "Independent steel scaffolding, suitable for internal and external uses.",
        servicesProvided: "Not Applicable",
        yearCompletedOrAcquired: "",
        imageShowing: "Equipment in the yard",
        imageUrl: "images/scaffolding.webp"
    },
];

createProjectAlbum(projects);

function createProjectAlbum(projects) {
    projects.forEach(project => {
        let album = document.createElement("section");

        let name = document.createElement("h2");
        name.textContent = project.name;

        let image = document.createElement("img");
        image.innerHTML = `<span class="label"> <strong>Image Showing: </strong></span>${project.imageShowing}`;
        image.setAttribute("src", project.imageUrl);
        image.setAttribute("alt", project.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "500");
        image.setAttribute("height", "375");

        let button = document.createElement("button");
        button.innerText = 'Learn More';

        album.append(name, image, button);
       
        document.querySelector(".portfolio-photo").appendChild(album);








        
        // let details = document.createElement("p");
        // let serviceProvided = document.createElement("p");
        // let yearCompletedOrAcquired = document.createElement("p");
        // let image = document.createElement("p");
        

        // name.textContent = project.name;
        // details.innerHTML = `<span class="label"> <strong>Details: </strong></span>${project.details}`;
        // serviceProvided.innerHTML = `<span class="label"> <strong>Srvice Provided: </strong></span>${project.servicesProvided}`;
        // yearCompletedOrAcquired.innerHTML = `<span class="label"> <strong>Year Completed or Acquired: </strong></span>${project.yearCompletedOrAcquired}`;
        

        // album.appendChild(name);
        // album.appendChild(details);
        // album.appendChild(serviceProvided);
        // album.appendChild(yearCompletedOrAcquired);
        // album.appendChild(image);
        // album.appendChild(img);

        // document.querySelector(".photos").appendChild(album);
    });
}




