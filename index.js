
    document.querySelector('.scroll-to-about').addEventListener('click', function(e) {
        e.preventDefault();
    const aboutSection = document.querySelector('#about1');
    aboutSection.scrollIntoView({behavior: 'smooth' });
        });

    document.querySelector('.scroll-to-contact').addEventListener('click', function(e) {
        e.preventDefault();
    const contactSection = document.querySelector('#contact1');
    contactSection.scrollIntoView({behavior: 'smooth' });
        });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameValue = nameInput.value.trim();

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailValue = emailInput.value.trim();

    if (!/^[a-zA-Z\s]+$/.test(nameValue)) {
        nameError.textContent = 'Please enter alphabetic characters only.';
    return;
            } else {
        nameError.textContent = '';
            }

    if (!/^[^\s@]+@(gmail|email|yahoo)+\.(in|com)$/.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address';
    return;
            } else {
        emailError.textContent = '';
            }

    // Simulate form submission
    gsap.to(this, {
        opacity: 0.5,
    duration: 0.3,
                onComplete: () => {
        // Show success message
        this.innerHTML = '<h3>Thank you for your message!</h3>';
    gsap.to(this, {opacity: 1, duration: 0.3});
                }
            });
        });

    document.getElementById('name').addEventListener('input', function() {
            const nameError = document.getElementById('nameError');
    if (!/^[a-zA-Z\s]*$/.test(this.value)) {
        nameError.textContent = 'Please enter alphabetic characters only.';
            } else {
        nameError.textContent = '';
            }
        });

    document.getElementById('email').addEventListener('input', function() {
            const emailError = document.getElementById('emailError');
    if (!/^[^\s@]+@(gmail|email|yahoo)+\.(in|com)$/.test(this.value)) {
        emailError.textContent = 'Please enter a valid email address';
            } else {
        emailError.textContent = '';
            }
        });
