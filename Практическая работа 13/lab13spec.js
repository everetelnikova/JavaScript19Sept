

describe("Проверка старта", function()
{

it("Без ошибки", function()
{
	expect(Task9020(61)).toBe(0);

});

it("С ошибкой ввода", function()
{
	expect(function(){Task9020(62)}).toThrow(new Error('Подкоренное выражение должно быть неотрицательным'));

});


});	

describe("Проверка выражения", function()
{

it("Без ошибки", function()
{
	expect(Task3943(-5,81)).toBe(-10);

});

it("Без ошибки2", function()
{
	expect(Task3943(7507,7499)).toBeCloseTo(-435.7062,4);

});


it("С ошибкой ввода", function()
{
	expect(function(){Task3943(-7481,7477)}).toThrow(new Error('Подкоренное выражение должно быть неотрицательным'));

});


});	


describe("Домашняя работа", function()
{

it("Ошибка", function()
{
	expect(function(){Task5170(-10)}).toThrow(new Error("Простое число должно быть больше 1"));

});

});