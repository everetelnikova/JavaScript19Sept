const http = require('http'); // ����������� ���������� ��� http
const url = require('url'); 
const fs = require('fs');
const start = require('./start');
const check = require('./check');
const  host = '127.0.0.1';        // ip PC
const  port = '80';				 // port
let users = {};

function respond(req,res)		// ����������� ��� ��������� ������ �������	 
{
const parsed = url.parse(req.url,true);
const obj = parsed.query;		//  ������
const str = parsed.path;		// ����� �������(���� � ����) 
console.log(str);
console.log(obj);
let numbers = [0,1,2,3,4,5,6,7,8,9];					//������ �������� �����
//let letters = ["�","�","�","�","�","�","�","�","�","�"];// ������ ��������� ����
//let letters = ["a","b","c","d","e","f","g","h","j","k"];// ������ ��������� ����
	if (str == "/favicon.ico")
	{
	res.statusCode =400;
	res.end();
	}
	else if (str.includes("/start"))
	{	
		let letters = ["�","�","�","�","�","�","�","�","�","�"];
		//let letters = ["a","b","c","d","e","f","g","h","j","k"];
		res.statusCode =200;			// ����� ������ ������� ���������� ������ - ��� ������
		res.setHeader('Content-type','application/json');  //��������� ������� , ������� - ���������� ��������, JSon � �.�.
		let key_from_user = req.headers.cookie;  // ���������� ���  ��������� ���� � ������������ ������� ��� ��������
		// ������ �� ����� ������� ������ ������������
		user_object = check.cookie_user(users,key_from_user,res);
		let array_of_shame =obj.present.split(',');
		console.log(array_of_shame);
		let check_data_u= [];
		//let array_of_shame = string_of_pain.split(',');
		
		
		let rslt = start.validate(array_of_shame,letters,numbers) //�������, �������� ����, ��� ����������� ������ �������� �������� �� ������������
		console.log(rslt);
		if (rslt === undefined)  // �������� ������ ������������
		{
		res.statusCode =400;
		res.end('������ ������������');
		}
		else 
		{	
		res.statusCode =200;
	
		//����������� ������ ������������ , ������ ������ ������� ���� � ������� �������	
		for (let i=0,j=0; j < array_of_shame.length; i+=3, j+=2) 
		{
		check_data_u[i] = array_of_shame[j]; 
		check_data_u[i+1] = array_of_shame[j+1];
		check_data_u[i+2] = "false";
		console.log(array_of_shame[j]);
		console.log(array_of_shame[j+1]);
		console.log(check_data_u);
		}
		user_object.arr_user = check_data_u;  //������� ������������
		res.end('���������� �������');
		}

		function nextRnd(){
		return Math.floor(Math.random()*10);}
/////////////////////////////////////////////������ �������� �������//////////////////
		let reslt = start.generateFld(numbers, letters, nextRnd) //reslt =check_data_s
		user_object.arr_server = reslt;  //������� ������� ��� ����������� ������������
		res.statusCode =200;
		res.end('OK, GAME STARTED');		
		console.log(user_object);
	}


	 
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


