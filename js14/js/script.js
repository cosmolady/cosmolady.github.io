'use strict';
$(function (){
var task = $('#list-template').html();

var data = [
	{
		title: 'Вопрос №1',
		content: ['Ответ 1', 'Ответ 2', 'Ответ 3']
	},
	{
		title: 'Вопрос №2',
		content: ['Ответ 1', 'Ответ 2', 'Ответ 3']
	},
	{
		title: 'Вопрос №3',
		content: ['Ответ 1', 'Ответ 2', 'Ответ 3']
	},
];

var doc = tmpl(task, {data: data});
$('body').append(doc);
	
})
//localStorage.setItem('testQuestions',JSON.stringify(dataTest));
//	
//var test = localStorage.getItem('testQuestions');
//var testObj = JSON.parse (test);
//
//var page = $('#list-template').html();
//
//var testList = tmpl(page, {data: testObj});
//
//$('body').append(testList);
//	
//})
