const http = require('http'); // подключение библиотеки для http
//const sessions = require ('client-sessions'); 
const url = require('url'); 
const fs = require('fs');
const  host = '127.0.0.1';        // ip PC
const  port = '80';				 // port
//let state = 145;
let users = {};	
function respond(req,res)		// запускается при получении любого запроса	 
{
const parsed = url.parse(req.url,true);

const obj = parsed.query;
const str = parsed.path;
if (str == "/favicon.ico")
{
res.statusCode =400;
res.end();
}

else 
if (str != "/"){		
res.statusCode =200;			// после любого запроса возвращает статус - все хорошо
res.setHeader('Content-type','application/json');  //заголовок запроса , контент - возвращаем картинку, JSon и т.д.
let userfromKey = req.headers.cookie;  // переменная для  получения куки у пользователя который уже работает
console.log(userfromKey);
let state;
if (users[userfromKey] === undefined )		// выполняется при новом пользователе					
{
let passnum = Math.floor(Math.random()*1000000); 
let cookie = 'id='+passnum;	
res.setHeader('Set-Cookie',cookie); 
users[cookie] = 145;
console.log('New user '+ cookie);
state = users[cookie];
userfromKey = cookie;
}
else
{
state = users[userfromKey];
console.log('Old user');

}

console.log(state);
	if (state == 145) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"334","left":["wolf","cabbage"],"right":["peasant","goat"]}');
		state = 334;
		}
	
		if (obj.option == "cabbage")
		{
		res.end('{"id":"928","left":["wolf","goat"],"right":["peasant","cabbage"],"status":"wolf eat goat"}');
		state = 928;
		}
	
		if (obj.option == "wolf")
		{
		res.end('{"id":"535","left":["cabbage","goat"],"right":["peasant","wolf"],"status":"goat eat cabbage"}');
		state = 535;
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"159","left":["cabbage","wolf","goat"],"right":["peasant"],"status":"massacre"}');
		state = 159;
		}
	}
	else if (state == 334)
	{
		if (obj.option == "peasant")
		{
		res.end('{"id":"850","left":["cabbage","wolf","peasant"],"right":["goat"]}');
		state = 850;
		}
		if (obj.option == "goat")
		{
		res.end('{"id":"145","left":["cabbage","wolf","peasant","goat"],"right":[]}');
		state = 145;
		}
	}

	else if (state == 850) 
	{ 	
		if (obj.option == "cabbage")
		{
		res.end('{"id":"432","left":["wolf"],"right":["cabbage","peasant","goat"]}');
		state = 432;
		}
	
		if (obj.option == "wolf")
		{
		res.end('{"id":"328","left":["cabbage"],"right":["wolf","peasant","goat"]}');
		state = 328;
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"334","left":["wolf","cabbage"],"right":["peasant","goat"]}');
		state = 334;
		}
	}	

	else if (state == 432) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"966","left":["wolf","peasant","goat"],"right":["cabbage"]}');
		state = 966;
		}
	
		if (obj.option == "cabbage")
		{
		res.end('{"id":"850","left":["cabbage","wolf","peasant"],"right":["goat"]}');
		state = 850;
		}

		if (obj.option == "peasant")
		{
		res.end('{"id":"984","left":["cabbage","wolf","peasant","goat"],"right":[],"status":"goat eat cabbage"}');
		state = 984;
		}
	}

	else if (state == 328) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"923","left":["cabbage","peasant","goat"],"right":["wolf"]}');
		state = 923;
		}
	
		if (obj.option == "wolf")
		{
		res.end('{"id":"850","left":["cabbage","wolf","peasant"],"right":["goat"]}');
		state = 850;
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"690","left":["cabbage","peasant"],"right":["wolf","goat"],"status":"wolf eat goat"}');
		state = 690;
		}
	}

	else if (state == 923) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"328","left":["cabbage"],"right":["wolf","peasant","goat"]}');
		state = 328;
		}
	
		if (obj.option == "cabbage")
		{
		res.end('{"id":"115","left":["goat"],"right":["cabbage","wolf","peasant"]}');
		state = 115;
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"535","left":["cabbage","goat"],"right":["peasant","wolf"],"status":"goat eat cabbage"}');
		state = 535;
		}
	}

	else if (state == 115) 
	{ 	
		if (obj.option == "cabbage")
		{
		res.end('{"id":"923","left":["cabbage","peasant","goat"],"right":["wolf"]}');
		state = 923;
		}
	
		if (obj.option == "wolf")
		{
		res.end('{"id":"966","left":["wolf","peasant","goat"],"right":["cabbage"]}');
		state = 966;
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"211","left":["peasant","goat"],"right":["cabbage","wolf"]}');
		state = 211;
		}
	}

	else if (state == 966) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"432","left":["wolf"],"right":["cabbage","peasant","goat"]}');
		state = 432;
		}
	
		if (obj.option == "wolf")
		{
		res.end('{"id":"115","left":["goat"],"right":["cabbage","wolf","peasant"]}');
		state = 115;
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"928","left":["wolf","goat"],"right":["peasant","cabbage"],"status":"wolf eat goat"}');
		state = 928;
		}
	}

	else if (state == 211) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"417","left":[],"right":["cabbage","wolf","peasant","goat"],"status":"task complete"}');
		state = 417;
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"115","left":["goat"],"right":["cabbage","wolf","peasant"]}');
		state = 115;
		}
	}
	else {res.statusCode =400;
		  res.end ('Mistake'); 
		  }
		  
	users[userfromKey] = state;
}						 //тект, то, что возвращаем по запросу и завершаем запрос	
else {
res.statusCode =200;	
res.setHeader('Content-type','text/html');  
let file = fs.readFileSync("C:/Users/Женька/Desktop/JavaScript19Sept/React/Transport.html"); 
res.end(file);
console.log(str);	
}	
	
if(str == "/Trans_fetch.js"){
res.statusCode =200;	
res.setHeader('Content-type', 'text/javascript');  
let file1 = fs.readFileSync("C:/Users/Женька/Desktop/JavaScript19Sept/React/Trans_fetch.js"); 
res.end(file1);}	

}
const server = http.createServer(respond);
function onstart(){console.log(`start ${host}:${port}`);}
server.listen(port,host,onstart);   //гототвы принимать запросы


