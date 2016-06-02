var API_KEY = '2681408-6ebe02c71ce1ec416ecfa7d96';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
$.getJSON(URL, function(data){
    if (parseInt(data.totalHits) > 0)
        $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
    else
        console.log('No hits');
});