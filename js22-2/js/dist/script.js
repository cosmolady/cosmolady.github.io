'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

$(function () {

    var dataTest = [{
        title: 'Вопрос №1',
        answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
        rightAns: [false, true, false]
    }, {
        title: 'Вопрос №2',
        answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
        rightAns: [true, true, false]
    }, {
        title: 'Вопрос №3',
        answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
        rightAns: [false, false, true]
    }];
    localStorage.setItem('testQuestions', JSON.stringify(dataTest));
    var test = localStorage.getItem('testQuestions');
    var testObj = JSON.parse(test);

    var _testObj = _slicedToArray(testObj, 3);

    var testObj1 = _testObj[0];
    var testObj2 = _testObj[1];
    var testObj3 = _testObj[2];
    var title1 = testObj1.title1;
    var answers1 = testObj1.answers1;
    var rightAns1 = testObj1.rightAns1;
    var title2 = testObj2.title2;
    var answers2 = testObj2.answers2;
    var rightAns2 = testObj2.rightAns2;
    var title3 = testObj3.title3;
    var answers3 = testObj3.answers3;
    var rightAns3 = testObj3.rightAns3;


    var page = $('#list-template').html();
    var testList = tmpl(page, {
        data: testObj
    });
    $('body').append(testList);

    var buttonCheck = $(":submit");

    buttonCheck.click(function () {
        var modal = $('.modal_form');
        event.preventDefault();
        $('.modal_result').text(checkAnswer());
        $('.overlay').fadeIn(400, function () {
            modal.css('display', 'block').animate({
                opacity: 1,
                top: '50%'
            }, 200);
        });

        $('.modal_close, .overlay').click(function () {
            clearResult();
            modal.animate({
                opacity: 0,
                top: '45%'
            }, 200, function () {
                $(this).css('display', 'none');
                $('.overlay').fadeOut(400);
            });
        });
    });

    var checkAnswer = function checkAnswer() {

        var mark = 0;

        for (var i = 0; i < testObj.length; i++) {
            var inputs = $("input[value='" + i + "']");
            var countUserRight = 0;
            for (var j = 0; j < inputs.length; j++) {

                var checked = inputs[j].checked;
                var right = testObj[i].rightAns[j] == true;
                if (checked == right) {
                    countUserRight++;
                }
            }
            if (countUserRight == testObj[i].rightAns.length) {
                mark++;
            }
        }
        var result = mark === testObj.length ? 'Тест пройден успешно!' : 'Тест не пройден! Количество правильных ответов - ' + mark;
        return result;
    };

    var clearResult = function clearResult() {
        return $('input').removeAttr('checked');
    };
});
