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

    // init Isotope
    var $grid = $('.portfolio-items').isotope();
    // filter items on menu click
    $('.portfolio-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // filter items menu active
    $('.portfolio-menu').on( 'click', 'li', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
});


$(window).load(function(){
    $(this).on('scroll', function(){
        if($(this).scrollTop() > 50){
            $('.header-area').addClass('sticky');
        }
        else{
            $('.header-area').removeClass('sticky');
        }
    })
})
