$(function () {
	var $formField = $('input:text');
	$formField.focus(function () {
		var name = $(this).attr('name');
		$('label.hint[for="' + name + '"]').fadeIn();
	});
	$formField.blur(function () {
		var name = $(this).attr('name');
		$('label.hint[for="' + name + '"]').hide();
	});
});