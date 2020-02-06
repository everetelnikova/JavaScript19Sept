const http = require('http'); // подключение библиотеки дл€ http
const url = require('url'); 
const fs = require('fs');
const start = require('./start');
const check = require('./check');
const  host = '127.0.0.1';        // ip PC
const  port = '80';				 // port
let users = {};

function respond(req,res)		// запускаетс€ при получении любого запроса	 
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
		let key_from_user = req.headers.cookie;  // переменна€ дл€  получени€ куки у пользовател€ который уже работает
		// ќбъект со всеми данными одного пользовател€
		user_object = check.cookie_user(users,key_from_user,res);
		let array_of_shame =obj.present.split(',');
		console.log(array_of_shame);
		let check_data_u= [];
		//let array_of_shame = string_of_pain.split(',');
		
		
		let rslt = start.validate(array_of_shame,letters,numbers) //функци€, вызывает файл, где выполн€етс€ логика проверки кораблей от пользовател€
		console.log(rslt);
		if (rslt === undefined)  // проверка ошибки пользовател€
		{
		res.statusCode =400;
		res.end('ќшибка пользовател€');
		}
		else 
		{	
		res.statusCode =200;
	
		//переписываю массив пользовател€ , каждый третий элемент флаг о целости корабл€	
		for (let i=0,j=0; j < array_of_shame.length; i+=3, j+=2) 
		{
		check_data_u[i] = array_of_shame[j]; 
		check_data_u[i+1] = array_of_shame[j+1];
		check_data_u[i+2] = "false";
		console.log(array_of_shame[j]);
		console.log(array_of_shame[j+1]);
		console.log(check_data_u);
		}
		user_object.arr_user = check_data_u;  //корабли пользовател€
		res.end(' оординаты прин€ты');
		}

		function nextRnd(){
		return Math.floor(Math.random()*10);}
/////////////////////////////////////////////ћассив кораблей сервера//////////////////
		let reslt = start.generateFld(numbers, letters, nextRnd) //reslt =check_data_s
		user_object.arr_server = reslt;  //корабли сервера дл€ конкретного пользовател€
		res.statusCode =200;
		res.end('OK, GAME STARTED');		
		console.log(user_object);
	}


	 
	else if (str == "/check")
	{
	res.statusCode =200;			// после любого запроса возвращает статус - все хорошо
	res.setHeader('Content-type','application/json');  //заголовок запроса , контент - возвращаем картинку, JSon 
	let ship_lttr = obj.x;    // coords-параметр 1 ого корабл€ - буква
	let ship_num = obj.y;    // coords-параметр 1 ого корабл€ - число
	
	let rslt_of_strike_user = check.strike_user(letters,numbers,arr_strike) //функци€, вызывает файл, где выполн€етс€ логика проверки выстрела от пользовател€
		if (rslt_of_strike_user === undefined)  // проверка ошибки пользовател€
		{
		res.statusCode =400;
		res.end('ќшибка пользовател€');
		}
		else 
		{	
		res.statusCode =200;
		res.end(' оординаты прин€ты');
		}
	
	
		let rslt_hit_strike_user = check.check_strike_user(array_server, ship_lttr, ship_num) //функци€, вызывает файл, где выполн€етс€ логика проверки кораблей от пользовател€
		if (rslt_hit_strike_user === undefined)  // проверка ошибки пользовател€
		{
		res.statusCode =400;
		res.end('ќшибка');
		}
		else 
		{	
		res.statusCode =200;
		res.end('¬ыстрел прин€т');
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


