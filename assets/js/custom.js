(function ($) {
  "use strict";

    // START MENU JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.main-nav').addClass('menu-shrink');
        } else {
            $('.main-nav').removeClass('menu-shrink');
        }
    });			

    $('.navbar .navbar-nav li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 50);
        e.preventDefault();
    });

    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });				
    // END MENU JS	

    // Hero Slider
    $(".hero-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
      dots: false,
    });

    // AOS
    AOS.init();

    // Back to top button
    var btn = $('#backToTop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    // PRELOADER
    jQuery(window).on('load',function(){
        jQuery(".preloader-box").fadeOut(500);
    });
    // END PRELOADER

})(jQuery);
