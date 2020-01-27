const http = require('http'); // подключение библиотеки для http
const url = require('url'); 
const fs = require('fs');
const  host = '127.0.0.1';        // ip PC
const  port = '80';				 // port
let users = {};

function respond(req,res)		// запускается при получении любого запроса	 
{
const parsed = url.parse(req.url,true);
const obj = parsed.query;		//  запрос
const str = parsed.path;		// адрес ресурса(путь к нему) 
	if (str == "/favicon.ico")
	{
	res.statusCode =400;
	res.end();
	}
	else if (str == "/start")
		{		
		res.statusCode =200;			// после любого запроса возвращает статус - все хорошо
		res.setHeader('Content-type','application/json');  //заголовок запроса , контент - возвращаем картинку, JSon и т.д.
		let key_from_user = req.headers.cookie;  // переменная для  получения куки у пользователя который уже работает
		let state;
			if (users[key_from_user] === undefined )		// выполняется при новом пользователе					
			{
			let passnum = Math.floor(Math.random()*1000000); 
			let cookie = 'id='+passnum;	
			res.setHeader('Set-Cookie',cookie); 
			users[cookie] = {};
			console.log('New user '+ cookie);
			key_from_user = cookie;
			}
//////////////////////////////////////////////////////
		let strng = obj.coord;    		// coord-параметр запроса на стороне клиента, куда запис-тся коордты всех корабл
		let data = strng.split (',');	//  массив с координатами
		users[key_from_user] = data; 	//  записываем в объект users  по ключу куки массив с координатами пользователя
		if (data.length %2 ==0 )
	  	{
			let data_numbers = data.filter( function (item,index) { return index %2!=0;})      // массив с числами

			let data_letters = data.filter( function (item,index) { return index %2==0;})

			let mistake_n = data_numbers.find(function(item, index) {       // ошибочное значение из координат
				let r = numbers.find(function(n) {return n == item;});
				return r === undefined;});
				
			if (mistake_n != undefined) 
			{
			result = "Некорректная координата " + mistake_n ;
			return;
			}

			let mistake_l = data_letters.find(function(item, index) {       // ошибочное значение из координат
				let rr = letters.find(function(n) {return n == item;});
				return rr === undefined;});
				
			if (mistake_l != undefined) 
			{
			result = "Некорректная координата " + mistake_l ;
			return;
			}
				
			let ship_l  = data_letters.filter(function(item, index) {   // масссив коррдинат буквы
				let r = letters.filter(function(n) {return n == item;});
				return r != undefined;}); 
				
			let ship_n  = data_numbers.filter(function(item, index) {   // масссив коррдинат цифры
				let r = numbers.filter(function(n) {return n == item;});
				return r != undefined;}); 
			
			for  ( let i= 0; i < ship_l.length; i++)
				{
				let x = ship_l[i];
				let index_x = letters.indexOf(x);
				let y = ship_n[i];
				fld[index_x][y]= "#"; 			
				}

		for (let z = 0; z < 10; z++)
		{
		result =result + numbers[z];	
		
			for (let zz = 0; zz < 10; zz++)
			{
			result = result+fld[zz][z];			
			}
		result = result + "|"+ "</br>";
		}
		for (let symbol = 0; symbol < 10;symbol++ )
		{
		 lett = lett + letters[symbol];
		}
		
		if (false)  // проверка ошибки пользователя
		{
		res.statusCode =400;
		res.end();
		}
/////////////////////////////////////////////Массив кораблей сервера////////////////////////////////
			let numbers = [0,1,2,3,4,5,6,7,8,9];					//массив возмжных чисел
		let letters = ["а","б","в","г","д","е","ж","з","и","к"];// массив возможных букв
		let x_ship_index = Math.floor(Math.random() * 10);		// рандомный номер индекса букв
		let y_ship_index = Math.floor(Math.random() * 10);		// рандомный номер индекса цифр
		let ship_server_letter = letters[x_ship_index];			// получаем буквенную координату корабля
		let ship_server_number = numbers[y_ship_index];			// получаем цифровую координату корабля
		let ship_fld_server = [];								// пустой массив поля кораблей
		function server_ship_fld_empty()								// фун-ия генерации кораблей на поле сервера	
		{
		if (ship_fld_server == "")								// если массив поля сервера пустой - записать туда координаты
		{
		 ship_fld_server.push(ship_server_letter,ship_server_number);
		}
		}
		server_ship_fld_empty();
		
		function server_ship_fld()
		{
			for (let i = 0; i <=200; i++)						// проверка по всему полю возможных координат для 10 кораблей
			{
			let x_ship_index = Math.floor(Math.random() * 10);		// рандомный номер индекса букв
			let y_ship_index = Math.floor(Math.random() * 10);		// рандомный номер индекса цифр
			let ship_server_letter = letters[x_ship_index];			// получаем буквенную координату корабля
			let ship_server_number = numbers[y_ship_index];			// получаем цифровую координату корабля
			
				if (ship_fld_server[i] == ship_server_letter)	// если координата-буква есть в массиве поля сервера
				{
					for (let z = 2; z <=20; z++)						// проверка по всему полю возможных координат для 10 кораблей  0  и первый индекс заняты 
					{
						if (ship_fld_server[z] == letters[x_ship_index-1] || letters[x_ship_index+1])	//  в массиве есть близлежащая координата-буква 
						{
						  if (ship_fld_server[z+1] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))	// следующая коорднита(цифровая) не находится в ближайшей области 		
						  {
							 ship_fld_server.push(ship_server_letter,ship_server_number); 
						  }
						}
					}
								
				}	
				else 	//WRONG!						// если координата-буквы нет в массиве поля сервера, ошибка, потому что идет поочереди, а нужно только по координатм буквам		
				{	
				for (let n = 0,m = 1; n <=20; n+=2,m+=2)						// проверка по всему полю возможных координат для 10 кораблей
					{
						if (ship_fld_server[n] == letters[x_ship_index-1] || letters[x_ship_index+1])	//  в массиве есть близлежащая координата-буква 
						{
							if (ship_fld_server[n] != 'undefined' )
							{
									if (ship_fld_server[m] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))	// следующая коорднита(цифровая) не находится в ближайшей области 	
									{
										if (ship_fld_server[m] != 'undefined')
										{
										ship_fld_server.push(ship_server_letter,ship_server_number); 
										}
									}
							}	
						}
						//else if (ship_fld_server[n] == letters[x_ship_index+1])	//  в массиве есть близлежащая координата-буква 
						//{
						//  if (ship_fld_server[m] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))	// следующая коорднита(цифровая) не находится в ближайшей области 		
						//  {
						//	 ship_fld_server.push(ship_server_letter,ship_server_number); 
						//  }
						//}
				    }
				}
			}
		console.log(ship_fld_server);	
		}
			
		
		server_ship_fld();
		console.log(ship_fld_server);
		
		res.statusCode =200;
		res.end('OK, GAME STARTED');
		}
		server_ship_fld();

        и вернуть res.statusCode =200;		                          
		/////////////////////////////////////////////////////	
		}
	}
