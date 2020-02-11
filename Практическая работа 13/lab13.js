	
	
	function Task9020(x)
	{ 
	let y;
	let result;
	y = 61-x;
	result = 3* Math.sqrt(y);
	if ((61-x) < 0){
	let err = new Error("Подкоренное выражение должно быть неотрицательным") // создание исключения
	throw err;
	}
	return result;
	}
	
	
	function Task3943(x,y)
	{ 
	let result;
	let z = Math.sqrt(y);
	result = -5* Math.sqrt(x+z);
	if ( (y < 0) || (x< -1*Math.sqrt(y))){
	let err = new Error("Подкоренное выражение должно быть неотрицательным") // создание исключения
	throw err;
	}
	return result;
	}