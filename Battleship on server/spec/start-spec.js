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
	expect(start.validate(data,letters,numbers)).toBe(undefined);
});	

it("Буква должна быть не правильная", function()
{
let data = ['я',0];
let actual = start.validate(data,letters,numbers);
	expect(actual).toBe("Некорректная координата я");
});

it("Цифра должна быть не правильная", function()
{
let data = ['в',12];
	expect(start.validate(data,letters,numbers)).toBe('Некорректная координата 12');
});

it("works4", function()
{
let data = [5];
	expect(start.validate(data,letters,numbers)).toBe("Не правильный формат");
});
	
});