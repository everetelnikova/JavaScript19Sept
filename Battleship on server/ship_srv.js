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
		let strng = obj.coord;    // coord-параметр запроса на стороне клиента, куда запис-тся коордты всех корабл
		let data = strng.split (',');//  массив с координатами
		users[key_from_user] = data;
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
		
		if (false)
		{
		res.statusCode =400;
		res.end();
		}
		/////////////////////////////////////////////	
		создать поле со стороны сервера используя рандом
        и вернуть res.statusCode =200;		                          
		/////////////////////////////////////////////////////	
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
		 else 
		 {
			 //  первое формирование ответных координат -выстрелов от сервера, рандом и все  такое
			 // как только промах- возврат пользователю всех выстрелов
			 	res.statusCode =200;
				res.end('Промах!');
		 }
		}

	
	}
	else 
	{res.statusCode =200;	// после любого запроса возвращает статус - все хорошо; если данных нет, подгружаем страницу
	res.setHeader('Content-type','text/html');  //заголовок запроса , контент - возвращаем картинку, JSon и т.д.
	//открыть
	let file = fs.readFileSync("Battleship.html");     //страница, которую возвращает сервер по запросу
	//отослать
	res.end(file);
	}
}
const server = http.createServer(respond);
function onstart(){console.log(`start ${host}:${port}`);}
server.listen(port,host,onstart);   //гототвы принимать запросы


