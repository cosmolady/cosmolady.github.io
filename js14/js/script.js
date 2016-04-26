'use strict';
$(function () {


	var dataTest = [
		{
			title: 'Вопрос №1',
			answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
			check: [false, true, false]
	},
		{
			title: 'Вопрос №2',
			answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
			check: [true, true, false]
	},
		{
			title: 'Вопрос №3',
			answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
			check: [false, false, true]
	},
];

	localStorage.setItem('testQuestions', JSON.stringify(dataTest));
	var test = localStorage.getItem('testQuestions');
	var testObj = JSON.parse(test);

	var page = $('#list-template').html();
	var testList = tmpl(page, {
		data: testObj
	});
	$('body').append(testList);

	var buttonCheck = $(":submit");

	var mark = 0;

	buttonCheck.click(function () {
		if ($(this).prop('checked') === ($(this).attr('value') === true)) {
			alert('hi');
			mark++;
		}
	})
	console.log(mark);
})