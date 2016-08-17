$(document).ready(function () {
    $('.firstp h1').gradientText({
        colors: ['#fc7264', '#fe9952', '#fec64f']
    });
    var arrow = $(".arrow");
    var intervalId = startArrowJump(arrow);
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
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
        if ($(this).attr('href') == "#subscribe") {
            $(this).attr('href', '#up');
            clearInterval(intervalId);
        } else if ($(this).attr('href') == "#up") {
            $(this).attr('href', '#subscribe');
            intervalId = startArrowJump(arrow);
        }
        $(this).toggleClass('arrowup');
        $(this).parent().toggleClass('arrowmp');

    });

    function startArrowJump(arrow) {
        arrow.effect("bounce", 4000);
        return setInterval(function () {
            arrow.effect("bounce", 4000);
        }, 4000);
    }
});
//document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });