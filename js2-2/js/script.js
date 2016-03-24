var arr=[];
var n = 5;
  for (var i = 0; i < n; i++) {
    arr[i] = prompt('Введите имя', "")
  }

var name = prompt('Введите свое имя, пожалуйста');
var isAccess = false;

  for (var i = 0; i < n; i++) {
    if (name === arr[i]) {
      alert (name + ', вы успешно вошли');
      isAccess = true;
    }
  }
 if (!isAccess) {
   alert('Error');
 }
