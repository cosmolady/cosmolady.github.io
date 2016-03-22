function handlerStart(){
  var buttonName = this.innerHTML;
  if (buttonName === 'PAUSE') {
    this.innerHTML = 'CONTINUE';
  } else {
    this.innerHTML = 'PAUSE';
  }
}

function handlerClear(){
	buttonStart[0].innerHTML = 'START';
	time.clear();
	timer[0].innerHTML = time.toString();
	clearInterval(intervalID);
}

var buttonStart = document.getElementsByClassName('btn-success');
buttonStart[0].addEventListener("click", handlerStart);

var buttonClear = document.getElementsByClassName('btn-danger');
buttonClear[0].addEventListener("click", handlerClear);

var timer = document.getElementsByClassName('timer');
console.log (timer);

var time = {
	hour: 0,
	min: 0,
	sec: 0,
	
	clear : function() {
		this.hour = 0;
		this.min = 0;
		this.sec = 0;
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
		var strHour = (this.hour>9)?this.hour:'0'+this.hour;
    	var strMin = (this.min>9)?this.min:'0'+this.min;
    	var strSec = (this.sec>9)?this.sec:'0'+this.sec;
    	return strHour + ' : ' + strMin + ' : ' + strSec;
	}
}

function startTimer(){
	time.incSec();
	timer[0].innerHTML = time.toString();
}

var intervalID = setInterval(startTimer,1000);
