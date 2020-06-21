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
    $('.dropdown-menu show').on('click', function () {
        $(this).toggleClass('open');
    });
    $('.dropdown-menu show').on('click', function (e) {
        $(this).parents('.dropdown-menu').removeClass('open');
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
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(window).on('scroll', function () {
                if ($('#navbars-menu').css('display') == 'block'
                    && window.scrollY > 250) {
                    window.scrollTo(0, 250);
                }
            });
        }


    });
    if (typeof universalParallax !== 'undefined') {
        new universalParallax().init();
    }


})(jQuery);

nunjucks.configure({ autoescape: true });

function disableScroll() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return;
    }
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