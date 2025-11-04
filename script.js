document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('darkModeToggle');
    const toggleIcon = toggleButton.querySelector('i');
    const form = document.getElementById('contactForm');
    const navLinks = document.querySelectorAll('.smooth-scroll');

    // Función para aplicar el modo oscuro
    function applyDarkMode(isDark) {
        if (isDark) {
            body.classList.add('dark-mode'); // 🔄 aquí cambiamos
            body.classList.remove('bg-light');
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode'); // 🔄 aquí también
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    // 1. Auto-detectar Preferencia del Sistema y Local Storage
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedMode = localStorage.getItem('darkMode');

    if (storedMode === 'enabled') {
        applyDarkMode(true);
    } else if (storedMode === 'disabled') {
        applyDarkMode(false);
    } else if (prefersDark) {
        applyDarkMode(true);
    } else {
        applyDarkMode(false);
    }

    // 2. Toggle Mode Dark/Light
    toggleButton.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode'); // 🔄 cambiamos esto
        applyDarkMode(!isDark);
    });

    // 3. Smooth Scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Cierra el navbar en móviles
            const navbarCollapse = document.getElementById('navbarNav');
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        });
    });

    // 4. Form Submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("¡Mensaje enviado! 📧 Gracias por contactarme, Juan Pérez te responderá pronto.");
        form.reset();
    });
});
