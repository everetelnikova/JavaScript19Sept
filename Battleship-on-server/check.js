module.exports ={
strike_user:function(letters,numbers,arr_strike){
// �������� ������������ ���������-�������� �� ������������	
let result;
	if (arr_strike.length %2 ==0 )
	  	{
			let arr_strike_numbers = arr_strike.filter( function (item,index) { return index %2!=0;}) // ������ � �������
			let arr_strike_letters = arr_strike.filter( function (item,index) { return index %2==0;})
			// ������ �����  �� ������������, ������� �� ������ � ���������� 0..9
			// ���� ��� ��������� � ������ � ������� �� 0..9, ������� ������ ������
			let mistake_n = arr_strike_numbers.filter(function(item, index) {
				if (item < 0 || item >9){return true;}
				else {return false;}	
				});
			if (mistake_n.length > 0) 
			{result = "������������ ���������� " + mistake_n ;
			return result;}		

			let mistake_l = arr_strike_letters.filter(function(item) 
			{ let r = letters.filter(function(n)
				{if (n==item){return true;}
					else {return false;}
				});
				if (r.length == 0){	return true;} 
				else {return false;}
			}); 				
			if (mistake_l.length > 0) 
			{
			result = "������������ ���������� " + mistake_l ;
			return result;
			}
		}
		else 
		{
		result = "�� ���������� ������";
		}
	return result;
},	
// �������� ��������� � ������� �������
// � ������� �������� ������ ���� �������, ��������� �����-��������, ���������� �����-��������
check_strike_user: function(array_server, ship_lttr, ship_num)
{
	let hit;  // ����������-���� 
	let index = array_server.indexOf(ship_lttr); //���� ������ �����-�������� � ������� �������(���� ��� ����)	
	let check_data_s = [];  // �������������� ������ ������� � ������� �� ���������� ��������� ����� ������ ���� ��������� 
	for (let i,j; j < array_server.length; i+=3, j+2) 
	{
	check_data_s[i] = array_server[j]; 
	check_data_s[i+1] = array_server[j+1];
	check_data_s[i+2] = "false";	
	}
	

	for (let i = 0; i< check_data_s.length; i++;) //��������� ������ �� � ������� �������
		{
			if (check_data_s[index +1] == ship_num)				// ��������� � ���������� �����
			{
			 check_data_s[index +2] = "true";				// ��� ��������� ������������ 3 ���������� � true
			 hit = '�����!';
			 for (let i = 0; i<  check_data_s.length; i+ 2)		// ���� �������� �� ���� �� �������� ������
			 {
				 if (check_data_s[i] == 'true')
				 {hit = '������ ������������';}
			 }
			}
			else  
			{hit = '������!';} 
		}
return hit;
},	

// ����������� ������ ��������� �������� �� �������
generate_strike_server:function(letters,numbers,next)
	{
	let strike_from_server = [];								// ������ ������ ���� ��������
	let letter_ship_index = next();		// ��������� ����� ������� ����
	let numbers_ship_index = next();		// ��������� ����� ������� ����


	while (strike_from_server.length <= 2)
	{
	let ship_server_letter = letters[letter_ship_index];			// �������� ��������� ���������� �������
	let ship_server_number = numbers[numbers_ship_index];	// �������� �������� ���������� �������
	 if (this.check_adjacent(strike_from_server, letter_ship_index,numbers_ship_index) == false) ///// ������� ��� ��������, ��� ��������� ������� ����������
	 {strike_from_server.push(ship_server_letter,ship_server_number);
	  letter_ship_index = next();
	  numbers_ship_index = next();}
	else {letter_ship_index = next();
	  numbers_ship_index = next()}
	}
	return strike_from_server;  // ������� ���������� � ������������ ship_lttr_s, ship_num_s
	},
// �������� ����� �� ������ � ������� ������������

check_strike_server: function(array_user, ship_lttr_s, ship_num_s)
{
	let hit;  // ����������-���� 
	let index = array_user.indexOf(ship_lttr); //���� ������ �����-�������� � ������� �����(���� ��� ����)	
	let check_data_u = [];  // �������������� ������ ����� � ������� �� ���������� ��������� ����� ������ ���� ��������� 
	for (let i,j; j < array_user.length; i+=3, j+2) 
	{
	check_data_u[i] = array_user[j]; 
	check_data_u[i+1] = array_user[j+1];
	check_data_u[i+2] = "false";	
	}
	

	for (let i = 0; i< check_data_u.length; i++;) //��������� ������ �� � ������� �������
		{
			if (check_data_u[index +1] == ship_num)				// ��������� � ���������� �����
			{
			 check_data_u[index +2] = "true";				// ��� ��������� ������������ 3 ���������� � true
			 hit = '�����!';
			 for (let i = 0; i<  check_data_u.length; i+ 2)		// ���� �������� �� ���� �� �������� ������
			 {
				 if (check_data_u[i] == 'true')
				 {hit = '������ �������';}
			 }
			}
			else  
			{hit = '������!';} 
		}
return hit;
},
 jasmine: function(){return true;}
}
