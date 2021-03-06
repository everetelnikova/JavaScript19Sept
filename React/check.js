module.exports = {
	strike_user: function strike_user(letters, numbers, arr_strike) {
		// проверка правильности координат-выстрела от пользователя	
		var result = void 0;
		if (arr_strike.length % 2 == 0) {
			var arr_strike_numbers = arr_strike.filter(function (item, index) {
				return index % 2 != 0;
			}); // массив с числами
			var arr_strike_letters = arr_strike.filter(function (item, index) {
				return index % 2 == 0;
			});
			// массив чисел  от пользователя, которое не входит в координаты 0..9
			// если все координат ы входят в условие от 0..9, вернуть пустой массив
			var mistake_n = arr_strike_numbers.filter(function (item, index) {
				if (item < 0 || item > 9) {
					return true;
				} else {
					return false;
				}
			});
			if (mistake_n.length > 0) {
				result = "Некорректная координата " + mistake_n;
				return result;
			}

			var mistake_l = arr_strike_letters.filter(function (item) {
				var r = letters.filter(function (n) {
					if (n == item) {
						return true;
					} else {
						return false;
					}
				});
				if (r.length == 0) {
					return true;
				} else {
					return false;
				}
			});
			if (mistake_l.length > 0) {
				result = "Некорректная координата " + mistake_l;
				return result;
			}
		} else {
			result = "Не правильный формат";
		}
		return result;
	},
	// проверка подапания в корабль сервера
	// в функцию передаем массив поля сервера, коодинату буквы-выстрела, координату цифры-выстрела
	check_strike_user: function check_strike_user(array_server, ship_lttr, ship_num) {
		var hit = void 0; // переменная-флаг 
		var index = array_server.indexOf(ship_lttr); //ищем индекс буквы-выстрела в массиве сервера(если она есть)	
		// перезаписываем массив сервера с метками об отсутствии попадания после каждой пары координат 


		for (var i = index; i < array_server.length; i += 3) //проверяем попали ли в корабли сервера
		{
			if (array_server[i] == ship_lttr) {
				if (array_server[i + 1] == ship_num) // попадание в координату цифру
					{
						array_server[i + 2] = "true"; // при попадании переписываем 3 координату в true
						hit = 'Попал!';
						return hit;
					}
			}
		}
		hit = 'Промах!';
		return hit;
	},

	check_victory: function check_victory(any_array) {
		var hit = void 0;
		var summ_hits = 0; // количество удачных выстрелов
		for (var y = 2; y < any_array.length; y += 3) // цикл проверки по всем ли кораблям попали  не рабо
		{
			if (any_array[y] == 'true') {
				summ_hits++;
			}
		}
		if (summ_hits == 10) {
			hit = 'Победа!';
		} else {
			hit = 'Игра продолжается';
		}
		return hit;
	},

	// формируется массив координат выстрела от сервера
	generate_strike_server: function generate_strike_server(letters, numbers, next) {
		var strike_from_server = []; // пустой массив поля кораблей
		var letter_ship_index = next(); // рандомный номер индекса букв
		var numbers_ship_index = next(); // рандомный номер индекса цифр

		var ship_server_letter = letters[letter_ship_index]; // получаем буквенную координату корабля
		var ship_server_number = numbers[numbers_ship_index]; // получаем цифровую координату корабля
		strike_from_server.push(ship_server_letter, ship_server_number);

		return strike_from_server; // вернуть переменные с координатами ship_lttr_s, ship_num_s
	},
	// проверка попал ли сервер в корабль пользователя

	check_strike_server: function check_strike_server(array_user, ship_lttr_s, ship_num_s) {
		var hit = void 0; // переменная-флаг 
		var index = array_user.indexOf(ship_lttr_s); //ищем индекс буквы-выстрела в массиве юзера(если она есть)	

		for (var i = index; i < array_user.length; i += 3) //проверяем попали ли в корабли сервера
		{
			if (array_user[i] == ship_lttr_s) {
				if (array_user[i + 1] == ship_num_s) // попадание в координату цифру
					{
						array_user[i + 2] = "true"; // при попадании переписываем 3 координату в true
						hit = 'Попал!';
						return hit;
					}
			}
		}
		hit = 'Промах!';
		return hit;
	},
	// Формирует нового пользователя в объекте users и возвращает значение массива кораблей тоже возвращаетмассивесли пользователь уже есть
	cookie_user: function cookie_user(users, key_from_user, res) {
		if (users[key_from_user] === undefined) // выполняется при новом пользователе					
			{
				var passnum = Math.floor(Math.random() * 1000000);
				var cookie = 'id=' + passnum;
				res.setHeader('Set-Cookie', cookie);
				users[cookie] = {};
				console.log('New user ' + cookie);
				key_from_user = cookie;
			}
		return users[key_from_user];
	},
	jasmine: function jasmine() {
		return true;
	}
};