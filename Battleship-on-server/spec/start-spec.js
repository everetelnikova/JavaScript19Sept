let start = require('../start.js');
let numbers = [0,1,2,3,4,5,6,7,8,9];					//массив возмжных чисел
let letters = ["а","б","в","г","д","е","ж","з","и","к"];// массив возможных букв	
describe("Проверка старта", function()
{
it("works1", function()
{
	expect(true).toBe(true);
	expect(start.jasmine()).toBe(true);
});	

it("Все кооординаты правильные", function()
{
let data = ['а',0];
	start.validate(data,letters,numbers);
});	

it("Буква должна быть не правильная", function()
{
let data = ['я',0];
	expect(function(){start.validate(data,letters,numbers)}).toThrow(new Error("Некорректная координата я"));
	
});

it("Цифра должна быть не правильная", function()
{
let data = ['в',12];
	expect(function(){start.validate(data,letters,numbers)}).toThrow(new Error("Некорректная координата 12"));
});

it("НЕправильный формат", function()
{
let data = [5];
	expect(function(){start.validate(data,letters,numbers)}).toThrow(new Error("неправильный формат"));
});

});

describe("Проверка  массива сервера", function()
{
it("Формирование массива сервера", function()
{
	let rnd = [0,0,2,0,4,0,6,0,8,0,0,2,2,2,4,2,6,2,8,2,0,4,2,4];
	let i = 0;
	function next(){
		return rnd[i++];
	}
	expect(start.generateFld(numbers,letters, next)).toEqual([ 'а', 0, 'false',
	'в', 0,'false',
	'д', 0,'false',
	'ж', 0,'false',
	'и', 0,'false',
	'а', 2,'false',
	'в', 2,'false',
	'д', 2,'false',
	'ж', 2,'false',
	'и', 2,'false',
	'а', 4,'false']);
});


it("Формирование массива сервера c ошибкой в массиве", function()
{
	let rnd = [0,0,1,0,4,0,6,0,8,0,0,2,2,2,4,2,6,2,8,2,0,4,2,4,2,6];
	let i = 0;
	function next(){
		return rnd[i++];
	}
	expect(start.generateFld(numbers,letters, next)).toEqual([ 'а', 0, 'false',
	'д', 0, 'false',
	'ж', 0,  'false',
	'и', 0, 'false',
	'а', 2, 'false',
	'в', 2, 'false',
	'д', 2, 'false',
	'ж', 2, 'false',
	'и', 2, 'false',
	'а', 4,  'false',
	'в', 4, 'false']);
});

it("Проверка массива сервера с ошибкой: координата буква одинакова, координат цифра рядом", function()
{
	let array = ['в',8,'в',9,'в',5,'к',1,'и',9,'з',5,'б',1,'д',4,'е',2,'а',7];
	let letter_idx = 2;
	let number_idx = 8;
	expect(start.check_adjacent(array, letter_idx, number_idx)).toBe(true);
});

it("Проверка массива сервера с ошибкой: координата буква рядом, координат цифра одинаковая", function()
{
	let array = ['в',8,'б',8,'в',5,'к',1,'и',9,'з',5,'б',1,'д',4,'е',2,'а',7];
	let letter_idx = 2;
	let number_idx = 8;
	expect(start.check_adjacent(array, letter_idx, number_idx)).toBe(true);
});
it("Проверка массива сервера с ошибкой: координата буква одинаковая, координат цифра одинаковая", function()
{
	let array = ['в',8,'в',8,'в',5,'к',1,'и',9,'з',5,'б',1,'д',4,'е',2,'а',7];
	let letter_idx = 2;
	let number_idx = 8;
	expect(start.check_adjacent(array, letter_idx, number_idx)).toBe(true);
});
});
describe("Проверка  массива сервера", function()
{
it("Массив правильный", function()
{
	let array = ['в',8,'в',3,'в',5,'к',1,'и',9,'з',5,'б',1,'д',4,'е',2,'а',7];
	let x_string = "в,8,в,3,в,5,к,1,и,9,з,5,б,1,д,4,е,2,а,7";
	let arr_x = x_string.split(',');
	let letter_idx = 2;
	let number_idx = 8;
	expect(start.check_adjacent(arr_x, letter_idx, number_idx)).toBe(true);
});	
});
describe("уже неОдинокий рейнджер", function()
{
it("Массив правильный", function()
{
	let array = ['г',5];
	let letter_idx = 1;
	let number_idx = 3;
	expect(start.check_adjacent(array, letter_idx, number_idx)).toBe(false);
});	
it("Массив за областью координат", function()
{
	let array = ['г',5];
	let letter_idx = 0;
	let number_idx = 0;
	expect(start.check_adjacent(array, letter_idx, number_idx)).toBe(false);
});	
it("Массив за областью координат вернет ошибку", function()
{
	let array = ['г',5];
	expect(start.check_adjacent(array, 1, 3)).toBe(false);
	expect(start.check_adjacent(array, 1, 5)).toBe(false);
	expect(start.check_adjacent(array, 1, 7)).toBe(false);
	expect(start.check_adjacent(array, 3, 3)).toBe(false);
	expect(start.check_adjacent(array, 3, 7)).toBe(false);
	expect(start.check_adjacent(array, 5, 3)).toBe(false);
	expect(start.check_adjacent(array, 5, 5)).toBe(false);
	expect(start.check_adjacent(array, 5, 7)).toBe(false);
	
	expect(start.check_adjacent(array, 2, 4)).toBe(true);
	expect(start.check_adjacent(array, 2, 5)).toBe(true);
	expect(start.check_adjacent(array, 2, 6)).toBe(true);
	expect(start.check_adjacent(array, 3, 4)).toBe(true);
	expect(start.check_adjacent(array, 3, 6)).toBe(true);
	expect(start.check_adjacent(array, 4, 4)).toBe(true);
	expect(start.check_adjacent(array, 4, 5)).toBe(true);
	expect(start.check_adjacent(array, 4, 6)).toBe(true);
});	


});
