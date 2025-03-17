// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Chatbot Toggle
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatWindow = document.querySelector('.chatbot-window');
    
    chatbotToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.createElement('div');
    mobileMenuButton.className = 'mobile-menu-toggle';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.nav-container').appendChild(mobileMenuButton);

    mobileMenuButton.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Card Hover Effects
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });
});