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
		function nextRnd(){
			return Math.floor(Math.random()*10);
		}
/////////////////////////////////////////////������ �������� �������////////////////////////////////
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
		                          
		/////////////////////////////////////////////////////	
		}
	}
///////////////����� ����� �������� ������, �������������� ������ ��������� ������������///
users[key_from_user]
let check_data = [];
for (let i,j; j < users[key_from_user].length; i+=3, j+2)
{
check_data[i] = users[key_from_user][j]; 
check_data[i+1] = users[key_from_user][j+1];
check_data[i+2] = "false";	
}
//////////////////����� ����� �������� ������������, �������������� ������ ��������� ������������///
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
	res.statusCode =200;			// ����� ������ ������� ���������� ������ - ��� ������
	res.setHeader('Content-type','application/json');  //��������� ������� , ������� - ���������� ��������, JSon 
	let ship_lttr = obj.x;    // coords-�������� 1 ��� ������� - �����
	let ship_num = obj.y;    // coords-�������� 1 ��� ������� - �����
	
	for (let i = 0; i< servs[key_from_user].length; i++;) //��������� ������ �� � ������� �������
		{
		 let index = servs[key_from_user].indexOf(ship_lttr);
		 if (servs[key_from_user][index +1] == ship_num)
		 {
			 servs[key_from_user][index +2] = "true";				// ��� ��������� ������������ 3 ���������� 
			 for (let i = 0; i<  check_data_serv.length; i+ 2)		// ���� �������� �� ���� �� �������� ������
			 {
				 if ( check_data_serv[i] == 'false')
				 {
					 res.statusCode =200;
					 res.end('�����!');
				 }
			 }
		 }
		} 
		 else 
		{
		 //  ������ ������������ �������� ��������� -��������� �� �������, ������ � ���  �����
		let numbers = [0,1,2,3,4,5,6,7,8,9];
		let letters = ["�","�","�","�","�","�","�","�","�","�"];
		let x_coord_index = Math.floor(Math.random() * 10);	
		let y_coord_index = Math.floor(Math.random() * 10);		
		let x_coord = letters[x_coord_index];	 
		let y_coord = letters[y_coord_index];
//  ��������� ��� �� ����� �� ��������� � ������� ���������		- �� �������

		for (let i = 0; i< users[key_from_user].length; i++;) //��������� ������ �� � ������� �������
		{
		 if (servs[key_from_user][index +1] == ship_num)
		 {
			 servs[key_from_user][index +2] = "true";				// ��� ��������� ������������ 3 ���������� 
			 for (let i = 0; i<  check_data_serv.length; i+ 2)		// ���� �������� �� ���� �� �������� ������
			 {
				 if ( check_data_serv[i] == 'false')
				 {
					 res.statusCode =200;
					 res.end('�����!');
				 }
			 }
		 }
		} 
			 
		///////////////////////////////////////////////////////////////////////////////////////	 
			 // ��� ������ ������- ������� ������������ ���� ���������
			 	res.statusCode =200;
				res.end('������!');
		 
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


