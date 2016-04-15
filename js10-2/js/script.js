$(function(){
	$('.dropdown').hover(
		function(){
			$(this).children('.submenu').slideDown(400,stop()); 
		},
		function(){
			$(this).children('.submenu').slideUp(400,stop()); 
		}
	);
	function stop(){
		$('.submenu').stop(true, true);
	};
	

	$('li').mouseover(
		function (){
    		$(this).animate({
				backgroundColor:'#4B0082'
			}, 500);
		},
		function(){
			$(this).animate({
				backgroundColor:'#0CF'
			}, 500 );
		});


});
