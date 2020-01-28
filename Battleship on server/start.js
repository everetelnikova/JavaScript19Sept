module.exports ={
	validate: function(data,letters,numbers)
	{
	let result;
	if (data.length %2 ==0 )
	  	{
			let data_numbers = data.filter( function (item,index) { return index %2!=0;})      // массив с числами

			let data_letters = data.filter( function (item,index) { return index %2==0;})
			// массив чисел  от пользователя, которое не входит в координаты 0..9
			// если все координат ы входят в условие от 0..9, вернуть пустой массив
			let mistake_n = data_numbers.filter(function(item, index) {
				if (item < 0 || item >9)
				{
				return true;	
				}
				else 
				{
				return false;	
				}	
				});
			if (mistake_n.length > 0) 
			{
			result = "Некорректная координата " + mistake_n ;
			return result;
			}		

			let mistake_l = data_letters.filter(function(item) 
			{   // масссив коррдинат буквы
					let r = letters.filter(function(n)
					{
					if (n==item){
					     return true;
					}
					else {
						return false;
					}
				});
				if (r.length == 0){
					return true;
				} else {
					return false;
				}
			}); 
			
				
			if (mistake_l.length > 0) 
			{
			result = "Некорректная координата " + mistake_l ;
			return result;
			}
			
		}
		else 
		{
		result = "Не правильный формат";
		}
	return result;
	},
 jasmine: function(){return true;}
}