var app = {
	function pow(x, n) {
  var result = 1;

  if (n < 0) {
    n = -n;
    x = 1/x;
  }

  for (var i=0; i < n; i++) {
    result *= x;
  }
  return result;
}
}
//  var x = prompt("Enter number", "");
//  var n = prompt("Enter power", "");

  console.log ('result =', pow(x,n));
 module.exports = pow;