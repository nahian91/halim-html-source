$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        'items': 1,
        'loop': true,
        'autoplay': true
    });
});

$(window).load(function () {

    /* Sticky Header
    ============================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
            $('.header-area').addClass("sticky");
        } else {
            $('.header-area').removeClass("sticky");
        }
    });
});