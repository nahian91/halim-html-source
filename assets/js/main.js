$(document).ready(function(){

    /* Main Slider Active */
    $(".sliders").owlCarousel({
        'items': 1,
        'loop': true,
        'autoplay': true
    });

    /* Testimonials Active */
    $(".testimonials").owlCarousel({
        'items': 3,
        'loop': true,
        'autoplay': true,
        'margin' : 30,
        'center' : true
    });

    /* CounterUp Active */
    $('.counter').counterUp();
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