(function ($) {
	var defaults = {
		pixelsOffset: 325,
		amountPict: 2
	};

	var options;
	$.fn.jMyCarousel = function (params) {
		return this.each(function() {
		
		options = $.extend({}, defaults, options, params);
		var leftUIEl = $('.carousel-arrow-left');
		var rightUIEl = $('.carousel-arrow-right');

		var pixelsOffset = options.pixelsOffset;
		var currentLeftValue = 0;
		var elementsItem = $('.carousel-list li');

		var elementsCount = elementsItem.length;
		var minimumOffset = -((elementsCount - (options.amountPict)) * pixelsOffset);
		var maximumOffset = 0;
	
		function slideImg() {

			this.animate({
				left: currentLeftValue + "px"
			}, 500);
		}

		leftUIEl.click(function () {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += pixelsOffset;
				slideImg();
			}
		});

		rightUIEl.click(function () {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= pixelsOffset;

				slideImg();
			}
		});
		
})(jQuery);


$(function () {
	$('.carousel-hider').jMyCarousel()
})