const http = require('http'); // подключение библиотеки для http
const url = require('url'); 
const fs = require('fs');
const start = require('./start);
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
		let rslt = start.validate() //функция, вызывает файл, где выполняется логика проверки кораблей от пользователя
		if (rslt === undefined)  // проверка ошибки пользователя
		{
		res.statusCode =400;
		res.end('Ошибка пользователя');
		}
		else 
		{	
		res.statusCode =200;
		res.end('Координаты приняты');
		}
///////////////////////////////////////////////////////////////////////////////////////		
		function nextRnd(){
			return Math.floor(Math.random()*10);
		}
/////////////////////////////////////////////Массив кораблей сервера//////////////////
		let reslt = start.generateFld(numbers, letters, nextRnd) //функция, вызывает файл, где выполняется логика проверки кораблей от пользователя
		if (reslt == true)  // проверка ошибки пользователя
		{
		res.statusCode =400;
		res.end('Ошибка пользователя');    // ожидать ошибки от сервера?
		}
		else 
		{		
		res.statusCode =200;
		res.end('OK, GAME STARTED');
		}

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
	
		let rslt_hit_strike_user = check.generate_strike_server(letters,numbers,next)//функция, вызывает файл, где выполняется логика проверки кораблей от сервера
		if (rslt_hit_strike_user === undefined)  // проверка ошибки сервера
		{
		res.statusCode =400;
		res.end('Ошибка');
		}
		else 
		{	
		res.statusCode =200;
		res.end('Выстрел принят');
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


