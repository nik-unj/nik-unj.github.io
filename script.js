// Project data
const projects = [
    {
        id: 1,
        title: "Safely: Fleet Safety",
        description: "Built Safely, a fleet safety and driver behavior management app for managers and drivers. Developed real-time dashboards and driver analytics for performance and incident insights.",
        image: "image/safely.png",
        technologies: ["Flutter", "Firebase", "GetX"],
        appStoreLink: "https://apps.apple.com/in/app/safely-fleet-safety/id6473027789",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.drivesafely"
    },
    {
        id: 2,
        title: "H.E.L.P",
        description: "Developed a mobile application focused on promoting personal safety and legal awareness with law enforcement. The app features real-time AI-powered legal guidance.",
        image: "image/help.png",
        technologies: ["Flutter", "GetX", "RevenueCat", "Stripe"],
        appStoreLink: "https://apps.apple.com/in/app/h-e-l-p-app/id6739699656",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.help.network"
    },
    {
        id: 3,
        title: "Clear Commish",
        description: "Selling Agents are able to record what Buyer’s Commission is available for all properties that they list. Buying Agents can easily search for a property and see what commission is available.",
        image: "image/clearcommish.png",
        technologies: ["Flutter", "GetX", "Maps API"],
        appStoreLink: "https://apps.apple.com/us/app/clear-commish/id6740223081?platform=iphone",
    },
];

// Experience data
const experiences = [
    {
        id: 1,
        position: "Flutter Developer",
        company: "AV Devs Solutions",
        period: "July 2024 - Present",
        responsibilities: [
            "Developed 5+ mobile applications with Flutter from concept to deployment",
            "Collaborated with design teams to implement pixel-perfect UI/UX",
            "Integrated multiple third-party APIs and services (payment gateways, maps, social auth)",
            "Managed complete app lifecycle from requirement gathering to deployment",
            "Optimized app performance for low-end devices, increasing user retention by 25%"
        ]
    },
    {
        id: 3,
        position: "Intern Mobile Developer",
        company: "Niyantras",
        period: "January 2024 - April 2024",
        responsibilities: [
            "Specialized in cross-platform development with Flutter after its stable release",
            "Maintained ongoing client relationships and provided technical support"
        ]
    }
];

// Education data
const educations = [
    {
        id: 1,
        degree: "Master of Computer Applications",
        institution: "Maharaja Sayajirao University of Baroda",
        period: "2022 - 2024",
        description: "Specialized in Mobile Computing and Human-Computer Interaction with a focus on building efficient, user-friendly applications.",
        topics: ["Mobile Architecture", "UI/UX Design", "Software Engineering"]
    },
    {
        id: 2,
        degree: "Bachelor of Computer Applications",
        institution: "Maharaja Sayajirao University of Baroda",
        period: "2019 - 2022",
        description: "Strong foundation in computer science principles, algorithms, data structures, and software development methodologies.",
        topics: ["Programming", "Algorithms", "Database Systems"]
    }
];

// Certification data
const certifications = [
    {
        id: 1,
        title: "Flutter & Dart - The Complete Guide",
        provider: "Udemy",
        date: "Completed March 2022",
        icon: "fas fa-code"
    },
];

