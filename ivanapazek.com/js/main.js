jQuery(function ($) {
    'use strict',
    // Navigation Scroll
    $(window).scroll(function (event) {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navbar-collapse').find('.scroll a').each(function () {
            contentTop.push($($(this).attr('href')).offset().top);
            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
        });
        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navbar-collapse li.scroll')
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        });
    });
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    var delay = isMobile.any() ? 0 : 30000;
    setTimeout(function () {
        $('._form_1, .form_overlay').fadeIn();
        $('._form_1').append('<span class="closeModal">X</span>');
        $('.closeModal').on('click', function () {
          $('._form_1, .form_overlay').fadeOut();
        });
    }, delay);
    $('.form_overlay').on('click', function () {
        $('._form_1, .form_overlay').fadeOut();
    })
    $('.navbar-collapse ul li a, .arrow_wrapper a').click(function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 79
        }, 1000);
        return false;
    });
    var arrow = $('.arrow');
    var down = $('.down');
    var immut = $('.immut');
    immut.hover(function () {
        immut.removeClass('arrow');
        down.removeClass('none');
    }, function () {
        immut.addClass('arrow');
        down.addClass('none');
    });
});

//Preloder script
jQuery(window).load(function () {
    'use strict';
    // Slider Height
    var slideHeight = $(window).height();
    $('#home .carousel-inner .item, #home .video-container').css('height', slideHeight);

    $(window).resize(function () {
        'use strict',
        $('#home .carousel-inner .item, #home .video-container').css('height', slideHeight);
    });
    $(".preloader").delay(1600).fadeOut("slow").remove();
});
