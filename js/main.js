(function ($) {
    $('.navbar-icon').on('click', function () {
        $('#navbars-menu').toggle();
    });
    $('.navbars-menu').on('click', function () {
        $('#navbars-menu').toggle();
    });

    $(document).ready(function () {
        $('.slider').slick({
            infinite: true,
            speed: 300,
            fade: true,
            slidesToShow: 1,
            arrow: false,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 2000,
            adaptiveHeight: true
        });
    });
    if (typeof universalParallax !== 'undefined') {
        new universalParallax().init();
    }

})(jQuery);