///////////////часть когда стреляет сервер, переписывается массив координат пользователя///
users[key_from_user]
let check_data = [];
for (let i,j; j < users[key_from_user].length; i+=3, j+2)
{
check_data[i] = users[key_from_user][j]; 
check_data[i+1] = users[key_from_user][j+1];
check_data[i+2] = "false";	
}
//////////////////часть когда стреляет пользователь, переписывается массив координат пользователя///
ship_fld_server
let check_data_s = [];
for (let i,j; j < ship_fld_server.length; i+=3, j+2)
{
check_data_s[i] = ship_fld_server[j]; 
check_data_s[i+1] = ship_fld_server[j+1];
check_data_s[i+2] = "false";	
}

 
///////////////////////////////////////
	 
	else if (str != "/check")
	{
	res.statusCode =200;			// после любого запроса возвращает статус - все хорошо
	res.setHeader('Content-type','application/json');  //заголовок запроса , контент - возвращаем картинку, JSon 
	let ship_lttr = obj.x;    // coords-параметр 1 ого корабля - буква
	let ship_num = obj.y;    // coords-параметр 1 ого корабля - число
	
	for (let i = 0; i< servs[key_from_user].length; i++;) //проверяем попали ли в корабли сервера
		{
		 let index = servs[key_from_user].indexOf(ship_lttr);
		 if (servs[key_from_user][index +1] == ship_num)
		 {
			 servs[key_from_user][index +2] = "true";				// при попадании переписываем 3 координату 
			 for (let i = 0; i<  check_data_serv.length; i+ 2)		// цикл проверки по всем ли кораблям попали
			 {
				 if ( check_data_serv[i] == 'false')
				 {
					 res.statusCode =200;
					 res.end('Попал!');
				 }
			 }
		 }
		} 
		 else 
		{
		 //  первое формирование ответных координат -выстрелов от сервера, рандом и все  такое
		let numbers = [0,1,2,3,4,5,6,7,8,9];
		let letters = ["а","б","в","г","д","е","ж","з","и","к"];
		let x_coord_index = Math.floor(Math.random() * 10);	
		let y_coord_index = Math.floor(Math.random() * 10);		
		let x_coord = letters[x_coord_index];	 
		let y_coord = letters[y_coord_index];
//  проверять нет ли таких же координат в массиве выстрелов		- не сделано

		for (let i = 0; i< users[key_from_user].length; i++;) //проверяем попали ли в корабли сервера
		{
		 if (servs[key_from_user][index +1] == ship_num)
		 {
			 servs[key_from_user][index +2] = "true";				// при попадании переписываем 3 координату 
			 for (let i = 0; i<  check_data_serv.length; i+ 2)		// цикл проверки по всем ли кораблям попали
			 {
				 if ( check_data_serv[i] == 'false')
				 {
					 res.statusCode =200;
					 res.end('Попал!');
				 }
			 }
		 }
		} 
			 
		///////////////////////////////////////////////////////////////////////////////////////	 
			 // как только промах- возврат пользователю всех выстрелов
			 	res.statusCode =200;
				res.end('Промах!');
		 
		}

	
	}
	else 
	{res.statusCode =200;	// после любого запроса возвращает статус - все хорошо; если данных нет, подгружаем страницу
	res.setHeader('Content-type','text/html');  //заголовок запроса , контент - возвращаем картинку, JSon и т.д.
	let file = fs.readFileSync("Battleship.html");     //страница, которую возвращает сервер по запросу
	res.end(file);
	}
}
const server = http.createServer(respond);
function onstart(){console.log(`start ${host}:${port}`);}
server.listen(port,host,onstart);   //гототвы принимать запросы


