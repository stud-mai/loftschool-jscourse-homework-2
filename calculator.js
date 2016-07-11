function calculator(firstNumber){	
	function sum(){
		var result = firstNumber;
		if (arguments.length) {
			for (var i = 0; i < arguments.length; i++){
				result += arguments[i];
			}
		}
		return result;
	}
	
	function dif(){
		var result = firstNumber;
		if (arguments.length) {
			for (var i = 0; i < arguments.length; i++){
				result -= arguments[i];
			}
		}
		return result;
	}
	
	function div(){
		try {
			var result = firstNumber;
			if (arguments.length) {
				for (var i = 0; i < arguments.length; i++){
					if (arguments[i] == 0) throw new Error('Делить на ноль запрещено!');
					result /= arguments[i];
				}
			}
			return result;			
		}
		catch(e) {
			console.error(e.message);
			return firstNumber;
		}
	}
	
	function mul(){	
		if (firstNumber == 0) return 0
		else {
			var result = firstNumber;
			if (arguments.length) {
				for (var i = 0; i < arguments.length; i++){
					if (arguments[i] == 0) return 0;
					result *= arguments[i];
				}
			}			
		}
		return result;
	}
	
	return {
		sum: sum,
		dif: dif,
		div: div,
		mul: mul
	}
}

module.exports = calculator;