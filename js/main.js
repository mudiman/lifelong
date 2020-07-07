(function ($) {
    $('.navbar-icon').on('click', function () {
        $('#navbars-menu').toggle();
        $('.navbar-icon-close').css('display', 'inline-block');
        $('.navbar-icon').hide();
    });
    $('.navbar-icon-close').on('click', function () {
        $('#navbars-menu').toggle();
        $('.navbar-icon-close').hide();
        $('.navbar-icon').show();
    });
    $('.dropdown-menu show').on('click', function () {
        $(this).toggleClass('open');
    });
    $('.dropdown-menu show').on('click', function (e) {
        $(this).parents('.dropdown-menu').removeClass('open');
    });
    $(document).ready(function () {
        var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            cssEase: 'linear',
            vertical:true,
            arrows:false,
            speed: 300,
        });
    });
    if (typeof universalParallax !== 'undefined') {
        new universalParallax().init();
    }
})(jQuery);
