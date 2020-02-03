module.exports ={
strike_user: function(letters,numbers,arr_strike)
{
// проверка правильности координат-выстрела от пользователя	
let result;
	if (arr_strike.length %2 ==0 )
	  	{
			let arr_strike_numbers = arr_strike.filter( function (item,index) { return index %2!=0;}) // массив с числами
			let arr_strike_letters = arr_strike.filter( function (item,index) { return index %2==0;})
			// массив чисел  от пользователя, которое не входит в координаты 0..9
			// если все координат ы входят в условие от 0..9, вернуть пустой массив
			let mistake_n = arr_strike_numbers.filter(function(item, index) {
				if (item < 0 || item >9){return true;}
				else {return false;}	
				});
			if (mistake_n.length > 0) 
			{result = "Некорректная координата " + mistake_n ;
			return result;}		

			let mistake_l = arr_strike_letters.filter(function(item) 
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
	{result = "Не правильный формат";}
	return result;
},	
// проверка подапания в корабль сервера
// в функцию передаем массив поля сервера, коодинату буквы-выстрела, координату цифры-выстрела
check_strike_user: function(array_server, ship_lttr, ship_num)
{
	let hit;  // переменная-флаг 
	let index = array_server.indexOf(ship_lttr); //ищем индекс буквы-выстрела в массиве сервера(если она есть)	
	let check_data_s = [];  // перезаписываем массив сервера с метками об отсутствии попадания после каждой пары координат 
	let summ_hits= 0; // количество удачных выстрелов
	for (let i=0,j=0; j < array_server.length; i+=3, j+=2) 
	{
	check_data_s[i] = array_server[j]; 
	check_data_s[i+1] = array_server[j+1];
	check_data_s[i+2] = "false";	
	}
	

	for (let i = 0; i< check_data_s.length; i++) //проверяем попали ли в корабли сервера
		{
			if (check_data_s[index +1] == ship_num)				// попадание в координату цифру
			{
			 check_data_s[index +2] = "true";				// при попадании переписываем 3 координату в true
			 hit = 'Попал!';

			}
			else  
			{hit = 'Промах!';} 
		}
	for (let y = 0; y < check_data_s.length; y+=2)		// цикл проверки по всем ли кораблям попали  не рабо
			 {
				 if (check_data_s[y] == 'true')
				{ summ_hits++;}
			 }
		if (summ_hits== 10)
		{hit = 'Победа пользователя!';}
		else if (summ_hits<10 && summ_hits>=1){hit ='Попал!';}
return hit;
},	

// формируется массив координат выстрела от сервера
generate_strike_server:function(letters,numbers,next)
	{
	let strike_from_server = [];								// пустой массив поля кораблей
	let letter_ship_index = next();		// рандомный номер индекса букв
	let numbers_ship_index = next();		// рандомный номер индекса цифр

	let ship_server_letter = letters[letter_ship_index];			// получаем буквенную координату корабля
	let ship_server_number = numbers[numbers_ship_index];	// получаем цифровую координату корабля
	strike_from_server.push(ship_server_letter,ship_server_number);

	return strike_from_server;  // вернуть переменные с координатами ship_lttr_s, ship_num_s
	},
// проверка попал ли сервер в корабль пользователя

check_strike_server: function(array_user, ship_lttr_s, ship_num_s)
{
	let hit;  // переменная-флаг 
	let index = array_user.indexOf(ship_lttr); //ищем индекс буквы-выстрела в массиве юзера(если она есть)	
	let check_data_u = [];  // перезаписываем массив юзера с метками об отсутствии попадания после каждой пары координат 
	let summ_hits = 0;
	for (let i=0,j=0; j < array_user.length; i+=3, j+=2) 
	{
	check_data_u[i] = array_user[j]; 
	check_data_u[i+1] = array_user[j+1];
	check_data_u[i+2] = "false";	
	}
	

	for (let i = 0; i< check_data_u.length; i++) //проверяем попали ли в корабли сервера
		{
			if (check_data_u[index +1] == ship_num)				// попадание в координату цифру
			{
			 check_data_u[index +2] = "true";				// при попадании переписываем 3 координату в true
			 hit = 'Попал!';
			 for (let y = 0; y<  check_data_u.length; y+=2)		// цикл проверки по всем ли кораблям попали
			 {
				 if (check_data_u[y] == 'true')
				 {hit = 'Победа сервера';}
			 }
			}
			else  
			{hit = 'Промах!';} 
		}
	for (let y = 0; y < check_data_s.length; y+=2)		// цикл проверки по всем ли кораблям попали  не рабо
		{ 	if (check_data_s[y] == 'true')
			{ summ_hits++;}
		}
		if (summ_hits== 10)
		{hit = 'Победа пользователя!';}
		else if (summ_hits<10 && summ_hits>=1){hit ='Попал!';}
return hit;
},
 jasmine: function(){return true;}
}
