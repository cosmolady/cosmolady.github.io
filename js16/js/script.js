/*Поиск Google*/
$.getJSON("https://www.googleapis.com/customsearch/v1?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&callback=?",
function(data){
    var ul = document.createElement("ul");
    $.each(data.results, function(i, val){
            var li = document.createElement("li");
            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
            ul.appendChild(li);
    });
    $('.gs-result').html(ul);
});
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
	this.method = "Let's work!";
}

function Student (){
	this.univercity = 'Oxford';
	this.grants = '100$';
	this.method = "Let's watch series";
}

worker1 = new Worker();
worker2 = new Worker();

stud1 = new Student();
stud2 = new Student();

console.log (worker1.job);
console.log (worker2.name);
console.log (worker1.height);
console.log (worker2.method);

console.log (stud1.grants);
console.log (stud1.age);
console.log (stud2.method);
console.log (stud2.sex);

