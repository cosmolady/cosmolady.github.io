$(function () {
	var tabsText = $('.text div');
    var tabsMenu = $('.menu li a');

	tabsText.hide().filter(':first').show();
    
	$('.menu li a').on('click', function () {
        var i = findPosition(this);
        tabsText.hide().filter(tabsText[i]).fadeIn();
        $(this).css ({
			backgroundColor: 'blanchedalmond',
			color: 'black'
		});
		
	});
    
	function findPosition(curLi) {
        for (var i = 0; i < tabsMenu.length; i++) {
            if(tabsMenu[i] === curLi){
                return i;
            }
        }
    }
	
	function defaultStyle (){
		for (var i = 0; i < tabsMenu.length; i++) {
            (tabsMenu[i]).css({
				backgroundColor: 'darkseagreen',
				color: 'antiquewhite'
			});
		}}
})