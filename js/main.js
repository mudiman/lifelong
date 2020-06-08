(function ($) {
    $('.navbar-icon').on('click', function () {
        $('#navbars-menu').toggle();
        $('.navbar-icon-close').show();
        $('.navbar-icon').hide();
    });
    $('.navbar-icon-close').on('click', function () {
        $('#navbars-menu').toggle();
        $('.navbar-icon-close').hide();
        $('.navbar-icon').show();
    });
    $('.dropdown-toggle').on('click', function () {
        $(this).toggleClass('open');
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