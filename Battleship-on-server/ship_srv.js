const http = require('http'); // подключение библиотеки для http
const url = require('url'); 
const fs = require('fs');
const start = require('./start');
const check = require('./check');
const  host = '127.0.0.1';        // ip PC
const  port = '80';				 // port
let users = {};

function respond(req,res)		// запускается при получении любого запроса	 
{
const parsed = url.parse(req.url,true);
const obj = parsed.query;		//  запрос
const str = parsed.path;		// адрес ресурса(путь к нему) 
console.log(str);
console.log(obj);
let numbers = [0,1,2,3,4,5,6,7,8,9];					//массив возмжных чисел
//let letters = ["а","б","в","г","д","е","ж","з","и","к"];// массив возможных букв
//let letters = ["a","b","c","d","e","f","g","h","j","k"];// массив возможных букв
	if (str == "/favicon.ico")
	{
	res.statusCode =400;
	res.end();
	}
	else if (str.includes("/start"))
	{	
		let letters = ["а","б","в","г","д","е","ж","з","и","к"];
		//let letters = ["a","b","c","d","e","f","g","h","j","k"];
		res.statusCode =200;			// после любого запроса возвращает статус - все хорошо
		res.setHeader('Content-type','application/json');  //заголовок запроса , контент - возвращаем картинку, JSon и т.д.
		let key_from_user = req.headers.cookie;  // переменная для  получения куки у пользователя который уже работает
		// Объект со всеми данными одного пользователя
		user_object = check.cookie_user(users,key_from_user,res);
		let array_of_shame =obj.present.split(',');
		let check_data_u= [];
		//let array_of_shame = string_of_pain.split(',');
		
		try { 									// проверка ошибки пользователя
		let rslt = start.validate(array_of_shame,letters,numbers) //функция, вызывает файл, где выполняется логика проверки кораблей от пользователя 
		res.statusCode =200;	
		//переписываю массив пользователя , каждый третий элемент флаг о целости корабля	
		for (let i=0,j=0; j < array_of_shame.length; i+=3, j+=2) 
		{
		check_data_u[i] = array_of_shame[j]; 
		check_data_u[i+1] = array_of_shame[j+1];
		check_data_u[i+2] = "false";
		}
		user_object.arr_user = check_data_u;  //корабли пользователя
		res.end('Координаты приняты');	
		}
		catch(err) {		
		res.statusCode =400;
		res.end(err.message);
		}

		function nextRnd(){
		return Math.floor(Math.random()*10);}
/////////////////////////////////////////////Массив кораблей сервера//////////////////
		let reslt = start.generateFld(numbers, letters, nextRnd) //reslt =check_data_s
		user_object.arr_server = reslt;  //корабли сервера для конкретного пользователя
		res.statusCode =200;
		res.end('OK, GAME STARTED');		
		console.log(user_object);
	}


	 
	else if (str.includes("/check"))
	{
	res.statusCode =200;			// после любого запроса возвращает статус - все хорошо
	res.setHeader('Content-type','application/json');  //заголовок запроса , контент - возвращаем картинку, JSon 
	let arr_strike = obj.present.split(',');
	let key_from_user = req.headers.cookie; 
	let user = users[key_from_user];
	let all_strikes_server = [];
	let array_server = user.arr_server;
	let array_user = user.arr_user;
	let letters = ["а","б","в","г","д","е","ж","з","и","к"];
	let ship_lttr = arr_strike[0];
	let ship_num = arr_strike[1];
	function nextRnd(){ // функция для генерации рандомных координат выстрела сервера
	return Math.floor(Math.random()*10);}
	let rslt_of_strike_user = check.strike_user(letters,numbers,arr_strike) //функция, вызывает файл, где выполняется логика проверки выстрела от пользователя
		if (rslt_of_strike_user === undefined)  // проверка ошибки пользователя
		{
			let rslt_hit_strike_user = check.check_strike_user(array_server, ship_lttr, ship_num) //функция, вызывает файл, где выполняется логика проверки кораблей от пользователя
			if (rslt_hit_strike_user === undefined)  // проверка ошибки пользователя
			{
			res.statusCode =400;
			res.end('Ошибка');
			}
			else 
			{res.statusCode =200;
				if (rslt_hit_strike_user == 'Попал!')
				{let victory_user = check.check_victory(array_server)
					if (victory_user == 'Победа!')
					{res.end('Победа пользователя!');}
					else 
					{res.end('Игра продолжается');}
				}
				if (rslt_hit_strike_user == 'Промах!')
				{	
					let strike_server = check.generate_strike_server(letters,numbers,nextRnd)	// вернет массив 2 координаты
					let ship_lttr_s = strike_server[0];
					let ship_num_s = strike_server[1];
					if (all_strikes_server.length < 1){
					all_strikes_server.push(strike_server[0],strike_server[1]);}
					else 
					{
						for (let i = 0,j= 1; i<=20; i+=2,j +=2)		  // цикл для всех элементов масссива
						{
							if (all_strikes_server[i] == ship_lttr_s)
							{
								if (all_strikes_server[j] == ship_num_s) 
								{
								strike_server = check.generate_strike_server(letters,numbers,nextRnd)
									
								}
							
							}
							
						}
						all_strikes_server.push(strike_server[0],strike_server[1]);						
					}
					let rslt_hit_strike_server = check.check_strike_server(array_user, ship_lttr_s, ship_num_s) // вернет Попал или Промах сервера
					if (rslt_hit_strike_server == 'Промах!')
					{res.end('Промах!,' + strike_server);}
					if (rslt_hit_strike_server == 'Попал!')
					{
					let victory_server = check.check_victory(array_user)
					if (victory_server == 'Победа!')
					{res.end('Победа сервера!');}
					else 
					{res.end('Попал!,' + strike_server);}
					}
				}
			}		
		}
		else 
		{	
		res.statusCode =400;
		res.end('Ошибка пользователя');}

		

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


