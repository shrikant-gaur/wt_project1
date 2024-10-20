document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const resetBtn = document.getElementById('reset-btn');
    const searchInput = document.getElementById('search-input');
    const locationFilter = document.getElementById('location-filter');
    const experienceFilter = document.getElementById('experience-filter');
    const cardsContainer = document.getElementById('cards-container');
    const companyCards = cardsContainer.getElementsByClassName('company-card');
    const themeToggle = document.getElementById('theme-toggle');

    // Set default values
    searchInput.value = '';
    locationFilter.value = '';
    experienceFilter.value = '';

    searchBtn.addEventListener('click', filterCards);
    resetBtn.addEventListener('click', resetFilters);
    searchInput.addEventListener('input', filterCards);
    locationFilter.addEventListener('input', filterCards);
    experienceFilter.addEventListener('change', filterCards);

    function filterCards() {
        const searchTerm = searchInput.value.toLowerCase();
        const locationTerm = locationFilter.value.toLowerCase();
        const experienceTerm = experienceFilter.value.toLowerCase();

        Array.from(companyCards).forEach(card => {
            const jobRole = card.querySelector('.job-role').textContent.toLowerCase();
            const companyName = card.querySelector('.company-name').textContent.toLowerCase();
            const location = card.querySelector('.location').textContent.toLowerCase();
            const experience = card.querySelector('.experience').textContent.toLowerCase();

            const matchesSearch = jobRole.includes(searchTerm) || companyName.includes(searchTerm);
            const matchesLocation = location.includes(locationTerm);
            const matchesExperience = experienceTerm === '' || experience.includes(experienceTerm);

            if (matchesSearch && matchesLocation && matchesExperience) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function resetFilters() {
        searchInput.value = '';
        locationFilter.value = '';
        experienceFilter.value = '';
        filterCards();
    }

    // Reset filters to default values when page is refreshed
    window.addEventListener('load', resetFilters);

    // Theme toggle functionality
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });

    // Set initial theme to dark
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
});

        document.addEventListener('DOMContentLoaded', function() {
            const phrases = document.querySelectorAll('.typewriter');
            let currentIndex = 0;

            function showNextPhrase() {
                phrases[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % phrases.length;
                phrases[currentIndex].style.display = 'block';
                phrases[currentIndex].style.animation = 'typing 1.5s steps(40, end), blink-caret 0.5s step-end infinite';
            }

            function startAnimation() {
                phrases[currentIndex].style.display = 'block';
                phrases[currentIndex].addEventListener('animationend', function handler(e) {
                    if (e.animationName === 'typing') {
                        setTimeout(() => {
                            this.style.animation = 'fadeOut 0.5s forwards';
                            this.addEventListener('animationend', function fadeOutHandler(e) {
                                if (e.animationName === 'fadeOut') {
                                    showNextPhrase();
                                    this.removeEventListener('animationend', fadeOutHandler);
                                }
                            });
                        }, 500);
                        this.removeEventListener('animationend', handler);
                    }
                });
            }

            startAnimation();
            setInterval(startAnimation, 2500); // Restart the loop every 2.5 seconds for a faster animation
        });

        // Loader functionality
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('loader-container').style.display = 'none';
                document.getElementById('dashboard-content').style.display = 'block';
            }, 3000); // 3 seconds delay, adjust as needed
        });