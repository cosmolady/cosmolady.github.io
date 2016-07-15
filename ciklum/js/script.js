$(function () {
	$('.shell-header-dropdown').click(function () {
		$(this).children('.shell-header-dropdown-content').slideToggle(400, stop());

	});

	$('.shell-header-dropdown-tab').hover(
		function () {
			$(this).children('.shell-header-dropdown-tab-content').slideToggle(400, stop());

		});

	function stop() {
		$('.shell-header-dropdown-content').stop(true, true);
	}
	$(document).mouseup(function (e) {
		$('.shell-header-dropdown').off('click');
		target = e.target;
		console.log(target);
		var div = $(".shell-header-dropdown-content");
		if (!div.is(target) && div.has(target).length === 0) {
			div.hide();
		}
		$('#signup_form p').children('label').css('opacity', '1');

	});
	$('#signup_form p').click(
		function () {
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
