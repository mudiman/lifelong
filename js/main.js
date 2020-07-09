(function ($) {
    $('.navbar-icon').on('click', function () {
        $('#navbars-menu').toggle();
        $('.navbar-icon-close').css('display', 'inline-block');
        $('.navbar-icon').hide();
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            toggleBodyScroll();
        }
    });
    $('.navbar-icon-close').on('click', function () {
        $('#navbars-menu').toggle();
        $('.navbar-icon-close').hide();
        $('.navbar-icon').show();
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            toggleBodyScroll();
        }
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

function toggleBodyScroll() {
    //window.onscroll = function() {};
    if($('.navbar-mobile').is(':visible'))
    {
        $('body').addClass("fixedPosition");
    }
    else
    {
        $('body').removeClass("fixedPosition");
    }
}
