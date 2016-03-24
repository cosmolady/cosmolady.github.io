function handlerStart(){
	var buttonName = this.innerHTML;
	if (buttonName === 'PAUSE') {
    addToSplitList(this);
    this.innerHTML = 'CONTINUE';
    clearInterval(intervalID);
  } else {
    this.innerHTML = 'PAUSE';
	  intervalID = setInterval(startTimer,interval);
	  startDate = new Date();
  }
}

function handlerClear(){
	buttonStart[0].innerHTML = 'START';
	time.clear();
	timer[0].innerText = time.toString();
  	milli[0].innerHTML = time.showMillisec();
  	clearInterval(intervalID);
  	splitList[0].innerHTML = '';
}


function startTimer(){
	var cur = new Date();
	time.incMillisec(cur.getTime() - startDate.getTime());
    startDate = cur;
	timer[0].innerText = time.toString();
	milli[0].innerHTML = time.showMillisec();
}

function handlerSplit(){
  	addToSplitList(this);
}

function addToSplitList (elem){
  if ((buttonStart[0].innerHTML !== 'START') && (buttonStart[0].innerHTML !== 'CONTINUE')){
    splitList[0].innerHTML += elem.innerText + ' '+ time.toString() + '.' + time.showMillisec()+'<br>';
  }
}
var time = {
	hour: 0,
	min: 0,
	sec: 0,
	millisec: 0,

	clear : function() {
		this.hour = 0;
		this.min = 0;
		this.sec = 0;
		this.millisec = 0;
	},
	incSec : function() {
		this.sec++;
		if (this.sec == 60){
			this.sec = 0;
			this.min++;
			if (this.min==60){
				this.min = 0;
				this.hour++;
	}}
	},
  incMillisec : function(inter) {
    this.millisec+=inter;
    if(this.millisec >= 1000){
      this.incSec();
      this.millisec-=1000;
    }
  },
	toString: function() {
		var strHour = (this.hour > 9)? this.hour: '0' + this.hour;
    var strMin = (this.min > 9)? this.min:'0'+ this.min;
    var strSec = (this.sec > 9)? this.sec:'0' + this.sec;
    return strHour + ' : ' + strMin + ' : ' + strSec;
	},
  showMillisec: function() {
    if(this.millisec > 99){
      return this.millisec+'';
    }
    if(this.millisec > 9){
      return '0' + this.millisec;
    }
    return '00' + this.millisec;
  }
}
var intervalID;
var interval = 19;
var startDate;
var buttonStart = document.getElementsByClassName('btn-success');
buttonStart[0].addEventListener("click", handlerStart);

var buttonClear = document.getElementsByClassName('btn-danger');
buttonClear[0].addEventListener("click", handlerClear);

var buttonSplit = document.getElementsByClassName('btn-primary');
buttonSplit[0].addEventListener("click", handlerSplit);

var timer = document.getElementsByClassName('timer');
var milli = document.getElementsByClassName('millisec');
var splitList = document.getElementsByClassName('splits');
console.log(splitList);
