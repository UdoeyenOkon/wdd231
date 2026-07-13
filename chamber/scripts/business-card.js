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

const url = "https://udoeyenokon.github.io/wdd231/chamber/data/members.json";
const businessCard = document.querySelector("#business-card");
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    displayBusinesses(data.companies);
};

getBusinessData();

const displayBusinesses = (companies) => {
    companies.forEach(company => {
        let card = document.createElement("section");
        let businessName = document.createElement("h2");
        let address = document.createElement("p");
        let telephone = document.createElement("p");
        let website = document.createElement("p");
        let grade = document.createElement("p");
        let isQuoted = document.createElement("p");
        let image = document.createElement("img");

        businessName.textContent = `${company.companyName}`;
        address.textContent = `${company.companyAddress}`;
        telephone.textContent = `${company.companyPhoneNumber}`;
        website.textContent = `${company.companyWebsiteUrl}`;
        grade.textContent = `${company.membershipLevel}`;
        isQuoted.innerHTML = `<strong>Company's Stock is Quoted:</strong> ${company.stockIsQuoted}`;
        image.setAttribute('src', company.imageUrl);
        image.setAttribute('alt', `Company Identity Image`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '400');
        image.setAttribute('height', '533');

        card.appendChild(image);
        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(telephone);
        card.appendChild(website);
        card.appendChild(grade);
        card.appendChild(isQuoted);

        cardToDisplay.appendChild(card);
    });
}




