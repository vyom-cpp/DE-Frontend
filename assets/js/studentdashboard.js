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

// Alert when clicking on "Scan QR"
$('#scan-qr').on('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    alert('This site is requesting access to your camera.');
});