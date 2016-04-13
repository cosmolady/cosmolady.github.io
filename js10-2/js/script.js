function mainmenu(){
	$(".dropdown").hover(function(){
	$(this).find('ul:first').css({
	visibility: "visible",
	display: "none",
	backgroundColor: "#FF7F50"
	}).show(400);
	},function(){
	$(this).find('ul:first').css({visibility: "hidden"});
	});
}


$(document).ready(function(){
	mainmenu();
});