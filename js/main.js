(function ($) {
    $('.navbar-icon').on('click', function () {
        $('#navbars-menu').toggle();
        $('.navbar-icon-close').css('display', 'inline-block');
        $('.navbar-icon').hide();
        disableScroll();
    });
    $('.navbar-icon-close').on('click', function () {
        $('#navbars-menu').toggle();
        $('.navbar-icon-close').hide();
        $('.navbar-icon').show();
        enableScroll();
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


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}