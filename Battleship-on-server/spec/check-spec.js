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
	let array_server = [ 'а',8, 'false',
	'в', 0, 'false',
	'д', 0,  'false',
	'ж', 0, 'false',
	'и', 0, 'false',
	'а', 2, 'false',
	'в', 2,  'false',
	'д', 2, 'false',
	'ж', 2, 'false', 
	'и', 2, 'false'];
	let ship_lttr = 'а';
	let ship_num = 8;
	expect(check.check_strike_user(array_server, ship_lttr, ship_num)).toBe('Попал!');
});	

it("Выстрел не попал - ПРОМАХ", function()
{
	let array_server = [ 'а', 0, 'false',
	'в', 0, 'false',
	'д', 0, 'false',
	'ж', 0, 'false',
	'и', 0,  'false',
	'а', 8, 'false',
	'в', 2, 'false',
	'д', 2,  'false',
	'ж', 2, 'false',
	'и', 2, 'false'];
	let ship_lttr = 'к';
	let ship_num = 8;
	expect(check.check_strike_user(array_server, ship_lttr, ship_num)).toBe('Промах!');
});	

it("Все корабли сервера уничтожены", function()  
{
	let array_server = [ 'а', 0,'true',
	'а',2,'true',
	'а', 4,'true',
	'а', 6,'true',
	'а', 8,'true',
	'б', 0,'true',
	'б', 2,'true',
	'б', 4,'true',
	'б', 6,'true',
	'б', 8,'true'];
	expect(check.check_victory(array_server)).toBe('Победа!');
});	

it(" НЕ Все корабли сервера уничтожены", function()  
{
	let array_server = [ 'а', 0,'true',
	'а',2,'true',
	'а', 4,'true',
	'а', 6,'true',
	'а', 8,'true',
	'б', 0,'true',
	'б', 2,'false',
	'б', 4,'true',
	'б', 6,'true',
	'б', 8,'true'];
	expect(check.check_victory(array_server)).toBe('Игра продолжается');
});	

//////////////////////////////////////////////
it("Выстрел попал в корабль Г8", function()
{
	let array_server = [
    'к',     8,       'true',  'е',
    4,       'true',  'г',     5,
    'true',  'з',     0,       'true',
    'г',     8,       'false', 'б',
    1,       'false', 'г',     3,
    'false', 'з',     2,       'false',
    'а',     9,       'false', 'ж',
    8,       'false', 'б',     7,
    'false'
  ];
	let ship_lttr = 'г';
	let ship_num = 8;
	expect(check.check_strike_user(array_server, ship_lttr, ship_num)).toBe('Попал!');
});	

//////////////////////////////////////////////
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
describe("Проверка попадания сервера", function()
{
it("Выстрел попал в корабль", function()
{
	let array_user = [ 'а',8, 'false',
	'в', 0, 'false',
	'д', 0,  'false',
	'ж', 0, 'false',
	'и', 0, 'false',
	'а', 2, 'false',
	'в', 2,  'false',
	'д', 2, 'false',
	'ж', 2, 'false', 
	'и', 2, 'false'];
	let ship_lttr_s = 'ж';
	let ship_num_s = 2;
	expect(check.check_strike_server(array_user, ship_lttr_s, ship_num_s)).toBe('Попал!');
});	

it("Выстрел не попал - ПРОМАХ", function()
{
	let array_user = [ 'а', 0, 'false',
	'в', 0, 'false',
	'д', 0, 'false',
	'ж', 0, 'false',
	'и', 0,  'false',
	'а', 8, 'false',
	'в', 2, 'false',
	'д', 2,  'false',
	'ж', 2, 'false',
	'и', 2, 'false'];
	let ship_lttr_s = 'к';
	let ship_num_s = 8;
	expect(check.check_strike_server(array_user, ship_lttr_s, ship_num_s)).toBe('Промах!');
});	
});	

describe("Старые и новые друзья", function()

{
it("Такой пользователь есть", function()
{	let users = {33: ['а', 0]};
	let key_from_user = 33;
	let x = {setHeader: function(y,z){}}
	expect(check.cookie_user(users,key_from_user,x)).toEqual(['а', 0]);
});	

it("Такого пользователя нет", function()
{	let users = {5: ['а', 0]};
	let key_from_user = 33;
	let x = {setHeader: function(y,z){}}
	expect(check.cookie_user(users,key_from_user,x)).not.toBe(undefined);
});	
});	
