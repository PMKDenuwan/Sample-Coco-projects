// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Chatbot Toggle
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
    });

    // Simulate Risk Map Hover
    const riskMap = document.getElementById('riskMap');
    riskMap.addEventListener('mouseover', (e) => {
        // This would be replaced with actual map implementation
        console.log('Map interaction detected');
    });

    // Initialize Simple Carousel
    let currentTestimonial = 0;
    function cycleTestimonials() {
        const testimonials = document.querySelectorAll('.testimonial');
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }
    setInterval(cycleTestimonials, 5000);

    // Basic Chatbot Interaction
    const chatContent = document.getElementById('chatContent');
    const predefinedQuestions = [
        'How to spot red beetle damage?',
        'What to do if my tree is infected?',
        'Emergency contact numbers'
    ];

    predefinedQuestions.forEach(question => {
        const btn = document.createElement('button');
        btn.className = 'chat-question';
        btn.textContent = question;
        btn.addEventListener('click', () => handleChatQuestion(question));
        chatContent.appendChild(btn);
    });

    function handleChatQuestion(question) {
        // This would be connected to chatbot logic
        console.log('Question asked:', question);
    }
});