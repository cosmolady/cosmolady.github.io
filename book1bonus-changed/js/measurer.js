$measurer = function() {

	var
		callbacks = [],
		interval = 500,
		curHeight,
		el = null,
		isInit = false,
		isDocReady = false;

	$(function() {
		isDocReady = true;
		isInit && initBlock();
	});

	function createBlock() {
		if (el == null) {
			el = $('<div></div>').css('height', '1em').css('left', '0').css('lineHeight', '1em').css('margin', '0').
			css('position', 'absolute').css('padding', '0').css('top', '-1em').css('visibility', 'hidden').
			css('width', '1em').appendTo('body');

			curHeight = el.height();
		}
	}

	function getHeight() {
		return curHeight;
	}

	function initBlock() {
		createBlock();

		$(window).resize(callFuncs);


		curHeight = el.height();
		setInterval(function() {
			var newHeight = el.height();

			if (newHeight != curHeight) {
				curHeight = newHeight;
				callFuncs();
			}
		}, interval);
	}

	function callFuncs() {
		for(var i = 0; i < callbacks.length; i++) {
			callbacks[i]();
		}
	}

	return {

		resize: callFuncs,

		bind: function(func) {
			if (!el) {
				isInit = true;
				isDocReady && initBlock();
			}

			callbacks.push(func);
		},

	
		unbind: function(func) {
			for(var i = 0; i < callbacks.length; i++) {
				callbacks[i] == func && callbacks.splice(i, 1);
			}
		},
		
		getHeight: getHeight,
		createBlock: createBlock
	};
}();