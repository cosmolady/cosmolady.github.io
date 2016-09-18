jQuery(function ($) {
    'use strict',

    // all Parallax Section
    $(window).load(function () {
        'use strict',
		$("#home").parallax("50%", 0.3);	
    });

    // Navigation Scroll
    $(window).scroll(function (event) {
        Scroll();
    });

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

    var sendForm = $('#contact-form-section');
    var lastMessage = $('.last_message');
    var errorMessage = $('.error_message');
    $('.btn-send').on('click', function (e) {
        var name = $('.name-field').val();
        var email = $('.mail-field').val();
        var message = $('.message-field').val();

        if (checkIsEmptyFields(email)) {
            errorMessage.removeClass('none');
            errorMessage.html("The email field can't be empty");
            $('.mail-field').focus();
            return false;
        }
        if (validateEmail(email)) {
            errorMessage.removeClass('none');
            errorMessage.html("Input the correct email");
            $('.mail-field').focus();
            return false;
        }
        if (checkIsEmptyFields(message)) {
            errorMessage.removeClass('none');
            errorMessage.html("The message can't be empty");
            $('.message-field').focus();
            return false;
        }

        $.ajax({
            url: '/ivanapazek.com.test/send-mail.php',
            type: 'POST',
            dataType: 'json',
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function (data) {
                sendForm.addClass('none');
                lastMessage.removeClass('none');
            },
            error: function (data) {
                console.log(data);
                sendForm.addClass('none');
                lastMessage.removeClass('none');
            }
        });
    });

    $('.btn-modal').on('click', function () {
        lastMessage.addClass('none');
        sendForm.removeClass('none');
        errorMessage.addClass('none');
        $('#contact-form').trigger('reset');
    });

    $('.form-control').on('change', function () {
           errorMessage.addClass('none'); 
    });
});

function checkIsEmptyFields(el) {
    var pattern = /^[\s]+$/;
    if (el) return false;
    //if (pattern.test(el)) return false;
    return true;
}

function validateEmail(el) {
    if (~el.indexOf('@')) return false;
    return true;
}

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
    });
    $.each(contentTop, function (i) {
        if (winTop > contentTop[i] - rangeTop) {
            $('.navbar-collapse li.scroll')
                .removeClass('active')
                .eq(i).addClass('active');
        }
    })

};