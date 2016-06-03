
$(function(){
/*AJAX REQUEST PIXABAY*/    
var API_KEY = '2681408-6ebe02c71ce1ec416ecfa7d96';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('');
$.getJSON(URL,{per_page:7},(function(data){
    if (parseInt(data.totalHits) > 0){
        var grid=$('.grid');
        
        $.each(data.hits, function(i, hit){
            grid.append('<div class="grid-item"><img class="img__item" src="'+hit.webformatURL+'"><p class="img__tag">' +hit.tags.split(',')[0]+'</p></div>');
		grid.append();
		});
        	
    }
    else
        console.log('No hits');
}));
	/*MASONRY*/
    $('.grid').masonry({
  itemSelector: '.grid-item',
  isResizable: true,
//  columnWidth: 200
}).css('height','auto');
    
var input=$('.img__search')	;
var btnSearch = $('.partners__search');
btnSearch.on('click', function(){
var inputValue = input.val();
URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+inputValue+encodeURIComponent('');
$.getJSON(URL,{per_page:7},(function(data){
    if (parseInt(data.totalHits) > 0){
        var grid=$('.grid');
       grid.html('');
        $.each(data.hits, function(i, hit){
            grid.append('<div class="grid-item"><img class="img__item" src="'+hit.webformatURL+'"><p class="img__tag">' +hit.tags.split(',')[0]+'</p></div>');
		grid.append();
		});
        	
    }
    else
        console.log('No hits');
}));	
})
 $('.flexslider1').flexslider({
    animation: "slide",
    customDirectionNav: $(".custom-navigation--1 a")
  });
	$('.flexslider2').flexslider({
    animation: "slide",
    ustomDirectionNav: $(".custom-navigation--2 a")
  });
	$('.flexslider3').flexslider({
    animation: "slide",
    ustomDirectionNav: $(".custom-navigation--3 a")
  });
//	$('.flex-control-nav').css('display','none')
})
