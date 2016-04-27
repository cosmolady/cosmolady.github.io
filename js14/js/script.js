'use strict';
$(function () {


	var dataTest = [
		{
			title: 'Вопрос №1',
			answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
			rightAns: [false, true, false]
	},
		{
			title: 'Вопрос №2',
			answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
			rightAns: [true, true, false]
	},
		{
			title: 'Вопрос №3',
			answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
			rightAns: [false, false, true]
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
	checkAnswer();

})

function checkAnswer() {
	// считаем что ответы правильные
	var error = false;
	// чекбоксы
	var inputs = $("input[value='0']");
	
	for (var i = 0; i < inputs.length; i++) {
		// галка
		var checked = $("input[value='0']:checked");
			
		// является ли вариант правильным
		var right = testObj[i].rightAns[i] == true;
		// если отметка не является правильной
		if (checked !== right) {
			error = true;
			// дальше можно не проверять
			break;
		}
	}
console.log(error ? 'Ошибка!!!' : 'Зачот!!!')}
})