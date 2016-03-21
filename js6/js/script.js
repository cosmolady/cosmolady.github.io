function handlerStart(){
  var buttonName = this.innerHTML;
  if (buttonName ==='PAUSE') {
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
