// ..............PORTFOLIO OBJECT................................................................
const url = "data/projects.json";

let projects = [];

async function getProjectsData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            projects = data.projects;
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }

    createProjectAlbum(projects);;
}

getProjectsData();



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

        let imageDescription = document.createElement("p");
        imageDescription = `Photo Showing the ${project.imageShowing}.`;

        let sectionDiv = document.createElement("div");

        sectionDiv.append(image, button);

        album.append(name, sectionDiv, imageDescription);
        button.addEventListener("click", () => showProjectDetails(project));
        document.querySelector(".portfolio-photo").appendChild(album);


    function showProjectDetails(project) {
        const detailsOfProjects = document.querySelector("#project-details");
    detailsOfProjects.innerHTML = "";
    detailsOfProjects.innerHTML = `
    <div><h3>${project.name}</h3>
    <button class="close-button">❌</button></div>
    <p>${project.details}</p>
    <p><span class="label"><strong>Service Provided: </strong></span> ${project.servicesProvided} </p>
    <p><span class="label"> <strong>Year Completed or Acquired: </strong></span>${project.yearCompletedOrAcquired}</p>
    `;
    detailsOfProjects.showModal()
    let closeModal = document.querySelector(".close-button");
    closeModal.addEventListener("click", () => detailsOfProjects.close());
}






        
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




