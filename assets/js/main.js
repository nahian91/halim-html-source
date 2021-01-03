$(document).ready(function(){

    /* Main Slider Active */
    $(".owl-carousel").owlCarousel({
        'items': 1,
        'loop': true,
        'autoplay': true
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