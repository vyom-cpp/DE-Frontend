document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', function() {
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        } else {
            navMenu.classList.add('show');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }
    });

    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            navMenu.classList.remove('show');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navMenu.classList.remove('show');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});

// Smooth scrolling for anchor links
// Smooth scrolling for anchor links
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});