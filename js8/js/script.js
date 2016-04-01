$(function () {
	var tabsText = $('.text div');
	tabsText.hide().filter(':first').show();
	
	$('.menu li').on('click', function () {
		var $tab = $(this).siblings('tabsText');
		event.preventDefault()
		$tab.toggle();
	});
	
});
