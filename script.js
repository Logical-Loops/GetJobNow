// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Search Functionality
const searchInput = document.querySelector('.search-bar input');
const searchSuggestions = document.querySelector('.search-suggestions');

// Sample job data (in a real application, this would come from a backend)
const jobData = [
    { title: 'Software Engineer', company: 'Tech Corp', location: 'New York' },
    { title: 'Product Manager', company: 'Innovate Inc', location: 'San Francisco' },
    { title: 'Data Scientist', company: 'DataCo', location: 'Boston' },
    // Add more job listings as needed
];

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length < 2) {
        searchSuggestions.style.display = 'none';
        return;
    }

    const matches = jobData.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
        searchSuggestions.innerHTML = matches
            .map(job => `
                <a href="#" class="search-result">
                    <div class="job-title">${job.title}</div>
                    <div class="company">${job.company}</div>
                    <div class="location">${job.location}</div>
                </a>
            `)
            .join('');
        searchSuggestions.style.display = 'block';
    } else {
        searchSuggestions.style.display = 'none';
    }
});

// Close search suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
        searchSuggestions.style.display = 'none';
    }
});

// Job Filter Functionality
const filterSelects = document.querySelectorAll('.filters select');
const jobListings = document.querySelectorAll('.job-listing');

filterSelects.forEach(select => {
    select.addEventListener('change', () => {
        const selectedCategory = document.querySelector('select[name="category"]').value;
        const selectedLocation = document.querySelector('select[name="location"]').value;
        const selectedType = document.querySelector('select[name="type"]').value;

        jobListings.forEach(job => {
            const jobCategory = job.dataset.category;
            const jobLocation = job.dataset.location;
            const jobType = job.dataset.type;

            const categoryMatch = selectedCategory === 'all' || jobCategory === selectedCategory;
            const locationMatch = selectedLocation === 'all' || jobLocation === selectedLocation;
            const typeMatch = selectedType === 'all' || jobType === selectedType;

            if (categoryMatch && locationMatch && typeMatch) {
                job.style.display = 'block';
            } else {
                job.style.display = 'none';
            }
        });
    });
});

// Form Validation
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 