// Dark Mode Toggle with LocalStorage
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
});
