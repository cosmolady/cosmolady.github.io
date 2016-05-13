/*Поиск Google*/
 (function() {
    var cx = '015945377729752521238:rcpe7z7tike';
	var gcse = document.createElement('script');
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();

/*Prototypes*/

function Human() {
	this.name =  'Ivan';
	this.age = 30;
	this.sex = 'male';
	this.height = 180;
	this.weight = 70;
	
}

Worker.prototype = new Human();
Student.prototype = new Human();

function Worker () {
	this.job = 'manager';
	this.salary = '500$';
	this.method = function (){
		console.log("Let's work!");
	};
}

function Student (){
	this.univercity = 'Oxford';
	this.grants = '100$';
	this.method = function (){
		console.log ("Let's watch series");
}}

worker1 = new Worker();
worker2 = new Worker();

stud1 = new Student();
stud2 = new Student();

console.log (worker1.job);
console.log (worker2.name);
console.log (worker1.height);
worker2.method();

console.log (stud1.grants);
console.log (stud1.age);
stud2.method();
console.log (stud2.sex);

