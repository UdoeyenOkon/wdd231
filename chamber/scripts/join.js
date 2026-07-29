const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    const submissionTime = new Date();
    const formattedTime = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium" }).format(submissionTime);
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'submissionTime';
    hiddenInput.value = formattedTime;
    form.appendChild(hiddenInput);
});



const membershiplevels = [
    {
        id: "NP",
        name: "Non-Profit Organization Level(NP)",
        benefits: ["Designed to support community groups", "No membership fee required", "Directory listing with logo + contact info", "2 Spotlight slots per year on website/socials",
            "Access to free webinars + training hosted by the Chamber", "Member-to-member discounts at Chamber events", "Newsletter + advocacy updates"]
    },
    {
        id: "Bronze",
        name: "Bronze Membership Level",
        benefits: ["Good for small businesses getting started", "Membership fee is NGN150,000.00", "Everything in NP +", "Listed on the directory",
            "Guaranteed directory listing with priority placement above NP", "Invite to 4 networking events per year - breakfasts, happy hours",
            "1 business expo booth at a discounted rate", "Access to Chamber resource library - templates, guides", "Mention in monthly newsletter"]
    },
    {
        id: "Silver",
        name: "Silver Membership Level",
        benefits: ["For growing businesses that want visibility", "Membership fee is NGN250,000.00", "Everything in Bronze +", "Quarterly Spotlight slots - featured on homepage + social media",
            "Free booth at 2 Business Expos per year", "2 tickets to VIP Dinners with local leaders", "Access to Member-Exclusive Events - behind-the-scenes tours, appreciation nights",
            "Discounted ad placement in Chamber publications", "Eligibility for Chamber awards nominations"
        ]
    },
    {
        id: "Gold",
        name: "Gold Membership Level",
        benefits: ["For established businesses wanting leadership + influence", "Membership fee is NGN350,000.00", "Everything in Silver +", "Monthly Spotlight slots + featured article on website",
            "VIP lunch invitation with government officials + keynote speakers", "Priority speaking slot at Ticketed Speaker Series", "Free booth at all Chamber expos + events for the year",
            "Sponsorship opportunities at parades, festivals, award ceremonies", "Board advisory input - direct feedback channel to Chamber leadership", "Logo on all Chamber marketing materials"
        ]
    }
];

// membershiplevels.forEach((level) => {
//     let option = document.createElement("option")
//     option.textContent = level.id;
//     option.value = level.id;
//     document.getElementById("membership-level").appendChild(option);

// });


document.addEventListener('DOMContentLoaded', () => {

    function createMembershipCard(membershiplevels) {
        membershiplevels.forEach((membershiplevel) => {
            let membershipCard = document.createElement("section");
            let membershiplevelName = document.createElement("p");
            membershiplevelName.textContent = membershiplevel.name;

            let learnMoreButton = document.createElement("button");
            learnMoreButton.textContent = "Learn More";

            membershipCard.append(membershiplevelName, learnMoreButton);

            learnMoreButton.addEventListener("click", () =>
                showMembershipLevelDetails(membershiplevel)
            );

            document.querySelector("#membership-card").appendChild(membershipCard);
        });
    }

    createMembershipCard(membershiplevels);
});

    function showMembershipLevelDetails(membershiplevel) {
        const membershipLevelDetails = document.querySelector("#membershipLevelDetails");
        membershipLevelDetails.innerHTML = "";
        membershipLevelDetails.innerHTML = ` 
      <div>
        <h3>${membershiplevel.name}</h3>
        <button class="close-button">❌</button>
      </div>
      <p>${membershiplevel.benefits.join(' * ')}</p>
    `;
        membershipLevelDetails.showModal();
        let closeModal = document.querySelector(".close-button");
        closeModal.addEventListener("click", () => membershipLevelDetails.close());
    }

  