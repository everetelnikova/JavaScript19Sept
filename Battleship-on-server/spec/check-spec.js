let check = require('../check.js');
let numbers = [0,1,2,3,4,5,6,7,8,9];					//массив возмжных чисел
let letters = ["а","б","в","г","д","е","ж","з","и","к"];// массив возможных букв
describe("Проверка старта", function()
{
it("works1", function()
{
	expect(true).toBe(true);
	expect(check.jasmine()).toBe(true);
});

});	
		
describe("Проверка правильности координат выстрела пользователя", function()
{
it("Выстрел сформирован правильно", function()
{
	let arr_strike = ['а',0];
	expect(check.strike_user(letters,numbers,arr_strike)).toBe(undefined);
});	

it("Выстрел сформирован НЕправильно", function()
{
	let arr_strike = ['р',0];
	expect(check.strike_user(letters,numbers,arr_strike)).toBe("Некорректная координата р");
});	
});	

describe("Проверка попадания пользователя", function()
{
it("Выстрел попал в корабль", function()
{
	let array_server = [ 'а',8, 'в', 0, 'д', 0, 'ж', 0, 'и', 0, 'а', 2, 'в', 2, 'д', 2, 'ж', 2, 'и', 2];
	let ship_lttr = 'а';
	let ship_num = 8;
	expect(check.check_strike_user(array_server, ship_lttr, ship_num)).toBe('Попал!');
});	

it("Выстрел не попал - ПРОМАХ", function()
{
	let array_server = [ 'а', 0, 'в', 0, 'д', 0, 'ж', 0, 'и', 0, 'а', 8, 'в', 2, 'д', 2, 'ж', 2, 'и', 2];
	let ship_lttr = 'к';
	let ship_num = 8;
	expect(check.check_strike_user(array_server, ship_lttr, ship_num)).toBe('Промах!');
});	
// не работает, так как передается по одной паре координат в одну иттерацию функции
it("Все корабли сервера уничтожены", function()  
{
	let array_server = [ 'а', 8, 'а',8, 'а', 8, 'а', 8, 'а', 8, 'а', 8, 'а', 8, 'а', 8, 'а', 8, 'а', 8];
	let ship_lttr = 'а';
	let ship_num = 8;
	expect(check.check_strike_user(array_server, ship_lttr, ship_num)).toBe('Победа пользователя!');
});	
});	

describe("Проверка правильности координат выстрела сервера", function()
{
it("Выстрел сформирован правильно", function()
{
	let rnd = [0,0];
	let i = 0;
	function next(){
		return rnd[i++];
	}
	expect(check.generate_strike_server(letters,numbers, next)).toEqual([ 'а', 0]);
});	
});	
