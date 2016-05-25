$(function () {

$('.jcarousel').jcarousel();
$('.jcarousel-pagination')
	.on('jcarouselpagination:active', 'a', function () {
		$(this).addClass('active');
	})
	.on('jcarouselpagination:inactive', 'a', function () {
		$(this).removeClass('active');
	})
	.jcarouselPagination();
var icons = {
      header: "ui-icon-plus",
      activeHeader: "ui-icon-minus"
    };
    $( "#accordion" ).accordion({
      icons: icons
    });

});
