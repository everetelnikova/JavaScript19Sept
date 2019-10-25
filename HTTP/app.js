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
	if (obj.present == 145 && 	obj.option == "goat")
	{
	res.end('{"id":"334","left":["wolf","cabbage"],"right":["peasant","goat"]}');
	}
res.end('It works!');
}						 //тект, то, что возвращаем по запросу и завершаем запрос	
else {res.statusCode =200;	// после любого запроса возвращает статус - все хорошо; если данных нет, подгружаем страницу
res.setHeader('Content-type','text/html');  //заголовок запроса , контент - возвращаем картинку, JSon и т.д.
//открыть
let file = fs.readFileSync("Transport.html");     //
//отослать
res.end(file);}
}
const server = http.createServer(respond);
function onstart(){console.log(`start ${host}:${port}`);}
server.listen(port,host,onstart);   //гототвы принимать запросы


