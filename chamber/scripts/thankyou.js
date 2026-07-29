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
const submissionTime = formInformation.get('timestamp');

document.querySelector("#form-info").innerHTML = `
<p> <strong>Applicant Name (Title ):</strong> ${formInformation.get('firstName')} ${formInformation.get('lastName')} (${formInformation.get('title')})</p>
<p> <strong>Email Address:</strong> ${formInformation.get('email')}</p>
<p> <strong>Telephone Number:</strong> ${formInformation.get('telephone')}</p>
<p><strong>Name of Organization</strong>: ${formInformation.get('organizationName')}</p>
<p> <strong>Membership Level:</strong> ${formInformation.get('level')}</p>
<p> <strong>Business / Organization Description:</strong> ${formInformation.get('description')}</p>
<p> <strong>Registration Requested on:</strong> ${submissionTime}</p>
`;

