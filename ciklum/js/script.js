$(function () {
	$dropdown = $('.shell-header-dropdown');
	$itemSubmenu = $('.shell-header-dropdown-tab');

	$dropdown.on('click', function () {
		$('.shell-header-dropdown-content').hide();
		$(this).children('.shell-header-dropdown-content').slideToggle(400);
	})
	$itemSubmenu.hover(function () {
		$('.shell-header-dropdown-tab-content').hide();
		$(this).children('.shell-header-dropdown-tab-content').slideToggle(400);
	})
	$formInputs = $('.signup_form p');
	$formLabels = $('.signup_form p label');
	$formInputs.on('click', function () {
		$('label').css('opacity', '1');
		$(this).children('input').focus();
		$(this).children('label').css('opacity', '0.5');
	})
})
