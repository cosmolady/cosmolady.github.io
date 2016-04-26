'use strict';
$(function (){


var dataTest = [
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
	},
];

localStorage.setItem('testQuestions',JSON.stringify(dataTest));
var test = localStorage.getItem('testQuestions');
var testObj = JSON.parse (test);

var page = $('#list-template').html();
var testList = tmpl(page, {data: testObj});
$('body').append(testList);
	
})
//
//	
//
//
//
//var page = $('#list-template').html();
//
//var testList = tmpl(page, {data: testObj});
//
//$('body').append(testList);
//	
//})
