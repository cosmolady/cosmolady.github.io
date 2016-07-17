$(function () {
    var dropdown = $(".shell-header-dropdown-content");
    $('.shell-header-dropdown-tab-link').click(function (e) {
        e.stopPropagation();
    });

    $('.shell-header-dropdown').click(function (e) {
        e.stopPropagation();
        if ($(this).children('.shell-header-dropdown-content').css('display') === 'none') {
            dropdown.hide();
            dropdown.height('auto');
            $(this).children('.shell-header-dropdown-content').slideDown(400, stop());
        } else {
            $(this).children('.shell-header-dropdown-content').hide();
        }
    });

    $(document).click(function () {
        dropdown.hide();
        $('#signup_form p').children('label').css('opacity', '1');
    });

    $('.shell-header-dropdown-tab').hover(
        function (e) {
            var dropdownLength = $(this).closest('.shell-header-dropdown-content').find('dl').length;
            var tablistLength = $(this).find('.shell-l3-list-item').length;
            var maxLength = Math.max(dropdownLength, tablistLength) * $(this).height() + 'px';
            $('.shell-header-dropdown-tab-content').height(maxLength);
            $('.shell-header-dropdown-content').height(maxLength);
            $(this).children('.shell-header-dropdown-tab-content').slideToggle(400, stop());
        });

    function stop() {
        $('.shell-header-dropdown-content').stop(true, true);
    }

    $('#signup_form p').click(
        function (e) {
            e.stopPropagation();
            $(this).children('label').css('opacity', '0.5');
        });
    $('#signup_form p input').keydown(
        function () {
            $(this).siblings('label').css('display', 'none');
        });

    $('.shell-header-nav-toggle i').click(function () {
        $(this).addClass('opened');
        $('.shell-header-nav-wrapper').addClass('opened').toggle().css({
            'height': 'calc(100% - 48px)'
        })
    });

    $('.shell-header-toggle-search i').click(function () {
        $('.shell-search').slideToggle();
    })
});