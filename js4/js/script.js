var obj = {
  createTag : function (str) {
    return document.createElement(str);
  },
  addClassName : function (element, name) {
    element.classList.add(name);
  },
  addInner : function (element,text) {
    element.innerHTML = text;
  },
  addElement : function (parent, child) {
    parent.appendChild(child);
  },
  addInnerText : function (checkbox,text) {
    checkbox.innerHTML = '<label><input type="checkbox" value="">' + text +'</label>';
  },
  addQuestion :function (element,text) {
    element.innerHTML = '<h4>' + text + '</h4>';
  },
  createCheckbox : function (text) {
    var checkbox = obj.createTag('li');
    obj.addClassName(checkbox,'checkbox');
    obj.addInnerText(checkbox, text);
    return checkbox;
  },
  createButton : function (element,text) {
    element.innerHTML = element.innerHTML + '<button type="button" class="btn btn-default btn-lg">' + text + '</button>';
  }
}
var wrapper = obj.createTag('div');
obj.addClassName(wrapper,'wrapper');
obj.addElement(document.body,wrapper);

var titleTest = obj.createTag('h2');
obj.addClassName(titleTest,'titleTest');
obj.addInner(titleTest,'Тест по программированию');
obj.addElement(wrapper,titleTest);

var questionsList = obj.createTag('ol');
obj.addClassName(questionsList,'questionsList');
obj.addElement(wrapper,questionsList);

var question1 = obj.createTag('li');
var question2 = obj.createTag('li');
var question3 = obj.createTag('li');

obj.addClassName(question1,'question1');
obj.addClassName(question2,'question2');
obj.addClassName(question3,'question3');
obj.addElement(questionsList,question1);
obj.addElement(questionsList,question2);
obj.addElement(questionsList,question3);

obj.addQuestion(question1,'Вопрос №1');
obj.addQuestion(question2,'Вопрос №2');
obj.addQuestion(question3,'Вопрос №3');

obj.addElement(question1,obj.createCheckbox('Вариант ответа №1'));
obj.addElement(question1,obj.createCheckbox('Вариант ответа №2'));
obj.addElement(question1,obj.createCheckbox('Вариант ответа №3'));

obj.addElement(question2,obj.createCheckbox('Вариант ответа №1'));
obj.addElement(question2,obj.createCheckbox('Вариант ответа №2'));
obj.addElement(question2,obj.createCheckbox('Вариант ответа №3'));

obj.addElement(question3,obj.createCheckbox('Вариант ответа №1'));
obj.addElement(question3,obj.createCheckbox('Вариант ответа №2'));
obj.addElement(question3,obj.createCheckbox('Вариант ответа №3'));

obj.createButton(questionsList,'Проверить мои результаты');

console.log(wrapper);
