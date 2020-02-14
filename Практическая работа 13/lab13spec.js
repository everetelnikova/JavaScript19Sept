

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


describe("Расстояние между точками", function()
{

it("Работает штатно", function()
{
	expect(Task5789(1,1,3,4)).toBeCloseTo(3.6056,4);
});

it("Всё еще работаююююю", function()
{

	expect(distanceBetweenObjects({x:1,y:1},{x:3,y:4})).toBeCloseTo(3.6056,4);
});


it("Всё еще работаююююю2", function()
{
	let a = {
		x:1,
		y:1,
		distanceTo: function(x1,y1){
			let p = x1 - this.x;
			let q = y1 - this.y;
			let result = Math.sqrt( Math.pow(p,2) + Math.pow(q,2))
			return result;
		}
	}
	expect(a.distanceTo(3,4)).toBeCloseTo(3.6056,4);
});



it("Тяжко, но я не сдаюсь", function()
{
	let b ={x:3,y:4}
	let a = {
		x:1,
		y:1,
		distanceTo: function(u){
			let p = u.x - this.x;
			let q = u.y - this.y;
			let result = Math.sqrt( Math.pow(p,2) + Math.pow(q,2))
			return result;
		}
	}
	expect(a.distanceTo(b)).toBeCloseTo(3.6056,4);
});

it("Всё еще работаююююю, но теперь с классами", function()
{
	let a = new Point();
	a.x = 1;
	a.y = 1;
	let b = new Point();
	b.x = 3;
	b.y = 4;
	expect(distanceBetweenObjects(a,b)).toBeCloseTo(3.6056,4);
});

it("Всё еще работаююююю, но теперь с классами  и функция", function()
{

	let b = new Point();
	b.x = 3;
	b.y = 4;
	let a = new Point();
	a.x = 1;
	a.y = 1;
	let rslt = a.distanceTo(b);
	expect(a.distanceTo(b)).toBeCloseTo(3.6056,4);
	expect(b.distanceTo(a)).toBeCloseTo(3.6056,4);
});

it("Всё еще работаююююю, но теперь с классами  и функция КОНСТРУКТОРОМ", function()
{

	let b = new Point(3,4);
	let a = new Point(1,1);
	let rslt = a.distanceTo(b);
	expect(a.distanceTo(b)).toBeCloseTo(3.6056,4);
	expect(b.distanceTo(a)).toBeCloseTo(3.6056,4);
});
it("Всё еще работаююююю, но теперь с классами  и функция КОНСТРУКТОРОМ с 0", function()
{

	let b = new Point(0,0);
	let a = new Point(0,0);
	let rslt = a.distanceTo(b);
	expect(a.distanceTo(b)).toBeCloseTo(0,4);
	expect(b.distanceTo(a)).toBeCloseTo(0,4);
});

});

describe("Обратная геодезическая задача", function()
{
it("Все ОК", function()
{
	let b = new Point(10,10);
	let a = new Point(13,14);
	current = backwardTask(b,a);
	expect(current.angle).toBeCloseTo(53.1301,4);
	expect(current.distance).toBeCloseTo(5);
	expect(current.quater).toBeCloseTo(1);
});
it("Все ОК1", function()
{
	let b = new Point(24,4);
	let a = new Point(3,17);
	current = backwardTask(b,a);
	expect(current.angle).toBeCloseTo(148.2405,4);
	expect(current.distance).toBeCloseTo( 24.6982);
	expect(current.quater).toBeCloseTo(2);
});
it("Все ОК2", function()
{
	let b = new Point(23,25);
	let a = new Point(12,16);
	current = backwardTask(b,a);
	expect(current.angle).toBeCloseTo(219.2894,4);
	expect(current.distance).toBeCloseTo( 14.2127,4);
	expect(current.quater).toBeCloseTo(3);
});
it("Все ОК3", function()
{
	let b = new Point(3,11);
	let a = new Point(13,5);
	current = backwardTask(b,a);
	expect(current.angle).toBeCloseTo(329.0362,4);
	expect(current.distance).toBeCloseTo(11.6619,4);
	expect(current.quater).toBeCloseTo(4);
});
it("Все ОК4", function()
{
	let b = new Point(5,5);
	let a = new Point(5,10);
	current = backwardTask(b,a);
	expect(current.angle).toBeCloseTo(90,4);
	expect(current.distance).toBeCloseTo(5,4);
	expect(current.quater).toBeCloseTo(1);
});
it("Все ОК5", function()
{
	let b = new Point(10,5);
	let a = new Point(5,5);
	current = backwardTask(b,a);
	expect(current.angle).toBeCloseTo(180,4);
	expect(current.distance).toBeCloseTo(5,4);
	expect(current.quater).toBeCloseTo(2);
});
it("Все ОК6", function()
{
	let b = new Point(5,10);
	let a = new Point(5,5);
	current = backwardTask(b,a);
	expect(current.angle).toBeCloseTo(270,4);
	expect(current.distance).toBeCloseTo(5,4);
	expect(current.quater).toBeCloseTo(3);
});
it("Все ОК7", function()
{
	let b = new Point(5,5);
	let a = new Point(10,5);
	current = backwardTask(b,a);
	expect(current.angle).toBeCloseTo(360,4);
	expect(current.distance).toBeCloseTo(5,4);
	expect(current.quater).toBeCloseTo(4);
});
	
});	

