
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cardToDisplay = document.querySelector("#business-card");

const url = "https://udoeyenokon.github.io/wdd231/chamber/data/members.json";

let companies = [];

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();

    companies = data.companies;

    // Display Grid by default
    displayBusinessesGrid(companies);
}

getBusinessData();


gridbutton.addEventListener("click", () => {
    displayBusinessesGrid(companies);
});

listbutton.addEventListener("click", () => {
    displayBusinessesList(companies);
});




const displayBusinessesGrid = (companies) => {

    cardToDisplay.innerHTML = "";

    cardToDisplay.classList.add("grid-card");
    cardToDisplay.classList.remove("list");

    companies.forEach(company => {

        let card = document.createElement("section");
        let businessName = document.createElement("h2");
        let address = document.createElement("p");
        let telephone = document.createElement("p");
        let website = document.createElement("a");
        let grade = document.createElement("p");
        let isQuoted = document.createElement("p");
        let image = document.createElement("img");

        let titleDiv = document.createElement("div");
        let logoDiv = document.createElement("div");
        let infoDiv = document.createElement("div");

        businessName.textContent = company.companyName;
        address.textContent = company.companyAddress;
        telephone.textContent = company.companyPhoneNumber;

        website.href = company.companyWebsiteUrl;
        website.target = "_blank";
        website.textContent = company.companyWebsiteUrl;

        grade.innerHTML = `<strong>Membership Grade:</strong> ${company.membershipLevel}`;
        isQuoted.innerHTML = `<strong>Stock Quoted:</strong> ${company.stockIsQuoted}`;

        image.src = company.imageUrl;
        image.alt = company.companyName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 533;

        titleDiv.className = "tittle";
        logoDiv.className = "logo";
        infoDiv.className = "info";

        titleDiv.append(businessName, address);
        logoDiv.appendChild(image);
        infoDiv.append(website, telephone, grade, isQuoted);

        card.append(titleDiv, logoDiv, infoDiv);

        cardToDisplay.appendChild(card);
    });
};
   
   
const displayBusinessesList = (companies) => {

    cardToDisplay.innerHTML = "";

    cardToDisplay.classList.add("list");
    cardToDisplay.classList.remove("grid-card");

    companies.forEach(company => {

        let card = document.createElement("section");

        card.innerHTML = `
            <h2>${company.companyName}</h2>
            <p>${company.companyAddress}</p>
            <p>${company.companyPhoneNumber}</p>
            <p><a href="${company.companyWebsiteUrl}" target="_blank">${company.companyWebsiteUrl}</a></p>
            <p><strong>Membership Grade:</strong> ${company.membershipLevel}</p>
            <p><strong>Stock Quoted:</strong> ${company.stockIsQuoted}</p>
        `;

        cardToDisplay.appendChild(card);
    });
};
