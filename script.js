document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section, .skills-container');
    const options = {
        threshold: 0.5
    };
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('hidden');
    });
});
