const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cardToDisplay = document.querySelector("#business-card");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
gridbutton.addEventListener("click", () => {
    // example using arrow function
    cardToDisplay.classList.add("grid-card");
    cardToDisplay.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    cardToDisplay.classList.add("list");
    cardToDisplay.classList.remove("grid-card");
});

// document.getElementById('reload').addEventListener('click', getBusinessData);



const url = "https://udoeyenokon.github.io/wdd231/chamber/data/members.json";
const businessCard = document.querySelector("#business-card");
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayBusinesses(data.companies);
};

getBusinessData();

const displayBusinesses = (companies) => {
    cardToDisplay.innerHTML = ''; // Clear existing cards
    companies.forEach(company => {
        let card = document.createElement("section");
        let businessName = document.createElement("h2");
        let address = document.createElement("p");
        let telephone = document.createElement("p");
        let website = document.createElement("a");
        let grade = document.createElement("p");
        let isQuoted = document.createElement("p");
        let image = document.createElement("img");
        let tittleDiv = document.createElement("Div");
        let logoeDiv = document.createElement("Div");
        let infoDiv = document.createElement("Div");

        businessName.textContent = `${company.companyName}`;
        address.textContent = `${company.companyAddress}`;
        telephone.textContent = `${company.companyPhoneNumber}`;
        website.innerHTML = `<a href="${company.companyWebsiteUrl}" target="_blank">${company.companyWebsiteUrl}</a>`;
        grade.innerHTML = `<strong>Membership Grade: </strong>${company.membershipLevel}`;
        isQuoted.innerHTML = `<strong>Stock Quoted:</strong> ${company.stockIsQuoted}`;
        image.setAttribute('src', company.imageUrl);
        image.setAttribute('alt', `Company Identity Image`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '400');
        image.setAttribute('height', '533');

        tittleDiv.setAttribute('class', 'tittle');
        logoeDiv.setAttribute('class', 'logo');
        infoDiv.setAttribute('class', 'info');

        tittleDiv.appendChild(businessName);
        tittleDiv.appendChild(address);
        logoeDiv.appendChild(image);
        infoDiv.appendChild(website);
        infoDiv.appendChild(telephone);
        infoDiv.appendChild(grade);
        infoDiv.appendChild(isQuoted);

        card.appendChild(tittleDiv);
        card.appendChild(logoeDiv);
        card.appendChild(infoDiv);

        cardToDisplay.appendChild(card);
    });
}




