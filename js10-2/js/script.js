$(function () {
	$('.dropdown').hover(
		function () {
			$(this).children('.submenu').slideDown(400, stop());
		},
		function () {
			$(this).children('.submenu').slideUp(400, stop());
		}
	);

	function stop() {
		$('.submenu').stop(true, true);
	};


	$('.submenu').hover(
		function () {
			$('.submenu').animate({
				backgroundColor: '#F0E68C'
			}, 500);
		},
		function () {
			$('.submenu').animate({
				backgroundColor: '#FF7F50'
			}, 500);
		});

});