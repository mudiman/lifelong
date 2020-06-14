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

        // setTimeout(function() {
        //     $('[dir="rtl"] .slick-slide').css('float','unset');
        // }, 1000);
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