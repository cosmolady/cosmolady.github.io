$(function () {
	var tabsText = $('.text div');
    var tabsMenu = $('.menu li');

	tabsText.hide().filter(':first').show();
    
	$('.menu li').on('click', function () {
        var i = findPosition(this);
        tabsText.hide().filter(tabsText[i]).fadeIn();
        $(this).css('color','darkorchid');
    });
    
	function findPosition(curLi) {
        for (var i = 0; i < tabsMenu.length; i++) {
            if(tabsMenu[i] === curLi){
                return i;
            }
        }
    }
});
