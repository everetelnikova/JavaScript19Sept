

describe("Объем и температура", function()
{
it("Все ОК", function()
{
	let lp1 = new LiquidPortion(1,30);
	let lp2 = new LiquidPortion(3,20);
	let current = new Methods();
	expect(current.mixLiquids(lp1,lp2).temperature).toBeCloseTo(22.5000 ,4);
	expect(current.mixLiquids(lp1,lp2).volume).toBeCloseTo(4);
	
});
	
it("Работает. Данные не верные, выбрасывает ошибку", function()
{
	let lp1 = new LiquidPortion(-2,10);
	let lp2 = new LiquidPortion(5,50);
	let current = new Methods();
expect(function(){current.mixLiquids(lp1,lp2)}).toThrow(new Error("Объем не должен быть отрицательным"));
});
});

describe("Вычисления равнодействующей двух сил под произвольным углом", function()
{
it("Все ОК", function()
{
let a = new Force(-50,-86.6025,100);
let b = new Force(60,0,100);
let cur = new Methods();
expect(cur.FindResult(a,b).x).toBeCloseTo(10,4);	
expect(cur.FindResult(a,b).y).toBeCloseTo(-86.6025,4);	
expect(cur.FindResult(a,b).value).toBeCloseTo(100,4);	
});
                             
it("Работает. Данные не верные, выбрасывает ошибку", function()
{
let a = new Force(5,7,11);
let b = new Force(7,3,-20);
let cur = new Methods();
expect(function(){cur.FindResult(a,b)}).toThrow(new Error("Сила не может быть отрицательной"));

});
});

