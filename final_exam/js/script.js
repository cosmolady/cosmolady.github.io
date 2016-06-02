
$(function(){
    
var API_KEY = '2681408-6ebe02c71ce1ec416ecfa7d96';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('');
$.getJSON(URL,{per_page:7},(function(data){
    if (parseInt(data.totalHits) > 0){
        var grid=$('.grid');
        grid.html('');
        
        $.each(data.hits, function(i, hit){
            console.log(i); 
            grid.append('<div class="grid-item"><a href="'+hit.pageURL+'"><img src="'+hit.webformatURL+'"></a></div>')});
        
    }
    else
        console.log('No hits');
}));
    $('.grid').masonry({
  itemSelector: '.grid-item',
  isResizable: true,
  columnWidth: 200
});
    
})
