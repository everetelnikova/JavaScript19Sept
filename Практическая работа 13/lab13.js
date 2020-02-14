	
	
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
	
	function Task5789(x,y,x1,y1)
	{
	let a = x1 - x;
	let b = y1- y;
	let result = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
	return result;	
	}
	
	class Point{
		constructor(x,y){
		this.x = x;
		this.y = y;		
		}
		distanceTo(u){
			let p = u.x - this.x;
			let q = u.y - this.y;
			let result = Math.sqrt( Math.pow(p,2) + Math.pow(q,2))
		return result;}
	}
	
	function distanceBetweenObjects(a,b)
	{
	let result = Math.sqrt(Math.pow((b.x-a.x),2) + Math.pow((b.y-a.y),2))
	return result;	
	}
	class Direction{
		constructor(angle,quater,distance){
			this.angle = angle;
			this.quater= quater;
			this.distance = distance;
		}
	} 
    
	function backwardTask(b,a){
	let deltaX =a.x - b.x;
	let deltaY =a.y - b.y;
	let distance = Math.sqrt(Math.pow(deltaX,2) + Math.pow(deltaY,2))
	let r = (Math.atan(Math.abs(deltaY/deltaX)))* 180 / Math.PI;
	if (deltaX >= 0 && deltaY > 0){
	return new Direction(r, 1, distance);
	}
		else if (deltaX < 0 && deltaY >= 0){
		return new Direction(180-r, 2, distance);
		}
			else if (deltaX <= 0 && deltaY < 0){
			return new Direction(180+r, 3, distance);			
			}
				else if(deltaX > 0 && deltaY <= 0){
				return new Direction(360-r, 4, distance);
				}


	}
	
	
	
	
	