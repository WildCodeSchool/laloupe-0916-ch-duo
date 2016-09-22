$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > $('#scrollspy').height()) {
            $('#push').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < $('#scrollspy').height()) {
            $('#push').removeClass('navbar-fixed');
        }
    });
});
