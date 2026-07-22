
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

        if (company.membershipLevel == 2) {
            grade.innerHTML = `<strong>Membership Grade:</strong> Silver`;
        } else if (company.membershipLevel == 3) {
            grade.innerHTML = `<strong>Membership Grade:</strong> Gold`;
        } else {
            grade.innerHTML = `<strong>Membership Grade:</strong> Bronze`;
        }

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

        let businessName = document.createElement("h2");
        businessName.innerHTML = `${company.companyName};`

        let address = document.createElement("p");
        address.innerHTML = `${company.companyAddress};`

        let telephone = document.createElement("p");
        telephone.innerHTML = `${company.companyPhoneNumber};`

        let website = document.createElement("p");
        website.innerHTML = `<a href="${company.companyWebsiteUrl}" target="_blank">${company.companyWebsiteUrl}</a>`

        let grade = document.createElement("p");
        if (company.membershipLevel == 2) {
            grade.innerHTML = `<strong>Membership Grade:</strong> Silver`;
        } else if (company.membershipLevel == 3) {
            grade.innerHTML = `<strong>Membership Grade:</strong> Gold`;
        } else {
            grade.innerHTML = `<strong>Membership Grade:</strong> Bronze`;
        }

        let isQuoted = document.createElement("p");

        isQuoted.innerHTML = `<strong>Stock Quoted:</strong> ${company.stockIsQuoted}`


        card.append(businessName, address, telephone, website, grade, isQuoted);

        cardToDisplay.appendChild(card);
    });
};




