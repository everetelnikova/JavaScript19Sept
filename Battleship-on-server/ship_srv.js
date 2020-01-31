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
		function nextRnd(){
			return Math.floor(Math.random()*10);
		}
/////////////////////////////////////////////Массив кораблей сервера////////////////////////////////
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


