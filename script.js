Define;
the;
Resume;
interface;
// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Collecting form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resume = { name: name, email: email, contact: contact, education: education, experience: experience, skills: skills };
    // Generate the resume
    generateEditableResume(resume);
}
// Function to generate the editable resume
function generateEditableResume(resume) {
    var resumeOutput = "\n        <h2 contenteditable=\"true\">".concat(resume.name, "'s Resume</h2>\n        <p contenteditable=\"true\"><strong>Email:</strong> ").concat(resume.email, "</p>\n        <p contenteditable=\"true\"><strong>Phone:</strong> ").concat(resume.contact, "</p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(resume.education, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(resume.experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(resume.skills, "</p>\n    ");
    // Insert the resume into the output div
    var outputDiv = document.getElementById('resumeOutput');
    outputDiv.innerHTML = resumeOutput;
}
// Add event listener to form
var form = document.getElementById('resumeForm');
form.addEventListener('submit', handleFormSubmit);
