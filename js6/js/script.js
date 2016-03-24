var startDate;
var intervalID;
function handlerStart(){
	var buttonName = this.innerHTML;
	if (buttonName === 'PAUSE') {
	clearInterval(intervalID);
    this.innerHTML = 'CONTINUE';
  } else {
    this.innerHTML = 'PAUSE';
	 intervalID = setInterval(startTimer,19);
	  startDate = new Date();
  }
}

function handlerClear(){
	buttonStart[0].innerHTML = 'START';
	time.clear();
	timer[0].innerHTML = time.toString();
	clearInterval(intervalID);
}

function startTimer(){
	var cur = new Date();
	time.incMillisec(cur.getTime() - startDate.getTime());
	startDate = cur;
	timer[0].innerText = time.toString();
    milli[0].innerHTML = time.showMillisec();
}

var buttonStart = document.getElementsByClassName('btn-success');
buttonStart[0].addEventListener("click", handlerStart);

var buttonClear = document.getElementsByClassName('btn-danger');
buttonClear[0].addEventListener("click", handlerClear);

var timer = document.getElementsByClassName('timer');

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
	toString: function() {
		var strHour = (this.hour > 9)? this.hour: '0' + this.hour;
    	var strMin = (this.min > 9)? this.min:'0'+ this.min;
    	var strSec = (this.sec > 9)? this.sec:'0' + this.sec;
		var strMillisec = (this.millisec > 9)? '0' + '0' + this.millisec: '0'+'0'+this.millisec
    	return strHour + ' : ' + strMin + ' : ' + strSec;
	}
}



