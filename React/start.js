module.exports = {
	// Функция проверяет правильность введенных пользователем координат,
	// Если все  координаты правильные вернет undefined
	// Если есть ошибка вернет строку с указанием ошибки
	validate: function validate(data, letters, numbers) {
		var result = void 0;
		if (data.length % 2 == 0) {
			var data_numbers = data.filter(function (item, index) {
				return index % 2 != 0;
			}); // массив с числами
			var data_letters = data.filter(function (item, index) {
				return index % 2 == 0;
			});
			// массив чисел  от пользователя, которое не входит в координаты 0..9
			// если все координат ы входят в условие от 0..9, вернуть пустой массив
			var mistake_n = data_numbers.filter(function (item, index) {
				if (item < 0 || item > 9) {
					return true;
				} else {
					return false;
				}
			});
			if (mistake_n.length > 0) {
				var err = new Error("Некорректная координата " + mistake_n); // создание исключения
				throw err;
			}

			var mistake_l = data_letters.filter(function (item) {
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
				{
					var _err = new Error("Некорректная координата " + mistake_l); // создание исключения
					throw _err;
				}
			}
		} else {
			var _err2 = new Error("неправильный формат"); // создание исключения
			throw _err2;
		}
	},
	generateFld: function generateFld(numbers, letters, next) // генерация поля массива сервера
	{
		var ship_fld_server = []; // пустой массив поля кораблей
		var letter_ship_index = next(); // рандомный номер индекса букв
		var numbers_ship_index = next(); // рандомный номер индекса цифр
		var check_data_s = [];

		while (ship_fld_server.length <= 18) {
			var ship_server_letter = letters[letter_ship_index]; // получаем буквенную координату корабля

			var ship_server_number = numbers[numbers_ship_index]; // получаем цифровую координату корабля
			if (this.check_adjacent(ship_fld_server, letter_ship_index, numbers_ship_index) == false) {
				ship_fld_server.push(ship_server_letter, ship_server_number);
				letter_ship_index = next();
				numbers_ship_index = next();
			} else {
				letter_ship_index = next();
				numbers_ship_index = next();
			}
		}
		for (var i = 0, j = 0; j < ship_fld_server.length; i += 3, j += 2) {
			check_data_s[i] = ship_fld_server[j];
			check_data_s[i + 1] = ship_fld_server[j + 1];
			check_data_s[i + 2] = "false";
		}
		return check_data_s;
	},

	//возвращает true, если найден корабль рядом с указанной координатой буквой или на той же координате
	//иначе - false
	// array  - массив координат поля сервера
	check_adjacent: function check_adjacent(array, letter_idx, number_idx) {
		var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //массив возмжных чисел
		//let letters = ["a","b","c","d","e","f","g","h","j","k"];// массив возможных букв в,8,в,9,в,5,к,1,и,9,з,5,б,1,д,4,е,2,а,7
		var letters = ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "к"];
		var mistake_in_arr = void 0;
		var previous_letter = letters[letter_idx - 1];
		var next_letter = letters[letter_idx + 1];
		var current_letter = letters[letter_idx];

		for (var i = 0, j = 1; i <= 20; i += 2, j += 2) // цикл для всех элементов масссива
		{
			if (array[i] == previous_letter || array[i] == current_letter || array[i] == next_letter) // есть  буква, следующая за буквой-координатой
				{
					if (array[j] == number_idx + 1 || array[j] == number_idx || array[j] == number_idx - 1) // проверить что буква, следующая за буквой-координатой, НЕ имеет координаты-цифры рядом 
						{
							mistake_in_arr = 1;
							return true;
						} //  как только найдена ошибка функция прерывается
				} else {
				mistake_in_arr = 0;
			} // нет близлежащих букв => записываем обе коодинаты в массив
		}
		if (mistake_in_arr == 1) // проверка флага есть ли ошибка, при отстутствии таковой, функция возвращает false
			{
				return true;
			} else {
			return false;
		}
	},
	jasmine: function jasmine() {
		return true;
	}
};