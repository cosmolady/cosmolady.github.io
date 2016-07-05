$(function () {
    $(".button").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $('.login-email').on("click", function (e) {
        e.preventDefault();
        var elemHr = $(this).attr("href");
        var top = $(elemHr).offset().top;
        
        $('body,html').animate({
            scrollTop: top
        }, 1500);

        $('#remind-form').slideUp(600, 'easeInSine');

        $('#login-form').slideToggle(600, 'easeInSine');
    })
    $('.forgot').click(function (e) {
        event.preventDefault();

        $('#login-form').slideUp(600, 'easeInSine');
        $('#remind-form').slideToggle(600, 'easeInSine');
    })
});