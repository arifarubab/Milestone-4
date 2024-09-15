
interface Resume {
    name: string;
    email: string;
    contact: string;
    education: string;
    experience: string;
    skills: string;
}

// Handle form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault();

    // Collecting form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resume: Resume = { name, email, contact, education, experience, skills };

    // Generate the resume
    generateEditableResume(resume);
}

// Function to generate the editable resume
function generateEditableResume(resume: Resume): void {
    const resumeOutput = `
        <h2 contenteditable="true">${resume.name}'s Resume</h2>
        <p contenteditable="true"><strong>Email:</strong> ${resume.email}</p>
        <p contenteditable="true"><strong>Phone:</strong> ${resume.contact}</p>
        <h3>Education</h3>
        <p contenteditable="true">${resume.education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${resume.experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${resume.skills}</p>
    `;

    // Insert the resume into the output div
    const outputDiv = document.getElementById('resumeOutput') as HTMLElement;
    outputDiv.innerHTML = resumeOutput;
}

// Add event listener to form
const form = document.getElementById('resumeForm') as HTMLFormElement;
form.addEventListener('submit', handleFormSubmit);

const pdf = require('html-pdf');

app.get('/:username/resume/download', async (req, res) => {
    const username = req.params.username;
    const userResume = await Resume.findOne({ username });
    
    if (userResume) {
        const html = `<h1>${username}'s Resume</h1><p>${userResume.resumeContent}</p>`;
        pdf.create(html).toStream((err, stream) => {
            if (err) return res.status(500).send(err);
            res.setHeader('Content-Type', 'application/pdf');
            stream.pipe(res);
        });
    } else {
        res.status(404).send('Resume not found');
    }
});


