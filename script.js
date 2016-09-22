$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > $('#scrollspy').height()) {
            $('#push').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < $('#scrollspy').height()) {
            $('#push').removeClass('navbar-fixed');
        }
    });

    $('.carousel.carousel-slider').carousel({
        full_width: true
    });
    var first = true;
    autoplay1();

    function autoplay1() {
        if (first == true) {
            first = false;
        } else {
            $('.carousel').carousel('next');
        }
        setTimeout(autoplay1, 6000);
    }

    $('#slider2').carousel();
    var second = true;
    autoplay2();

    function autoplay2() {
        if (second == true) {
            second = false;
        } else {
            $('#slider2').carousel('next');
        }
        setTimeout(autoplay2, 3000);
    }
});
