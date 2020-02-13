	
	
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
	
	
	function Task5170(Y)
	{
	let del = 0;
		let a = 0;
		for (n=1; n<= Y; n++)
		{
			del = Y % n;
				if (del == 0)
				{
				a = a +1;
				}				
		}
		if (a == 2)
		{
		result = "Число " + Y + " без остатка делится на " + a +" других чисел. Число простое" ;
		}
		if ( a <= 1){
		let err = new Error("Простое число должно быть больше 1")
		throw err;
		}
		if (a > 2)
		{
		result = "Число " + Y + " без остатка делится на " + a +" других чисел. Число составное" ;
		}
	return result;	
	}