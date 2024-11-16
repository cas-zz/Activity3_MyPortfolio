const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {

    sidebar.classList.toggle('open');
});

document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', (event) => {
        if (link.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            sidebar.classList.remove('open');
        }
    });
});
