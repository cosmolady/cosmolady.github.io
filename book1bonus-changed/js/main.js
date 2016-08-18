$(document).ready(function () {
    $('.firstp h1').gradientText({
        colors: ['#fc7264', '#fe9952', '#fec64f']
    });
    var arrowBounce = $(".arrow_bounce");
    arrowBounce.effect("bounce", 4000);
    setInterval(function () {
        arrowBounce.effect("bounce", 4000);
    }, 4000);

    var arrowUp = $('.static_arrow');
    var arrowDown = $('.bounce_arrow');
    arrowUp.css({
        'visibility': 'hidden'
    });
    arrowUp.removeClass('none');
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {});
        } // End if
        if ($(this).attr('href') == "#subscribe") {
            arrowDown.css({
                'visibility': 'hidden'
            });
            arrowUp.css({
                'visibility': 'visible'
            });
        } else if ($(this).attr('href') == "#up") {
            arrowUp.css({
                'visibility': 'hidden'
            });
            arrowDown.css({
                'visibility': 'visible'
            });
        }
    });
});
//document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });