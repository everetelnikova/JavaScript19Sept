const http = require('http'); // подключение библиотеки для http
const url = require('url'); 
const fs = require('fs');
const  host = '127.0.0.1';        // ip PC
const  port = '80';				 // port

function respond(req,res)		// запускается при получении любого запроса	 
{
const parsed = url.parse(req.url,true);
console.log(parsed);
const obj = parsed.query;
const str = parsed.path;
if (str != "/"){
console.log(obj);			
res.statusCode =200;			// после любого запроса возвращает статус - все хорошо
res.setHeader('Content-type','application/json');  //заголовок запроса , контент - возвращаем картинку, JSon и т.д.
	if (obj.present == 145) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"334","left":["wolf","cabbage"],"right":["peasant","goat"]}');
		}
	
		if (obj.option == "cabbage")
		{
		res.end('{"id":"928","left":["wolf","goat"],"right":["peasant","cabbage"],"status":"wolf eat goat"}');
		}
	
		if (obj.option == "wolf")
		{
		res.end('{"id":"535","left":["cabbage","goat"],"right":["peasant","wolf"],"status":"goat eat cabbage"}');
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"159","left":["cabbage","wolf","goat"],"right":["peasant"],"status":"massacre"}');
		}
	}
	else if (obj.present == 334)
	{
		if (obj.option == "peasant")
		{
		res.end('{"id":"850","left":["cabbage","wolf","peasant"],"right":["goat"]}');
		}
		if (obj.option == "goat")
		{
		res.end('{"id":"145","left":["cabbage","wolf","peasant","goat"],"right":[]}');
		}
	}

	else if (obj.present == 850) 
	{ 	
		if (obj.option == "cabbage")
		{
		res.end('{"id":"432","left":["wolf"],"right":["cabbage","peasant","goat"]}');
		}
	
		if (obj.option == "wolf")
		{
		res.end('{"id":"328","left":["cabbage"],"right":["wolf","peasant","goat"]}');
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"334","left":["wolf","cabbage"],"right":["peasant","goat"]}');
		}
	}	

	else if (obj.present == 432) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"966","left":["wolf","peasant","goat"],"right":["cabbage"]}');
		}
	
		if (obj.option == "cabbage")
		{
		res.end('{"id":"850","left":["cabbage","wolf","peasant"],"right":["goat"]}');
		}

		if (obj.option == "peasant")
		{
		res.end('{"id":"984","left":["cabbage","wolf","peasant","goat"],"right":[],"status":"goat eat cabbage"}');
		}
	}

	else if (obj.present == 328) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"923","left":["cabbage","peasant","goat"],"right":["wolf"]}');
		}
	
		if (obj.option == "wolf")
		{
		res.end('{"id":"850","left":["cabbage","wolf","peasant"],"right":["goat"]}');
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"690","left":["cabbage","peasant"],"right":["wolf","goat"],"status":"wolf eat goat"}');
		}
	}

	else if (obj.present == 923) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"328","left":["cabbage"],"right":["wolf","peasant","goat"]}');
		}
	
		if (obj.option == "cabbage")
		{
		res.end('{"id":"115","left":["goat"],"right":["cabbage","wolf","peasant"]}');
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"535","left":["cabbage","goat"],"right":["peasant","wolf"],"status":"goat eat cabbage"}');
		}
	}

	else if (obj.present == 115) 
	{ 	
		if (obj.option == "cabbage")
		{
		res.end('{"id":"923","left":["cabbage","peasant","goat"],"right":["wolf"]}');
		}
	
		if (obj.option == "wolf")
		{
		res.end('{"id":"966","left":["wolf","peasant","goat"],"right":["cabbage"]}');
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"211","left":["peasant","goat"],"right":["cabbage","wolf"]}');
		}
	}

	else if (obj.present == 966) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"432","left":["wolf"],"right":["cabbage","peasant","goat"]}');
		}
	
		if (obj.option == "wolf")
		{
		res.end('{"id":"115","left":["goat"],"right":["cabbage","wolf","peasant"]}');
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"928","left":["wolf","goat"],"right":["peasant","cabbage"],"status":"wolf eat goat"}');
		}
	}

	else if (obj.present == 211) 
	{ 	if (obj.option == "goat")
		{
		res.end('{"id":"417","left":[],"right":["cabbage","wolf","peasant","goat"],"status":"task complete"}');
		}
	
		if (obj.option == "peasant")
		{
		res.end('{"id":"115","left":["goat"],"right":["cabbage","wolf","peasant"]}');
		}
	}
	else {res.statusCode =400;
		  res.end ('Mistake'); }
}						 //тект, то, что возвращаем по запросу и завершаем запрос	
else {res.statusCode =200;	// после любого запроса возвращает статус - все хорошо; если данных нет, подгружаем страницу
res.setHeader('Content-type','text/html');  //заголовок запроса , контент - возвращаем картинку, JSon и т.д.
//открыть
let file = fs.readFileSync("C:/Nodejs/Transport.html");     //
//отослать
res.end(file);}
}
const server = http.createServer(respond);
function onstart(){console.log(`start ${host}:${port}`);}
server.listen(port,host,onstart);   //гототвы принимать запросы


