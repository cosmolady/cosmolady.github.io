$(function(){

	var $dropdownMenu = $('.dropdown');
	console.log ($dropdownMenu);
	
	var $submenuList =  $('.submenu');
		console.log ($submenuList);

	$dropdownMenu.on('mouseover',function() {
	   $(this).children($dropdownMenu).slideDown(200,function(){
          $submenuList.css("background-color","#FF7F50");
      }).on('mouseout',function() {
	   $(this).children($dropdownMenu).slideUp(200);
      }); 

});
})
	
	
