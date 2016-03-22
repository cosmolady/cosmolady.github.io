function handlerStart(){
  var buttonName = this.innerHTML;
  if (buttonName === 'PAUSE') {
    this.innerHTML = 'CONTINUE';
  } else {
    this.innerHTML = 'PAUSE';
  }
  console.log(buttonName);
}

function handlerClear(){
  buttonStart[0].innerHTML = 'START';
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
		this.hour = 00;
		this.min = 00;
		this.sec = 00;
	},
	incSec : function() {
		this.sec++;
		if (this.sec == 60){
			this.sec = 00;
			this.min++;
			if (this.min==60){
				this.min = 00;
				this.hour++;
	}}
	},
	toString: function() {
		return this.hour+':'+this.min+':'+this.sec;
	}
}

function startTimer(){
	time.incSec();
	timer[0].innerHTML = time.toString();
}

setInterval(startTimer,1000);