// DOM elements
const header = document.getElementById('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-link');
const projectsContainer = document.getElementById('projects-container');
const experienceTimeline = document.getElementById('experience-timeline');
const educationContainer = document.getElementById('education-container');
const certificationContainer = document.getElementById('certification-container');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const currentYearElement = document.getElementById('current-year');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    currentYearElement.textContent = new Date().getFullYear();

    // Initialize sections
    renderProjects();
    renderExperience();
    renderEducation();
    renderCertifications();
    setupFormHandling();
    setupScrollAnimation();
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    // Update icon
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Mobile menu link click handling
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Scroll handling for header
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Render projects to the DOM
function renderProjects() {
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';

        let linksHTML = '';

        // GitHub link
        // linksHTML += `<a href="${project.githubLink}" class="project-link"><i class="fab fa-github"></i> View Code</a>`;

        // Demo link (if exists)
        if (project.demoLink) {
            linksHTML += `<a href="${project.demoLink}" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
        }

        // Play Store link (if exists)
        if (project.playStoreLink) {
            linksHTML += `<a href="${project.playStoreLink}" class="project-link"><i class="fab fa-google-play"></i> Play Store</a>`;
        }

        // App Store link (if exists)
        if (project.appStoreLink) {
            linksHTML += `<a href="${project.appStoreLink}" class="project-link"><i class="fab fa-app-store-ios"></i> App Store</a>`;
        }

        projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title} App Interface" class="project-image">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${linksHTML}
        </div>
      </div>
    `;

        projectsContainer.appendChild(projectElement);
    });
}

// Render experience to the DOM
function renderExperience() {
    experienceTimeline.innerHTML = '';

    experiences.forEach((exp, index) => {
        const expElement = document.createElement('div');
        expElement.className = 'timeline-item';

        expElement.innerHTML = `
      <div class="timeline-marker">
        <i class="fas fa-briefcase"></i>
      </div>
      <div class="timeline-content">
        <h3 class="timeline-position">${exp.position}</h3>
        <p class="timeline-company">${exp.company}</p>
        <p class="timeline-period">${exp.period}</p>
        <ul class="timeline-responsibilities">
          ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
      </div>
    `;

        experienceTimeline.appendChild(expElement);
    });
}

// Render education to the DOM
function renderEducation() {
    educationContainer.innerHTML = '';

    educations.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.className = 'education-item';

        eduElement.innerHTML = `
      <h4 class="education-degree">${edu.degree}</h4>
      <p class="education-institution">${edu.institution}</p>
      <p class="education-period">${edu.period}</p>
      <p class="education-description">${edu.description}</p>
      <div class="education-topics">
        ${edu.topics.map(topic => `<span class="education-topic">${topic}</span>`).join('')}
      </div>
    `;

        educationContainer.appendChild(eduElement);
    });
}

// Render certifications to the DOM
function renderCertifications() {
    certificationContainer.innerHTML = '';

    certifications.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.className = 'certification-item';

        certElement.innerHTML = `
      <div class="certification-icon">
        <i class="${cert.icon}"></i>
      </div>
      <div class="certification-content">
        <h4 class="certification-title">${cert.title}</h4>
        <p class="certification-provider">${cert.provider}</p>
        <p class="certification-date">${cert.date}</p>
      </div>
    `;

        certificationContainer.appendChild(certElement);
    });
}

// Set up form handling
function setupFormHandling() {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.classList.remove('visible');
            el.textContent = '';
        });

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form
        let isValid = true;

        if (name.length < 2) {
            showError('name-error', 'Name must be at least 2 characters');
            isValid = false;
        }

        if (!isValidEmail(email)) {
            showError('email-error', 'Please enter a valid email address');
            isValid = false;
        }

        if (subject.length < 5) {
            showError('subject-error', 'Subject must be at least 5 characters');
            isValid = false;
        }

        if (message.length < 10) {
            showError('message-error', 'Message must be at least 10 characters');
            isValid = false;
        }

        if (isValid) {
            // Show sending state
            document.getElementById('submit-text').classList.add('hidden');
            document.getElementById('submit-sending').classList.remove('hidden');

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Hide sending state
                document.getElementById('submit-text').classList.remove('hidden');
                document.getElementById('submit-sending').classList.add('hidden');

                // Reset form
                contactForm.reset();

                // Show success toast
                showToast();
            }, 1000);
        }
    });
}

// Show error message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('visible');
}

// Validate email format
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Show toast notification
function showToast() {
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Set up scroll animations
function setupScrollAnimation() {
    const fadeElements = document.querySelectorAll('.section-fade');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}