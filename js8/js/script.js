$(function () {
	var tabsText = $('.text div');
	tabsText.hide().filter(':first').show();

	 
	$('.menu li').click(function () {
		var tab = this;
		i = 0;
		
		$(tab).(.menu li).each(function(index, element){
				$(element).attr("number-tab", i);
				i++;                        
			});
		
		tabsText.hide();
		tabsText.filter(this.tabsText).show();
	});
	
});
