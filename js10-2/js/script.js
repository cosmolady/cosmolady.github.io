$(function(){

	var $dropdownMenu = $('.dropdown a');
		console.log ($dropdownMenu);
	
	
	$dropdownMenu.on('mouseover',function(e) {
	   var $subMenu = $(this).siblings('ul');
		e.preventDefault();
		$subMenu.slideToggle();
		$('.dropdown li').css("background-color","#FF7F50");
	});
})