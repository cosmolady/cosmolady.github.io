jQuery(function ($) {
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
      $(window).load(function () {
          'use strict';
            $('.parallax-window').parallax({imageSrc: 'images/bg/divider1.jpg'});
            $('.parallax-window-2').parallax({imageSrc: 'images/bg/divider2.jpg'});
      });
    }
    // feedback form validation
    var feedbackForm = $('#contact-form-section');
    var lastMessage = $('.last_message');
    var errorMessage = $('.error_message');
    $('.btn-send').on('click', function (e) {
        'use strict';
        var name = $('.name-field').val();
        var phone = $('.mail-field').val();
        if (!checkIsEmptyFields(name, phone)) {
            errorMessage.removeClass('none');
            return false;
        }
        $.ajax({
            url: '/xenon-avtors.com.ua/send-mail.php',
            type: 'POST',
            dataType: 'json',
            data: {
                name: name,
                phone: phone,
            },
            success: function (data) {
                feedbackForm.addClass('none');
                lastMessage.removeClass('none');
            },
            error: function (data) {
                console.log(data);
            }
        });
    });

    $('.btn-default').on('click', function (e) {
        'use strict';
        lastMessage.addClass('none');
        errorMessage.addClass('none');
        feedbackForm.removeClass('none');
        $('#feedback-form').trigger('reset');
    });

    $('.form-control').on('focus', function(e){
        errorMessage.addClass('none');
    });

    // Navigation Scroll
    $(window).scroll(function (event) {
        Scroll();
    });

    $('.navbar-collapse ul li a').click(function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 79
        }, 1000);
        return false;
    });
});

function checkIsEmptyFields() {
  'use strict';
    var pattern = /^[\s]+$/;
    for (var i = 0; i < arguments.length; i++) {
        if (!arguments[i]) return false;
        if (pattern.test(arguments[i])) return false;
    }
    return true;
}

jQuery(window).load(function () {
    'use strict';
    // Slider Height
    var slideHeight = $(window).height();
    $('#home .carousel-inner .item, #home .video-container').css('height', slideHeight);

    $(window).resize(function () {
        'use strict',
        $('#home .carousel-inner .item, #home .video-container').css('height', slideHeight);
    });

});


// User define function
function Scroll() {
    var contentTop = [];
    var contentBottom = [];
    var winTop = $(window).scrollTop();
    var rangeTop = 200;
    var rangeBottom = 500;
    $('.navbar-collapse').find('.scroll a').each(function () {
        contentTop.push($($(this).attr('href')).offset().top);
        contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
    })
    $.each(contentTop, function (i) {
        if (winTop > contentTop[i] - rangeTop) {
            $('.navbar-collapse li.scroll')
                .removeClass('active')
                .eq(i).addClass('active');
        }
    })

};


// Skill bar Function

jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
});
