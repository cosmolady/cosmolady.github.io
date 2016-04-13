$(function(){

	var $dropdownMenu = $('.dropdown');
	console.log ($dropdownMenu);
	
	var $submenuList =  $('.submenu');
		console.log ($submenuList);

	$dropdownMenu.on('mouseover',function() {
	   $(this).children($dropdownMenu).slideDown(1000, stop()); 
	});
	
	$dropdownMenu.on('mouseout',function() {
	   $(this).children($dropdownMenu).slideUp(1000, stop()); 
	});
	
})
	
	
