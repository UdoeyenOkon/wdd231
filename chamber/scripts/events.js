const events = [
    {
        eventName: 'Networking',
        activities: [
            {
                type: 'Casual Gathering',
                details: 'Breakfast, lunches, and happy hour'
            },
            {
                type: 'Business Expos',
                details: 'Showcases products and services'
            },
            {
                type: 'Award Ceremonies',
                details: 'Recognize member achievements'
            },
            {
                type: 'Young Professional Mentor Programs',
                details: 'Pair experienced professionals with young entrepreneurs'
            }
        ],
        date: 'July 25, 2026 at 12:00 hour'
    },

    {
        eventName: 'Community Engagement',
        activities: [
            {
                type: 'Local Food Festivals',
                details: 'Promote member restaurants and food businesses'
            },
            {
                type: 'Art Walks',
                details: 'Feature local artists and bring foot traffic to member locations'
            },
            {
                type: 'Holiday Parades',
                details: 'visibility events with sponsorship opportunities'
            }
        ],
        date: 'July 26, 2026 at 12:00 hour'
    },

    {
        eventName: 'Member-Exclusive',
        activities: [
            {
                type: 'VIP Dinners',
                details: 'Invite-only gatherings with local leaders'
            },
            {
                type: 'Behind-the-Scenes Tours',
                details: 'Exclusive access to businesses and facilities'
            },
            {
                type: 'Member Appreciation Nights',
                details: 'Celebrate member contributions'
            }
        ],
        date: 'July 27, 2026 at 12:00 hour'
    },

    {
        eventName: 'Revenue-Generating',
        activities: [
            {
                type: 'Vendor Fairs',
                details: 'Charge booth fees for members to sell products'
            },
            {
                type: 'Ticketed Speaker Series',
                details: 'Host experts and sell tickets'
            },
            {
                type: 'Exclusive Product Launch',
                details: 'Host product launches for members'
            }
        ],
        date: 'July 28, 2026 at 12:00 hour'
    }
]

const eventHighlight = document.querySelector(".event-highlight");

createEventCard(events);

function createEventCard(events) {
    events.forEach(event => {
        let eventCard = document.createElement("section");
        let eventName = document.createElement("h3");
        eventName.textContent = event.eventName;

        let activities = document.createElement("li");
        event.activities.forEach(activity => {
            activities.innerHTML += `<strong>${activity.type}:</strong> ${activity.details} <br>`;
        });
       

        let date = document.createElement("p");
        date.innerHTML = `<span><strong>Event Holds on:</strong>${event.date}</span>`;

        eventCard.append(eventName, activities, date);
        
        eventHighlight.appendChild(eventCard);

    });
}

