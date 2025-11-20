/**
 * Portfolio Interactive Features
 * Handles mobile menu, navigation effects, and email copy functionality
 */

// Mobile Menu Toggle
function initializeMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = menu.querySelectorAll('a');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// Sticky Navbar Glass Effect on Scroll
function initializeNavbarEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = "rgba(2, 6, 23, 0.9)";
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.background = "rgba(2, 6, 23, 0.8)";
        }
    });
}

// Copy Email Functionality
function copyEmail() {
    const email = document.getElementById('email-text').innerText;
    const tooltip = document.getElementById('copy-tooltip');
    
    // Fallback for clipboard API
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        tooltip.innerText = "Copied!";
        setTimeout(() => {
            tooltip.innerText = "Copy";
        }, 2000);
    } catch (err) {
        console.error('Unable to copy', err);
    }
    
    document.body.removeChild(textArea);
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    initializeNavbarEffects();
});
