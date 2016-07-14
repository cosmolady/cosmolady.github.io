$(function () {

	$('.shell-header-dropdown').click(function () {
		$('.shell-header-dropdown-content').hide();
		$(this).children('.shell-header-dropdown-content').slideDown(400, stop());

	});
	$('.shell-header-dropdown-tab').hover(
		function () {
			$(this).children('.shell-header-dropdown-tab-content').slideDown(400, stop());

		});

	function stop() {
		$('.shell-header-dropdown-content').stop(true, true);
	};

	$('#signup_form p').click(
		function () {
			that = $(this);
			that.children('label').css('opacity', '0.5');
			$('body').filter(that).click(function () {
				$(this).find($('#signup_form p label')).css('opacity', '1');
			});
		})
	$('#signup_form p input').keydown(
		function () {
			$(this).siblings('label').css('display', 'none');
		});

	$('.shell-header-nav-toggle i').click(function () {
		$(this).addClass('opened');
		$('.shell-header-nav-wrapper').addClass('opened').css({
			'height': 'calc(100% - 48px)',
			'display': 'block'
		})
	})
	$('.shell-header-toggle-search i').click(function () {
		$('.shell-search').css('display', 'block');
	})

});
