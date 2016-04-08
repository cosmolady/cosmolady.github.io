$(function () {
	var $formField = $('input:text');
	$formField.mouseover(function () {
		var name = $(this).attr('name');
		$('label.hint[for="' + name + '"]').stop(true, true).fadeIn();
	});
	$formField.mouseout(function () {
		var name = $(this).attr('name');
		$('label.hint[for="' + name + '"]').stop(true,true).fadeOut('fast');
	});
	var $buttonHelp = $('button:button');
	var $textHelp = $('label.hint');
	console.log($textHelp);
	$buttonHelp.click(function () {
		for (var i = 0; i < ($textHelp.length); i++){
			$textHelp.fadeIn();
		}
	});
});