const businessSportlightElement = document.querySelector(".business-sportlight");

const url = "https://udoeyenokon.github.io/wdd231/chamber/data/members.json";

let companies = [];

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();

    companies = data.companies;

    displayBusinessSportlightcard(companies);
}

getBusinessData();

const displayBusinessSportlightcard = (companies) => {
    businessSportlightElement.innerHTML = "";
    const silverAndGoldCompanies = companies.filter(company => company.membershipLevel >= 2);
    const randomCompanies = silverAndGoldCompanies.sort(() => 0.5 - Math.random()).slice(0, 2);
    randomCompanies.forEach(company => {
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

        titleDiv.className = "tittle2";
        logoDiv.className = "logo2";
        infoDiv.className = "info2";

        titleDiv.append(businessName, address);
        logoDiv.appendChild(image);
        infoDiv.append(website, telephone, grade, isQuoted);

        card.append(titleDiv, logoDiv, infoDiv);

        businessSportlightElement.appendChild(card);
    });
};




