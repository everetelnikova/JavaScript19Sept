const http = require('http'); // ����������� ���������� ��� http
const url = require('url'); 
const fs = require('fs');
const  host = '127.0.0.1';        // ip PC
const  port = '80';				 // port
let users = {};

function respond(req,res)		// ����������� ��� ��������� ������ �������	 
{
const parsed = url.parse(req.url,true);
const obj = parsed.query;		//  ������
const str = parsed.path;		// ����� �������(���� � ����) 
	if (str == "/favicon.ico")
	{
	res.statusCode =400;
	res.end();
	}
	else if (str != "/")
		{		
		res.statusCode =200;			// ����� ������ ������� ���������� ������ - ��� ������
		res.setHeader('Content-type','application/json');  //��������� ������� , ������� - ���������� ��������, JSon � �.�.
		let key_from_user = req.headers.cookie;  // ���������� ���  ��������� ���� � ������������ ������� ��� ��������
		let state;
			if (users[key_from_user] === undefined )		// ����������� ��� ����� ������������					
			{
			let passnum = Math.floor(Math.random()*1000000); 
			let cookie = 'id='+passnum;	
			res.setHeader('Set-Cookie',cookie); 
			//users[cookie] = 145;
			console.log('New user '+ cookie);
			state = users[cookie];
			key_from_user = cookie;
			}
			else
			{
			state = users[key_from_user];
			console.log('Old user');
			}
			console.log(state);
		}
	else 
	{res.statusCode =200;	// ����� ������ ������� ���������� ������ - ��� ������; ���� ������ ���, ���������� ��������
	res.setHeader('Content-type','text/html');  //��������� ������� , ������� - ���������� ��������, JSon � �.�.
	//�������
	let file = fs.readFileSync("C:/Nodejs/ship/Battleship.html");     //��������, ������� ���������� ������ �� �������
	//��������
	res.end(file);
	}
}
const server = http.createServer(respond);
function onstart(){console.log(`start ${host}:${port}`);}
server.listen(port,host,onstart);   //������� ��������� �������


