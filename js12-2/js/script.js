$(function (){
var task = $('#task').html();

var data = [
	{
		title: 'Чебакова Екатерина',
		content: ['https://github.com/cosmolady/cosmolady.github.io/blob/master/task1/img/photo.jpg?raw=true']
	},
	{
		title: 'Менеджер по продажам',
		content: []
	},
	{
		title: 'Хочу учить фронденд потому что',
		content: ['Это интересно','Нынешняя работа не позволяет развиваться','Хочу работать в IT']
	},
	{
		title: 'Мои контакты:',
		content: ['тел.:0509376626', 'Моя страница в FB:<a href="https://www.facebook.com/profile.php?id=100001757141635&ref=bookmarks">Катерина Чебакова</a>']
	},
];

var doc = tmpl(task, {data: data});
$('body').append(doc);
	
})