
	if (window.addEventListener)
	 window.addEventListener("load", calc);
	else if (window.attachEvent)
	 window.attachEvent("onload", calc);
	
	
	function calc() {
		var container = document.getElementById('container');
		var buttonResult = byClass('btn-calc', container)[0];
		var operators = byClass('operator', container);
		var operator;
		var inputResult = document.getElementById('result');
	
	 for(var i = 0; i < operators.length; i++){
		operators[i].addEventListener('click', function(e) {
		e.preventDefault();
		operator = this.getAttribute('href');
	 });
	 
	 }
	 buttonResult.addEventListener('click', function() {
	 var firstValue = parseInt(document.getElementById('first-value').value);
	 var secondValue = parseInt(document.getElementById('second-value').value);
		 
		 inputResult.value=eval(firstValue+operator+secondValue);
			
	});
	
	}
	
	function byClass(classList, node) {
	 if(document.getElementsByClassName) {
	 return (node || document).getElementsByClassName(classList);
	 }
	 else {
		var node = node || document,
		list = node.getElementsByTagName('*'),
		length = list.length,
		classArray = classList.split(/\s+/),
		classes = classArray.length,
		result = [], i,j;
	 for(i = 0; i < length; i++) {
			for(j = 0; j < classes; j++) {
				if(list[i].className.search('\\b' + classArray[j] + '\\b') != -1) {
				result.push(list[i]);
			break;
			}
		}
		}
	 return result;
	 }
	}
	
	
	