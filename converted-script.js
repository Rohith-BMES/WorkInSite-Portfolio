// Navigation bar
// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========== ACTIVE LINK HIGHLIGHTING & MOBILE MENU CLOSE ==========
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            const navbarCollapse = document.getElementById('navbarNav');
            const navbarToggler = document.querySelector('.navbar-toggler');
            
            if (navbarCollapse && navbarToggler && window.innerWidth < 992) {
                // Check if navbar is currently shown
                if (navbarCollapse.classList.contains('show')) {
                    // Use Bootstrap's Collapse API to properly close it
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    } else {
                        // If no instance exists, create one and hide
                        const newCollapse = new bootstrap.Collapse(navbarCollapse, {
                            toggle: false
                        });
                        newCollapse.hide();
                    }
                }
            }
        });
    });
});

// ... rest of your converted-script.js code ...

document.addEventListener('DOMContentLoaded', () => {

    // ========== TYPING ANIMATION ==========
    const firstLineText = "WorkInSite";
    const secondLinePrefix = "Your Site's ";
    const secondLineHighlight = "Insight";
    
    let firstLineIndex = 0;
    let secondLineIndex = 0;
    let isDeleting = false;
    let firstLineDone = false;

    const firstLineEl = document.getElementById('first-line');
    const secondLineEl = document.getElementById('second-line');

    function typeFirstLine() {
        if (firstLineIndex < firstLineText.length) {
            firstLineEl.textContent = firstLineText.substring(0, firstLineIndex + 1);
            firstLineIndex++;
            setTimeout(typeFirstLine, 100);
        } else {
            firstLineDone = true;
            firstLineEl.classList.remove('typing-text');
            setTimeout(typeSecondLine, 500);
        }
    }

    function typeSecondLine() {
        const fullText = secondLinePrefix + secondLineHighlight;
        
        if (!isDeleting && secondLineIndex <= fullText.length) {
            let currentText = fullText.substring(0, secondLineIndex);
            
            if (secondLineIndex <= secondLinePrefix.length) {
                secondLineEl.innerHTML = `<span class="typing-text">${currentText}</span>`;
            } else {
                const prefixPart = secondLinePrefix;
                const highlightPart = currentText.substring(secondLinePrefix.length);
                secondLineEl.innerHTML = `${prefixPart}<span class="hero-highlight typing-text">${highlightPart}</span>`;
            }
            
            secondLineIndex++;
            setTimeout(typeSecondLine, 100);
        } else if (!isDeleting && secondLineIndex > fullText.length) {
            setTimeout(() => {
                isDeleting = true;
                typeSecondLine();
            }, 2000);
        } else if (isDeleting && secondLineIndex > 0) {
            let currentText = fullText.substring(0, secondLineIndex - 1);
            
            if (secondLineIndex - 1 <= secondLinePrefix.length) {
                secondLineEl.innerHTML = `<span class="typing-text">${currentText}</span>`;
            } else {
                const prefixPart = secondLinePrefix;
                const highlightPart = currentText.substring(secondLinePrefix.length);
                secondLineEl.innerHTML = `${prefixPart}<span class="hero-highlight typing-text">${highlightPart}</span>`;
            }
            
            secondLineIndex--;
            setTimeout(typeSecondLine, 50);
        } else if (isDeleting && secondLineIndex === 0) {
            isDeleting = false;
            setTimeout(typeSecondLine, 500);
        }
    }

    // Start typing animation if elements exist
    if (firstLineEl && secondLineEl) {
        typeFirstLine();
    }

    // ========== DEVICE DETECTION AND DOWNLOAD LINKS ==========
    const detectionContainer = document.getElementById('detection-container');
    const iosBtn = document.getElementById('ios-download-btn');
    const androidBtn = document.getElementById('android-download-btn');

    const userAgent = navigator.userAgent.toLowerCase();
    let osDetected = 'desktop';

    if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        osDetected = 'ios';
    } else if (userAgent.includes('android')) {
        osDetected = 'android';
    }

    let messageHTML;
    let alertClass = '';

    if (detectionContainer) {
        if (osDetected === 'ios') {
            messageHTML = `
                <i class="fas fa-check-circle me-2"></i>
                <span>iOS detected. Tap the Yellow button!</span>
            `;
            alertClass = 'alert-success text-success border-success';

            if (iosBtn) {
                iosBtn.style.transform = 'scale(1.05)';
                iosBtn.style.boxShadow = '0 0 15px rgba(255, 213, 79, 0.6)';
            }

        } else if (osDetected === 'android') {
            messageHTML = `
                <i class="fas fa-check-circle me-2"></i>
                <span>Android detected. Tap the Green button!</span>
            `;
            alertClass = 'alert-success text-success border-success';

            if (androidBtn) {
                androidBtn.style.transform = 'scale(1.05)';
                androidBtn.style.boxShadow = '0 0 15px rgba(46, 125, 50, 0.6)';
            }

        } else {
            messageHTML = `
                <i class="fas fa-laptop me-2"></i>
                <span>Desktop detected - Choose your mobile platform below</span>
            `;
            alertClass = 'alert-warning text-dark border-warning';
        }

        detectionContainer.innerHTML = `
            <div class="detection-box alert ${alertClass} d-inline-flex align-items-center px-4 py-3 m-0" role="alert">
                ${messageHTML}
            </div>
        `;
    }

    if (iosBtn) {
        iosBtn.href = "https://appstore.com/workinsite";
    }
    if (androidBtn) {
        androidBtn.href = "https://play.google.com/store/apps/details?id=com.ilovepdf.www&hl=en_IN";
    }

    // iOS "Coming Soon" Logic
    if (iosBtn) {
        iosBtn.addEventListener('click', function(event) {
            event.preventDefault();
            alert("WorkInSite is coming soon to the Apple App Store!");
        });
    }

    // ========== FAQ SECTION (BOOTSTRAP ACCORDION) ==========
    // const myAccordion = document.getElementById('workInSiteFaq');

    // if (myAccordion) {
    //     myAccordion.addEventListener('show.bs.collapse', function (event) {
    //         event.target.closest('.accordion-item').classList.add('active-shadow');
    //     });

    //     myAccordion.addEventListener('hide.bs.collapse', function (event) {
    //         event.target.closest('.accordion-item').classList.remove('active-shadow');
    //     });
    // }

    // ========== CONTACT FORM LOGIC ==========
    const contactForm = document.getElementById('contactForm');
    const messageInput = document.getElementById('message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const form = this;
            const message = document.getElementById('message');

            if (message.value.trim().length < 10) {
                message.setCustomValidity('Message must be at least 10 characters long');
            } else {
                message.setCustomValidity('');
            }

            if (!form.checkValidity()) {
                e.stopPropagation();
                form.classList.add('was-validated');
                return;
            }

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subjectElement = document.getElementById('subject');
            const messageText = message.value;

            const subjectText = subjectElement.options[subjectElement.selectedIndex].text;

            const mailtoEmail = 'rohith@bmesolutions.in';
            const mailtoSubject = encodeURIComponent(`Contact Form: ${subjectText}`);
            const mailtoBody = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Phone: ${phone || 'Not provided'}\n` +
                `Subject: ${subjectText}\n\n` +
                `Message:\n${messageText}`
            );

            const mailtoLink = `mailto:${mailtoEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
            window.location.href = mailtoLink;

            const successMsg = document.getElementById('successMessage');
            if (successMsg) {
                successMsg.classList.remove('d-none');

                form.reset();
                form.classList.remove('was-validated');

                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

                setTimeout(() => {
                    successMsg.classList.add('d-none');
                }, 5000);
            }
        });
    }
    
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            this.setCustomValidity('');
        });
    }

    // Spotlight effect following mouse
document.querySelectorAll('.spotlight-bg').forEach(spotlight => {
    spotlight.parentElement.addEventListener('mousemove', (e) => {
        const rect = spotlight.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        spotlight.style.setProperty('--mouse-x', x + '%');
        spotlight.style.setProperty('--mouse-y', y + '%');
    });
});
});
// Scroll to Top Button Functionality
(function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Show/hide button based on scroll position
    function toggleScrollButton() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    }
    
    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Event listeners
    window.addEventListener('scroll', toggleScrollButton);
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    // Initial check
    toggleScrollButton();
})();