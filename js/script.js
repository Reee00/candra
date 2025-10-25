// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.querySelector('.dark-mode-toggle');
    
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = '☀️ Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        btn.textContent = '🌙 Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle').textContent = '☀️ Light Mode';
}

// Form Submit Handler
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Terima kasih ${name}!\n\nPesan Anda telah diterima:\n"${message}"\n\nKami akan menghubungi Anda di ${email} segera.`);
    
    // Reset form
    event.target.reset();
}

// Animate skill bars on page load
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    setTimeout(() => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 500);
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('active');
    }
});