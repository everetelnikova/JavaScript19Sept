const http = require('http'); // ����������� ���������� ��� http
const url = require('url'); 
const fs = require('fs');
const start = require('./start);
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
	else if (str == "/start")
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
			users[cookie] = {};
			console.log('New user '+ cookie);
			key_from_user = cookie;
			}
		let rslt = start.validate() //�������, �������� ����, ��� ����������� ������ �������� �������� �� ������������
		if (rslt === undefined)  // �������� ������ ������������
		{
		res.statusCode =400;
		res.end('������ ������������');
		}
		else 
		{	
		res.statusCode =200;
		res.end('���������� �������');
		}
///////////////////////////////////////////////////////////////////////////////////////		
		function nextRnd(){
			return Math.floor(Math.random()*10);
		}
/////////////////////////////////////////////������ �������� �������//////////////////
		let reslt = start.generateFld(numbers, letters, nextRnd) //�������, �������� ����, ��� ����������� ������ �������� �������� �� ������������
		if (reslt == true)  // �������� ������ ������������
		{
		res.statusCode =400;
		res.end('������ ������������');    // ������� ������ �� �������?
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
	res.statusCode =200;			// ����� ������ ������� ���������� ������ - ��� ������
	res.setHeader('Content-type','application/json');  //��������� ������� , ������� - ���������� ��������, JSon 
	let ship_lttr = obj.x;    // coords-�������� 1 ��� ������� - �����
	let ship_num = obj.y;    // coords-�������� 1 ��� ������� - �����
	
	let rslt_of_strike_user = check.strike_user(letters,numbers,arr_strike) //�������, �������� ����, ��� ����������� ������ �������� �������� �� ������������
		if (rslt_of_strike_user === undefined)  // �������� ������ ������������
		{
		res.statusCode =400;
		res.end('������ ������������');
		}
		else 
		{	
		res.statusCode =200;
		res.end('���������� �������');
		}
	
	
		let rslt_hit_strike_user = check.check_strike_user(array_server, ship_lttr, ship_num) //�������, �������� ����, ��� ����������� ������ �������� �������� �� ������������
		if (rslt_hit_strike_user === undefined)  // �������� ������ ������������
		{
		res.statusCode =400;
		res.end('������');
		}
		else 
		{	
		res.statusCode =200;
		res.end('������� ������');
		}
	
		let rslt_hit_strike_user = check.generate_strike_server(letters,numbers,next)//�������, �������� ����, ��� ����������� ������ �������� �������� �� �������
		if (rslt_hit_strike_user === undefined)  // �������� ������ �������
		{
		res.statusCode =400;
		res.end('������');
		}
		else 
		{	
		res.statusCode =200;
		res.end('������� ������');
		}


	
	}
	else 
	{res.statusCode =200;	// ����� ������ ������� ���������� ������ - ��� ������; ���� ������ ���, ���������� ��������
	res.setHeader('Content-type','text/html');  //��������� ������� , ������� - ���������� ��������, JSon � �.�.
	let file = fs.readFileSync("Battleship.html");     //��������, ������� ���������� ������ �� �������
	res.end(file);
	}
}
const server = http.createServer(respond);
function onstart(){console.log(`start ${host}:${port}`);}
server.listen(port,host,onstart);   //������� ��������� �������


