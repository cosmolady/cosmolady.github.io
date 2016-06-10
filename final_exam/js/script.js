'use strict';
$(function () {
	var API_KEY = '2681408-6ebe02c71ce1ec416ecfa7d96';
	var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('');



	var $searchInput = $('.img__search');

	//    $('.search__form').on('submit', function(e) {
	//        e.preventDefault();
	var query = $searchInput.val();

	$.ajax({
			url: URL,
			type: 'GET',
			dataType: 'jsonp',
			data: {
				q: query,
				per_page: 7
			}
		})
		.done(function (data) {
			var imgBlock = $('#ideas__template').html();
			var imgGrid = tmpl(imgBlock, {
				data: data.hits
			});
			$('.grid').append(imgGrid).masonry({
				itemSelector: '.grid-item',
				columnWidth: '.grid-item',
				gutter: 20
			});
		});
	//    });
	//	



	/*AJAX REQUEST PIXABAY*/
	//var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('');
	//$.getJSON(URL,{per_page:7},(function(data){
	//    if (parseInt(data.totalHits) > 0){
	//        var gridDef=$('.grid-default');
	//        gridDef.html('');
	//		var grid=$('.grid');
	//        $.each(data.hits, function(i, hit){
	//            grid.append('<div class="grid-item" id="item-'+i+'"style="background-image:url('+hit.webformatURL+')"><a href="'+hit.pageURL+'"></a><p class="img__tag">' +hit.tags.split(',')[0]+'</p></div>');
	//  
	//		});
	//          
	//    }
	//    else {
	//        console.log('No hits');
	//	}
	//		
	//}));



	function sliderJcarousel1() {
		$('.jcarousel-1').jcarousel();
		$('.jcarousel-prev-1').click(function () {
			$('.jcarousel-1').jcarousel('scroll', '-=1');
		});
		$('.jcarousel-next-1').click(function () {
			$('.jcarousel-1').jcarousel('scroll', '+=1');
		});
	}

	function sliderJcarousel2() {
		$('.jcarousel-2').jcarousel();
		$('.jcarousel-prev-2').click(function () {
			$('.jcarousel-2').jcarousel('scroll', '-=1');
		});
		$('.jcarousel-next-2').click(function () {
			$('.jcarousel-2').jcarousel('scroll', '+=1');
		});
	}

	function sliderJcarousel3() {
		$('.jcarousel-3').jcarousel();
		$('.jcarousel-prev-3').click(function () {
			$('.jcarousel-3').jcarousel('scroll', '-=1');
		});
		$('.jcarousel-next-3').click(function () {
			$('.jcarousel-3').jcarousel('scroll', '+=1');
		});
	}
	sliderJcarousel1();
	sliderJcarousel2();
	sliderJcarousel3();

});