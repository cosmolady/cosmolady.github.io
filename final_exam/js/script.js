
$(function(){
/*AJAX REQUEST PIXABAY*/    
var API_KEY = '2681408-6ebe02c71ce1ec416ecfa7d96';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('');
$.getJSON(URL,{per_page:7},(function(data){
    if (parseInt(data.totalHits) > 0){
        var grid=$('.grid');
        
        $.each(data.hits, function(i, hit){
            grid.append('<div class="grid-item" id="item--'+i+'"><img class="img__item" src="'+hit.webformatURL+'"><p class="img__tag">' +hit.tags.split(',')[0]+'</p></div>');
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
});
    
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
            console.log(i);
            grid.append('<div class="grid-item" id="item--'+i+'"><img class="img__item" src="'+hit.webformatURL+'"><p class="img__tag">' +hit.tags.split(',')[0]+'</p></div>');
            
		});
        	
    }
    else
        console.log('No hits');
}));	
})

    function sliderJcarousel1() {
    $('.jcarousel-1').jcarousel();
    $('.jcarousel-prev-1').click(function() {
    $('.jcarousel-1').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next-1').click(function() {
        $('.jcarousel-1').jcarousel('scroll', '+=1');
    });
}
     function sliderJcarousel2() {
    $('.jcarousel-2').jcarousel();
    $('.jcarousel-prev-2').click(function() {
    $('.jcarousel-2').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next-2').click(function() {
        $('.jcarousel-2').jcarousel('scroll', '+=1');
    });
}
     function sliderJcarousel3() {
    $('.jcarousel-3').jcarousel();
    $('.jcarousel-prev-3').click(function() {
    $('.jcarousel-3').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next-3').click(function() {
        $('.jcarousel-3').jcarousel('scroll', '+=1');
    });
}
    sliderJcarousel1();
    sliderJcarousel2();
    sliderJcarousel3();

})
