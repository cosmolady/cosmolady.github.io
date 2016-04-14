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
	

	$('.dropdown').mouseenter(
  	function () {
		alert('hi');
		$('.submenu').animate({backgroundColor:"#03C", }, 500 )
  	}, function() {
	$('.submenu').animate({
		backgroundColor:"#0CF",
    }, 500 );
	});


});
