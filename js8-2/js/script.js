$(function () {
	var $formField = $('input:text');
	$formField.mouseover(function () {
		var name = $(this).attr('name');
		$('label.hint[for="' + name + '"]').fadeIn();
	});
	$formField.mouseout(function () {
		var name = $(this).attr('name');
		$('label.hint[for="' + name + '"]').hide();
	});
	var $buttonHelp = $('button:button');
	var $textHelp = $('label .hint');
	console.log ($textHelp);
	$buttonHelp[0].click(function () {
		$textHelp.fadeIn();
	});
});