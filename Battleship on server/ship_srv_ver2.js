let numbers = [0,1,2,3,4,5,6,7,8,9];					//������ �������� �����
		let letters = ["�","�","�","�","�","�","�","�","�","�"];// ������ ��������� ����
		let x_ship_index = Math.floor(Math.random() * 10);		// ��������� ����� ������� ����
		let y_ship_index = Math.floor(Math.random() * 10);		// ��������� ����� ������� ����
		let ship_server_letter = letters[x_ship_index];			// �������� ��������� ���������� �������
		let ship_server_number = numbers[y_ship_index];			// �������� �������� ���������� �������
		let ship_fld_server = [];								// ������ ������ ���� ��������
    
    // �������� �� ����� ���� ��������� ��������� ��� 10 ��������
    // ���������:
    // - array  ������ � ������������
    // - letter ������ ����� � �������, ����� ������� ����� ������ ������ �������
    // - number �����, ����� ������� ����� ������ ������ �������
    //���������� true, ���� ������ ������� ����� � ��������� ����������� ������
    //����� - false
    function check_adjacent(array, letter_idx, number)
    {
    for (let i = 0; i<=20; i++)	  // ���� ��� ���� ��������� ��������
    {
      if(array[i] == (letters[letter_idx+1] || array[i] ==letters[letter_idx-1])) // ����  �����, ��������� �� ������-�����������
      {
         if (array[i+1] == (number+1 || number|| number-1) ) // ��������� ��� �����, ��������� �� ������-�����������, �� ����� ����������-����� ����� 
			{
			return true; 
			}
      } 
      else 
      {
         return false;   // ��� ����������� ���� => ���������� ��� ��������� � ������
      }
    }
    }
    
    
    {
    	let ship_fld_server_test = ['�','0','�','9','�','10','�','1'];
      if (check_adjacent(ship_fld_server_test, 2,'9')){
      document.getElementById("out").innerHTML = "�������";
      } else {
      document.getElementById("out").innerHTML = "�� �������";    // ������,��� ����� ���������� ��� ����������� �������� 
      }
    }
    /*
    
		function server_ship_fld()								// ���-�� ��������� �������� �� ���� �������	
		{
		if (ship_fld_server == "")								// ���� ������ ���� ������� ������ - �������� ���� ����������
		{
		 ship_fld_server.push(ship_server_letter,ship_server_number);
		}
		else
		{
			for (let i = 0; i <=20; i++)						// �������� �� ����� ���� ��������� ��������� ��� 10 ��������
			{
			let x_ship_index = Math.floor(Math.random() * 10);		// ��������� ����� ������� ����
			let y_ship_index = Math.floor(Math.random() * 10);		// ��������� ����� ������� ����
				if (ship_fld_server[i] == ship_server_letter)	// ���� ����������-����� ���� � ������� ���� �������
				{
					for (let z = 0; z <=20; z++)						// �������� �� ����� ���� ��������� ��������� ��� 10 ��������
					{
						if (ship_fld_server[z] == letters[x_ship_index-1])	//  � ������� ���� ����������� ����������-����� 
						{
						  if (ship_fld_server[z+1] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))
						  {
							 ship_fld_server.push(ship_server_letter,ship_server_number); 
						  }
						}
					}
								
				}	
				else 							// ���� ����������-����� ��� � ������� ���� �������			
				{	
				for (let i = 0; i <=20; i++)						// �������� �� ����� ���� ��������� ��������� ��� 10 ��������
					{
						if (ship_fld_server[i] == letters[x_ship_index-1])	//  � ������� ���� ����������� ����������-����� 
						{
						  if (ship_fld_server[i+1] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))	// ��������� ���������(��������) �� ��������� � ��������� ������� 		
						  {
							 ship_fld_server.push(ship_server_letter,ship_server_number); 
						  }
						}
						
						else if (ship_fld_server[i] == letters[x_ship_index+1])	//  � ������� ���� ����������� ����������-����� 
						{
						  if (ship_fld_server[i+1] !=  (numbers[y_ship_index] || numbers[y_ship_index-1] ||	numbers[y_ship_index+1]))	// ��������� ���������(��������) �� ��������� � ��������� ������� 		
						  {
							 ship_fld_server.push(ship_server_letter,ship_server_number); 
						  }
						}
					}
				}
			}
		}
		console.log(ship_fld_server);	
		}
		server_ship_fld();*/