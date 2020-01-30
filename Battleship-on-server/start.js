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
	generateFld: function(letters,numbers)
	{
	//let numbers = [0,1,2,3,4,5,6,7,8,9];					//массив возмжных чисел
	//let letters = ["а","б","в","г","д","е","ж","з","и","к"];// массив возможных букв
	let ship_fld_server = [];								// пустой массив поля кораблей
		
	for(let x= 0; x <10; x++)
	{
	let x_ship_index = Math.floor(Math.random() * 10);		// рандомный номер индекса букв
	let y_ship_index = Math.floor(Math.random() * 10);		// рандомный номер индекса цифр
	let ship_server_letter = letters[x_ship_index];			// получаем буквенную координату корабля
	let ship_server_number = numbers[y_ship_index];			// получаем цифровую координату корабля
	ship_fld_server.push(ship_server_letter, ship_server_number)		
	}
	
    //возвращает true, если найден корабль рядом с указанной координатой буквой или на той же координате
    //иначе - false
  	 let ship_fld_server_test = ['в',8,'в',3,'в',5,'к',1,'и',9,'з',5,'б',1,'д',4,'е',2,'а',7];
    function check_adjacent(array, letter_idx, number_idx)
    {
	let mistake_in_arr;
		for (let i = 0; i<=20; i++)	  // цикл для всех элементов масссива
		{
			if(array[i] == (array[letter_idx+1]) || array[i] ==  (array[letter_idx-1]) || array[i] ==  (array[letter_idx])) // есть  буква, следующая за буквой-координатой
			{
				if (array[i+1] == (array[number_idx +1]) || array[i+1] == (array[number_idx])|| array[i+1] == (array[number_idx -1])) // проверить что буква, следующая за буквой-координатой, НЕ имеет координаты-цифры рядом 
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
    }
	
	
	if (check_adjacent(ship_fld_server_test, 2, 8))
    {return false;}
	else {return true;}
   
    //  if (check_adjacent(ship_fld_server_test, 2, 8)){
    //  document.getElementById("out").innerHTML = "найдено";
   //   } else {
    //  document.getElementById("out").innerHTML = "не найдено";    // значит,для такой координаты нет близлежащих кораблей 
   //   }
    
	},
 jasmine: function(){return true;}
}