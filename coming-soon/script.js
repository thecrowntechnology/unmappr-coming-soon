// =====================================
// Email Signup Form Handler
// =====================================

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('emailInput');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = form.querySelector('.submit-btn');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Form submission handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Validate email
        if (!email) {
            showMessage('Please enter your email address.', 'error');
            emailInput.focus();
            return;
        }
        
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            emailInput.focus();
            return;
        }

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate API call (replace with actual API endpoint)
        try {
            await simulateAPICall(email);
            
            // Success
            showMessage('Thank you! We\'ll notify you when we launch.', 'success');
            emailInput.value = '';
            
            // Store email in localStorage for demo purposes
            saveEmail(email);
            
        } catch (error) {
            showMessage('Oops! Something went wrong. Please try again.', 'error');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });

    // Real-time email validation
    emailInput.addEventListener('input', () => {
        // Clear message when user starts typing
        if (formMessage.classList.contains('show')) {
            formMessage.classList.remove('show');
        }
        
        // Remove error border if present
        if (emailInput.value.trim() && emailRegex.test(emailInput.value.trim())) {
            emailInput.style.borderColor = 'var(--primary-brown)';
        } else {
            emailInput.style.borderColor = '';
        }
    });

    // Show message helper function
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message show ${type}`;
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.classList.remove('show');
            }, 5000);
        }
    }

    // Simulate API call (replace with actual API integration)
    function simulateAPICall(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    console.log('Email submitted:', email);
                    resolve();
                } else {
                    reject(new Error('API Error'));
                }
            }, 1500);
        });
    }

    // Save email to localStorage
    function saveEmail(email) {
        const emails = JSON.parse(localStorage.getItem('unmapprEmails') || '[]');
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('unmapprEmails', JSON.stringify(emails));
        }
    }
});

// =====================================
// Smooth Scroll Enhancement
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================================
// Intersection Observer for Animations
// =====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature').forEach(feature => {
    observer.observe(feature);
});

// =====================================
// Sticky Header Effect
// =====================================

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.padding = '1.5rem 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// =====================================
// Keyboard Navigation Enhancement
// =====================================

document.addEventListener('keydown', (e) => {
    // Close messages on Escape key
    if (e.key === 'Escape') {
        const formMessage = document.getElementById('formMessage');
        if (formMessage.classList.contains('show')) {
            formMessage.classList.remove('show');
        }
    }
});

// =====================================
// Performance: Preload fonts
// =====================================

if ('fonts' in document) {
    Promise.all([
        document.fonts.load('400 1rem "Inter"'),
        document.fonts.load('600 1rem "Playfair Display"')
    ]).then(() => {
        document.body.classList.add('fonts-loaded');
    });
}

// =====================================
// Console Easter Egg
// =====================================

console.log('%c🦋 Welcome to Unmappr!', 'font-size: 20px; font-weight: bold; color: #6B4E3D;');
console.log('%cLooking for something? Email us at hello@unmappr.com', 'font-size: 12px; color: #A67C52;');
