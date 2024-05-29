
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1 // Ajustado para que se active más fácilmente
    };
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); // Deja de observar una vez que es visible
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('hidden');
    });
});
