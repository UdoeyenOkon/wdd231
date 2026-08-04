// const enquiriesDisplay = document.querySelector();
let numEnquiries = (window.localStorage.getItem("numEnquiries-Is")) || 0;

// if (numEnquiries !== 0) {
//     enquiriesDisplay.textContent = numEnquiries;
// }
// else {
//     enquiriesDisplay.textContent = `This is your first enquiry!`;
// }
numEnquiries++;
localStorage.setItem("numEnquiries-Is", numEnquiries);



const formInformation = new URLSearchParams(window.location.search);

document.querySelector("#form-info").innerHTML = `
<p> <strong>Applicant Name (Title ):</strong> ${formInformation.get('firstName')} ${formInformation.get('lastName')} (${formInformation.get('title')})</p>
<p> <strong>Email Address:</strong> ${formInformation.get('email')}</p>
<p> <strong>Telephone Number:</strong> ${formInformation.get('telephone')}</p>
<p><strong>Name of Organization</strong>: ${formInformation.get('organizationName')}</p>
<p> <strong>Membership Level:</strong> ${formInformation.get('level')}</p>
<p> <strong>Business / Organization Description:</strong> ${formInformation.get('description')}</p>
<p> <strong>Registration Requested on:</strong> ${formInformation.get('timestamp')}</p>
`;



let current = Date.now(); // current time
let previousVisit = window.localStorage.getItem("lastVisit"); // get previous visit time
localStorage.setItem("lastVisit", current); // store current time for next visit

if (!previousVisit) {
    console.log("This is your first visit");
} else {
    let timeDifference = (current - previousVisit) / 86400000; // calculate difference in days: 1000*60-second*00-minutes*24-hours
    if (timeDifference < 1) {
        console.log("You returned so soon");
    } else if (timeDifference === 1) {
        console.log("It has been 1 day since your last visit");
    } else {
        console.log(`Your last visit was ${timeDifference.toFixed(0)} days ago`);
    }
}





