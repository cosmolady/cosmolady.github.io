jQuery(function ($) {
    'use strict',

    // all Parallax Section
    $(window).load(function () {
        'use strict',
        $("#services").parallax("50%", 0.3);
        $("#clients").parallax("50%", 0.3);
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
    immut.hover(function(){
        immut.removeClass('arrow');
        down.removeClass('none');
    },function(){        
        immut.addClass('arrow');
        down.addClass('none');
    });
	
	var sendForm = $('#contact-form-section');
    var lastMessage = $('.last_message');
    $('.btn-send').on('click', function () {
        sendForm.addClass('none');
        lastMessage.removeClass('none');
    });

    $('.btn-modal').on('click', function () {
        lastMessage.addClass('none');
        sendForm.removeClass('none');
    });
});

function checkIsEmptyFields() {
    var pattern = /^[\s]+$/;
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        if (!arguments[i]) return false;
        console.log("regex " + pattern.test(arguments[i]));
        if (pattern.test(arguments[i])) return false;
    }
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
//        contentTop.push($($(this).attr('href')).offset().top);
//        contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
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