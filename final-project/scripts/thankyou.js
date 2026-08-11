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
<p> <strong>Client's Name (Title ):</strong> ${formInformation.get('firstName')} ${formInformation.get('lastName')} (${formInformation.get('title')})</p>
<p> <strong>Email Address:</strong> ${formInformation.get('email')}</p>
<p> <strong>Telephone Number:</strong> ${formInformation.get('telephone')}</p>
<p><strong>Name of Organization</strong>: ${formInformation.get('organizationName')}</p>
<p> <strong>Services Required:</strong> ${formInformation.get('product')}</p>
<p> <strong>Business / Organization Description:</strong> ${formInformation.get('description')}</p>
<p> <strong>RFI Submitted on:</strong> ${formInformation.get('timestamp')}</p>
`;





