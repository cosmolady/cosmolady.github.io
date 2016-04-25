$(function (){

var page = $('#list-template').html();
var dataTest= [
	{
		title: 'Вопрос №1',
		answers: ['Ответ 1', 'Ответ 2', 'Ответ 3']
	},
	
	{
		title: 'Вопрос №2',
		answers: ['Ответ 1', 'Ответ 2', 'Ответ 3']
	},
	
	{
		title: 'Вопрос №3',
		answers: ['Ответ 1', 'Ответ 2', 'Ответ 3']
	}
];
	console.log(dataTest);
//
//localStorage.setItem('testQuestions',JSON.stringify(test));
//var testData = localStorage.getItem('testQuestions');
//var testObj = JSON.parse (testData);



var testList = tmpl(page, {data: dataTest});

$('body').append(testList);
	
})
