// Toggle Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Chatbot Toggle
const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotContent = document.querySelector('.chatbot-content');

chatbotToggle.addEventListener('click', () => {
    chatbotContent.classList.toggle('hidden');
});

// Placeholder for Disease Detection Form Submission
document.querySelector('.cta-primary').addEventListener('click', () => {
    alert('Redirecting to Disease Detection Form...');
    // Here you would typically redirect to a form page or open a modal
});

// Placeholder for Appointment Booking
document.querySelector('.cta-secondary').addEventListener('click', () => {
    alert('Redirecting to Appointment Booking Form...');
    // Here you would typically redirect to an appointment booking page or open a modal
});
