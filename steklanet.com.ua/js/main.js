jQuery(function ($) {
    'use strict',

    // all Parallax Section
    $(window).load(function () {
        'use strict',
        $("#services").parallax("50%", 0.3);
        $("#clients").parallax("50%", 0.3);
    });

    // Contact form validation
    var contactForm = $('#contact-form-section');
    var lastMessage = $('.last_message');
    var errorMessage = $('.error_message');
    $('.btn-send').on('click', function (e) {
        'use strict';
        var spinner = new Spinner().spin();
        $.ajax({
            url: '/steklanet.com.ua/send-mail.php',
            type: 'POST',
            dataType: 'json',
            data: {
                name: $('.name-field').val(),
                phone: $('.mail-field').val(),
                message: $('.message-field').val()
            },
            success: function (data) {
                contactForm.addClass('none');
                lastMessage.removeClass('none');
                spinner.stop();
            },
            error: function (data) {
                errorMessage.removeClass('none');
                console.log(data);
                spinner.stop();
            }
        });
        return false;
    });

    $('.btn-default').on('click', function (e) {
        'use strict';
        lastMessage.addClass('none');
        errorMessage.addClass('none');
        contactForm.removeClass('none');
        $('#contact-form').trigger('reset');
    })

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

// Preloder script
jQuery(window).load(function () {
    'use strict';
    $(".preloader").delay(1600).fadeOut("slow").remove();
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