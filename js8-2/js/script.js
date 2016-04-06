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
	var $textHelp = $('label.hint');
	console.log($textHelp);
	$buttonHelp.click(function () {
		for (var i = 0; i < ($textHelp.length); i++){
			$textHelp.fadeIn();
		}
	});
});