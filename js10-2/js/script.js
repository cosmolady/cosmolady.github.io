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
	

	$('.submenu').hover(
		function (){
    		$('.submenu li').animate({backgroundColor:'#0df284'}, 500 );
		},
		function(){
			$('.submenu').animate({backgroundColor:'#088b0a'}, 500 );
});


});
