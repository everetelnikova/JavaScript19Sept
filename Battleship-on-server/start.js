module.exports ={
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
	generateFld: function(letters,numbers,next)
	{
	//let numbers = [0,1,2,3,4,5,6,7,8,9];					//массив возмжных чисел
	//let letters = ["а","б","в","г","д","е","ж","з","и","к"];// массив возможных букв
	let ship_fld_server = [];								// пустой массив поля кораблей
	let letter_ship_index = next();		// рандомный номер индекса букв
	let numbers_ship_index = next();		// рандомный номер индекса цифр


	while (ship_fld_server.length <= 20)
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
	return ship_fld_server;
	},
	
    //возвращает true, если найден корабль рядом с указанной координатой буквой или на той же координате
    //иначе - false
  	 //let ship_fld_server_test = ['в',8,'в',3,'в',5,'к',1,'и',9,'з',5,'б',1,'д',4,'е',2,'а',7];
   check_adjacent: function (array, letter_idx, number_idx)
    {
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
				console.log(array[i]);
				console.log(array[i+1]);
				return true;}			//  как только найдена ошибка функция прерывается
			}
			else 
			{mistake_in_arr = 0;}  // нет близлежащих букв => записываем обе коодинаты в массив
  
		} 
		if (mistake_in_arr == 1)		// проверка флага есть ли ошибка, при отстутствии таковой, функция возвращает false
		{return true;}
		else
		{return false;} 
    
	
	
	///if (check_adjacent(ship_fld_server_test, 2, 8))
  //  {return false;}
	//else {return true;}
   
    //  if (check_adjacent(ship_fld_server_test, 2, 8)){
    //  document.getElementById("out").innerHTML = "найдено";
   //   } else {
    //  document.getElementById("out").innerHTML = "не найдено";    // значит,для такой координаты нет близлежащих кораблей 
   //   }
    
	},
 jasmine: function(){return true;}
}