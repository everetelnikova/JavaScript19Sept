let numbers = [0,1,2,3,4,5,6,7,8,9];					//массив возмжных чисел
		let letters = ["а","б","в","г","д","е","ж","з","и","к"];// массив возможных букв
		let x_ship_index = Math.floor(Math.random() * 10);		// рандомный номер индекса букв
		let y_ship_index = Math.floor(Math.random() * 10);		// рандомный номер индекса цифр
		let ship_server_letter = letters[x_ship_index];			// получаем буквенную координату корабля
		let ship_server_number = numbers[y_ship_index];			// получаем цифровую координату корабля
		let ship_fld_server = [];								// пустой массив поля кораблей
    
    // проверка по всему полю возможных координат для 10 кораблей
    // принимает:
    // - array  массив с координатами
    // - letter индекс буквы в массиве, возле которой нужно искать другие корабли
    // - number цифру, возле которой нужно искать другие корабли
    //возвращает true, если найден корабль рядом с указанной координатой буквой
    //иначе - false
    function check_adjacent(array, letter_idx, number)
    {
    for (let i = 0; i<=20; i++)	  // цикл для всех элементов масссива
    {
      if(array[i] == (letters[letter_idx+1] || array[i] ==letters[letter_idx-1])) // есть  буква, следующая за буквой-координатой
      {
         if (array[i+1] == (number+1 || number|| number-1) ) // проверить что буква, следующая за буквой-координатой, НЕ имеет координаты-цифры рядом 
			{
			return true; 
			}
      } 
      else 
      {
         return false;   // нет близлежащих букв => записываем обе коодинаты в массив
      }
    }
    }
    
    
    {
    	let ship_fld_server_test = ['а','0','в','9','в','10','к','1'];
      if (check_adjacent(ship_fld_server_test, 2,'9')){
      document.getElementById("out").innerHTML = "найдено";
      } else {
      document.getElementById("out").innerHTML = "не найдено";    // значит,для такой координаты нет близлежащих кораблей 
      }
    }
    /*
    
		function server_ship_fld()								// фун-ия генерации кораблей на поле сервера	
		{
		if (ship_fld_server == "")								// если массив поля сервера пустой - записать туда координаты
		{
		 ship_fld_server.push(ship_server_letter,ship_server_number);
		}
		else
		{
			for (let i = 0; i <=20; i++)						// проверка по всему полю возможных координат для 10 кораблей
			{
			let x_ship_index = Math.floor(Math.random() * 10);		// рандомный номер индекса букв
			let y_ship_index = Math.floor(Math.random() * 10);		// рандомный номер индекса цифр
				if (ship_fld_server[i] == ship_server_letter)	// если координата-буква есть в массиве поля сервера
				{
					for (let z = 0; z <=20; z++)						// проверка по всему полю возможных координат для 10 кораблей
					{
						if (ship_fld_server[z] == letters[x_ship_index-1])	//  в массиве есть близлежащая координата-буква 
						{
						  if (ship_fld_server[z+1] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))
						  {
							 ship_fld_server.push(ship_server_letter,ship_server_number); 
						  }
						}
					}
								
				}	
				else 							// если координата-буквы нет в массиве поля сервера			
				{	
				for (let i = 0; i <=20; i++)						// проверка по всему полю возможных координат для 10 кораблей
					{
						if (ship_fld_server[i] == letters[x_ship_index-1])	//  в массиве есть близлежащая координата-буква 
						{
						  if (ship_fld_server[i+1] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))	// следующая коорднита(цифровая) не находится в ближайшей области 		
						  {
							 ship_fld_server.push(ship_server_letter,ship_server_number); 
						  }
						}
						
						else if (ship_fld_server[i] == letters[x_ship_index+1])	//  в массиве есть близлежащая координата-буква 
						{
						  if (ship_fld_server[i+1] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))	// следующая коорднита(цифровая) не находится в ближайшей области 		
						  {
							 ship_fld_server.push(ship_server_letter,ship_server_number); 
						  }
						}
					}
				}
			}
		}
		console.log(ship_fld_server);	
		}
		server_ship_fld();*/