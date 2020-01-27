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
//////////////////////////////////////////////////////
		let strng = obj.coord;    		// coord-�������� ������� �� ������� �������, ���� �����-��� ������� ���� ������
		let data = strng.split (',');	//  ������ � ������������
		users[key_from_user] = data; 	//  ���������� � ������ users  �� ����� ���� ������ � ������������ ������������
		if (data.length %2 ==0 )
	  	{
			let data_numbers = data.filter( function (item,index) { return index %2!=0;})      // ������ � �������

			let data_letters = data.filter( function (item,index) { return index %2==0;})

			let mistake_n = data_numbers.find(function(item, index) {       // ��������� �������� �� ���������
				let r = numbers.find(function(n) {return n == item;});
				return r === undefined;});
				
			if (mistake_n != undefined) 
			{
			result = "������������ ���������� " + mistake_n ;
			return;
			}

			let mistake_l = data_letters.find(function(item, index) {       // ��������� �������� �� ���������
				let rr = letters.find(function(n) {return n == item;});
				return rr === undefined;});
				
			if (mistake_l != undefined) 
			{
			result = "������������ ���������� " + mistake_l ;
			return;
			}
				
			let ship_l  = data_letters.filter(function(item, index) {   // ������� ��������� �����
				let r = letters.filter(function(n) {return n == item;});
				return r != undefined;}); 
				
			let ship_n  = data_numbers.filter(function(item, index) {   // ������� ��������� �����
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
		
		if (false)  // �������� ������ ������������
		{
		res.statusCode =400;
		res.end();
		}
/////////////////////////////////////////////������ �������� �������////////////////////////////////
			let numbers = [0,1,2,3,4,5,6,7,8,9];					//������ �������� �����
		let letters = ["�","�","�","�","�","�","�","�","�","�"];// ������ ��������� ����
		let x_ship_index = Math.floor(Math.random() * 10);		// ��������� ����� ������� ����
		let y_ship_index = Math.floor(Math.random() * 10);		// ��������� ����� ������� ����
		let ship_server_letter = letters[x_ship_index];			// �������� ��������� ���������� �������
		let ship_server_number = numbers[y_ship_index];			// �������� �������� ���������� �������
		let ship_fld_server = [];								// ������ ������ ���� ��������
		function server_ship_fld_empty()								// ���-�� ��������� �������� �� ���� �������	
		{
		if (ship_fld_server == "")								// ���� ������ ���� ������� ������ - �������� ���� ����������
		{
		 ship_fld_server.push(ship_server_letter,ship_server_number);
		}
		}
		server_ship_fld_empty();
		
		function server_ship_fld()
		{
			for (let i = 0; i <=200; i++)						// �������� �� ����� ���� ��������� ��������� ��� 10 ��������
			{
			let x_ship_index = Math.floor(Math.random() * 10);		// ��������� ����� ������� ����
			let y_ship_index = Math.floor(Math.random() * 10);		// ��������� ����� ������� ����
			let ship_server_letter = letters[x_ship_index];			// �������� ��������� ���������� �������
			let ship_server_number = numbers[y_ship_index];			// �������� �������� ���������� �������
			
				if (ship_fld_server[i] == ship_server_letter)	// ���� ����������-����� ���� � ������� ���� �������
				{
					for (let z = 2; z <=20; z++)						// �������� �� ����� ���� ��������� ��������� ��� 10 ��������  0  � ������ ������ ������ 
					{
						if (ship_fld_server[z] == letters[x_ship_index-1] || letters[x_ship_index+1])	//  � ������� ���� ����������� ����������-����� 
						{
						  if (ship_fld_server[z+1] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))	// ��������� ���������(��������) �� ��������� � ��������� ������� 		
						  {
							 ship_fld_server.push(ship_server_letter,ship_server_number); 
						  }
						}
					}
								
				}	
				else 	//WRONG!						// ���� ����������-����� ��� � ������� ���� �������, ������, ������ ��� ���� ���������, � ����� ������ �� ���������� ������		
				{	
				for (let n = 0,m = 1; n <=20; n+=2,m+=2)						// �������� �� ����� ���� ��������� ��������� ��� 10 ��������
					{
						if (ship_fld_server[n] == letters[x_ship_index-1] || letters[x_ship_index+1])	//  � ������� ���� ����������� ����������-����� 
						{
							if (ship_fld_server[n] != 'undefined' )
							{
									if (ship_fld_server[m] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))	// ��������� ���������(��������) �� ��������� � ��������� ������� 	
									{
										if (ship_fld_server[m] != 'undefined')
										{
										ship_fld_server.push(ship_server_letter,ship_server_number); 
										}
									}
							}	
						}
						//else if (ship_fld_server[n] == letters[x_ship_index+1])	//  � ������� ���� ����������� ����������-����� 
						//{
						//  if (ship_fld_server[m] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))	// ��������� ���������(��������) �� ��������� � ��������� ������� 		
						//  {
						//	 ship_fld_server.push(ship_server_letter,ship_server_number); 
						//  }
						//}
				    }
				}
			}
		console.log(ship_fld_server);	
		}
			
		
		server_ship_fld();
		console.log(ship_fld_server);
		
		res.statusCode =200;
		res.end('OK, GAME STARTED');
		}
		server_ship_fld();

        � ������� res.statusCode =200;		                          
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


