module.exports ={
	// Функция проверяет правильность введенных пользователем координат,
	// Если все  координаты правильные вернет undefined
	// Если есть ошибка вернет строку с указанием ошибки
	validate: function(data,letters,numbers)
	{
	let result;
	if (data.length %2 ==0 )
	  	{
			let data_numbers = data.filter( function (item,index) { return index %2!=0;}) // массив с числами
			let data_letters = data.filter( function (item,index) { return index %2==0;})
			// массив чисел  от пользователя, которое не входит в координаты 0..9
			// если все координат ы входят в условие от 0..9, вернуть пустой массив
			let mistake_n = data_numbers.filter(function(item, index) {
				if (item < 0 || item >9){return true;}
				else {return false;}	
				});
			if (mistake_n.length > 0) 
			{result = "Некорректная координата " + mistake_n ;
			return result;}		

			let mistake_l = data_letters.filter(function(item) 
			{ let r = letters.filter(function(n)
				{if (n==item){return true;}
					else {return false;}
				});
				if (r.length == 0){	return true;} 
				else {return false;}
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
	generateFld: function(numbers,letters,next)   // генерация поля массива сервера
	{
	let ship_fld_server = [];								// пустой массив поля кораблей
	let letter_ship_index = next();		// рандомный номер индекса букв
	let numbers_ship_index = next();		// рандомный номер индекса цифр
	let check_data_s = []; 

	while (ship_fld_server.length <= 18)
	{
	let ship_server_letter = letters[letter_ship_index];			// получаем буквенную координату корабля

	let ship_server_number = numbers[numbers_ship_index];	// получаем цифровую координату корабля
	 if (this.check_adjacent(ship_fld_server, letter_ship_index,numbers_ship_index) == false)
	 {ship_fld_server.push(ship_server_letter,ship_server_number);
	  letter_ship_index = next();
	  numbers_ship_index = next();}
	else {letter_ship_index = next();
	  numbers_ship_index = next()}
	}
	for (let i=0,j=0; j < ship_fld_server.length; i+=3, j+=2) 
	{
	check_data_s[i] = ship_fld_server[j]; 
	check_data_s[i+1] = ship_fld_server[j+1];
	check_data_s[i+2] = "false";
	}
	return check_data_s;
	},
	
    //возвращает true, если найден корабль рядом с указанной координатой буквой или на той же координате
    //иначе - false
	// array  - массив координат поля сервера
   check_adjacent: function (array, letter_idx, number_idx)
    {
	let numbers = [0,1,2,3,4,5,6,7,8,9];					//массив возмжных чисел
	//let letters = ["a","b","c","d","e","f","g","h","j","k"];// массив возможных букв в,8,в,9,в,5,к,1,и,9,з,5,б,1,д,4,е,2,а,7
	let letters = ["а","б","в","г","д","е","ж","з","и","к"];
	let mistake_in_arr;
	let previous_letter = letters[letter_idx-1];
	let next_letter = letters[letter_idx+1];
	let current_letter = letters[letter_idx];
	
		for (let i = 0,j= 1; i<=20; i+=2,j +=2)	  // цикл для всех элементов масссива
		{
			if(array[i] == previous_letter || array[i] ==  current_letter || array[i] == next_letter) // есть  буква, следующая за буквой-координатой
			{
				if (array[j] == (number_idx +1) || array[j] == (number_idx)|| array[j] == (number_idx -1)) // проверить что буква, следующая за буквой-координатой, НЕ имеет координаты-цифры рядом 
				{mistake_in_arr = 1;
				return true;}			//  как только найдена ошибка функция прерывается
			}
			else 
			{mistake_in_arr = 0;}  // нет близлежащих букв => записываем обе коодинаты в массив
  
		} 
		if (mistake_in_arr == 1)		// проверка флага есть ли ошибка, при отстутствии таковой, функция возвращает false
		{return true;}
		else
		{return false;} 
    
	},
 jasmine: function(){return true;}
}