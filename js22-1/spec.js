var app = require('js/script.js');
describe ("app",function(){
	it("shoul call  pow method", function({
		var result;
		result=app.pow(5,2);
	expect(result).toBe(25);
	}))
})