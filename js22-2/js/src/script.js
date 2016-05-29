'use strict';
$(function () {


    let dataTest = [
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
	}
    ];
    localStorage.setItem('testQuestions', JSON.stringify(dataTest));
    let test = localStorage.getItem('testQuestions');
    let testObj = JSON.parse(test);
    
    let [testObj1, testObj2,testObj3] = testObj;
    let {title1, answers1,rightAns1} = testObj1;
    let {title2, answers2,rightAns2} = testObj2;
    let {title3, answers3,rightAns3} = testObj3;

    let page = $('#list-template').html();
    let testList = tmpl(page, {
        data: testObj
    });
    $('body').append(testList);

    let buttonCheck = $(":submit");


    buttonCheck.click(function () {
        let modal = $('.modal_form');
        event.preventDefault();
        $('.modal_result').text(checkAnswer());
        $('.overlay').fadeIn(400,
            function () {
                modal
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200)
            });


        $('.modal_close, .overlay').click(function () {
            clearResult();
            modal.animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                }
            );
        });

    })

    let checkAnswer = () => {

        let mark = 0;

        for (let i = 0; i < testObj.length; i++) {
            let inputs = $("input[value='" + i + "']");
            let countUserRight = 0;
            for (let j = 0; j < inputs.length; j++) {

                let checked = inputs[j].checked;
                let right = testObj[i].rightAns[j] == true;
                if (checked == right) {
                    countUserRight++
                }
            }
            if (countUserRight == (testObj[i].rightAns.length)) {
                mark++;
            }
        }
        let result = (mark === testObj.length) ? `Тест пройден успешно!` : `Тест не пройден! Количество правильных ответов - ${mark}`;
        return result;

    }

    let clearResult = () => $('input').removeAttr('checked');
});