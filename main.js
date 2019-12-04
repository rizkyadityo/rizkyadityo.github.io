$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#bttop').fadeIn();
        } else {
            $('#bttop').fadeOut();
        }
    });

    $("#bttop").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
})