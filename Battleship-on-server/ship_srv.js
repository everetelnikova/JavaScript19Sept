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
let numbers = [0,1,2,3,4,5,6,7,8,9];					//массив возмжных чисел
let letters = ["а","б","в","г","д","е","ж","з","и","к"];// массив возможных букв
	if (str == "/favicon.ico")
	{
	res.statusCode =400;
	res.end();
	}
	else if (str.includes("/start"))
	{	
		res.statusCode =200;			// после любого запроса возвращает статус - все хорошо
		res.setHeader('Content-type','application/json');  //заголовок запроса , контент - возвращаем картинку, JSon и т.д.
		let key_from_user = req.headers.cookie;  // переменная для  получения куки у пользователя который уже работает
		// Объект со всеми данными одного пользователя
		user_object = check.cookie_user(users,key_from_user,res);
		let string_of_pain =obj.key;
		let array_of_shame = string_of_pain.split(',');
		
		
		let rslt = start.validate(array_of_shame,letters,numbers) //функция, вызывает файл, где выполняется логика проверки кораблей от пользователя
		if (rslt === undefined)  // проверка ошибки пользователя
		{
		res.statusCode =400;
		res.end('Ошибка пользователя');
		}
		else 
		{	
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

		function nextRnd(){
		return Math.floor(Math.random()*10);}
/////////////////////////////////////////////Массив кораблей сервера//////////////////
		let reslt = start.generateFld(numbers, letters, nextRnd) 
		user_object.arr_server = check_data_s;  //корабли сервера для конкретного пользователя
		res.statusCode =200;
		res.end('OK, GAME STARTED');
		
		console.log(user_object);
	}

	
////////////////////////////////////////////////////////////////////////////////////////

	 
	else if (str == "/check")
	{
	res.statusCode =200;			// после любого запроса возвращает статус - все хорошо
	res.setHeader('Content-type','application/json');  //заголовок запроса , контент - возвращаем картинку, JSon 
	let ship_lttr = obj.x;    // coords-параметр 1 ого корабля - буква
	let ship_num = obj.y;    // coords-параметр 1 ого корабля - число
	
	let rslt_of_strike_user = check.strike_user(letters,numbers,arr_strike) //функция, вызывает файл, где выполняется логика проверки выстрела от пользователя
		if (rslt_of_strike_user === undefined)  // проверка ошибки пользователя
		{
		res.statusCode =400;
		res.end('Ошибка пользователя');
		}
		else 
		{	
		res.statusCode =200;
		res.end('Координаты приняты');
		}
	
	
		let rslt_hit_strike_user = check.check_strike_user(array_server, ship_lttr, ship_num) //функция, вызывает файл, где выполняется логика проверки кораблей от пользователя
		if (rslt_hit_strike_user === undefined)  // проверка ошибки пользователя
		{
		res.statusCode =400;
		res.end('Ошибка');
		}
		else 
		{	
		res.statusCode =200;
		res.end('Выстрел принят');
		}
	// //функция, вызывает файл, где выполняется логика проверки кораблей от сервера
	// //	let rslt_hit_strike_user = check.generate_strike_server(letters,numbers,next)
	// //	let all_strikes_user = [];
	// //	if (rslt_hit_strike_user === undefined)  // проверка ошибки сервера
		// {
		// res.statusCode =400;
		// res.end('Ошибка');
		// }
		// else 
		// {
		// all_strikes_user=all_strikes_user.push(rslt_hit_strike_user[0],rslt_hit_strike_user[1])	;
		// console.log(all_strikes_user);
		// res.statusCode =200;
		// res.end('Выстрел принят');
		// }


	
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


