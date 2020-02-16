

describe("Проверка пеерсечения интервалов", function()
{

it("Работает.Данные верные", function()
{
	expect(hasIntersectionInts(2,3,5,7)).toBe("не пересекаются");
});
it("Работает.Данные верные", function()
{
	expect(hasIntersectionInts(11,17,13,19)).toBe("пересекаются");
});
it("Работает.Данные верные", function()
{
	expect(hasIntersectionInts(23,37,29,31)).toBe("пересекаются");
});
it("Работает.Данные верные", function()
{
	expect(hasIntersectionInts(43,53,41,47)).toBe("пересекаются");
});
it("Работает.Данные верные", function()
{
	expect(hasIntersectionInts(67,71,59,61)).toBe("не пересекаются");
});
it("Работает. Данные не верные, выбрасывает ошибку", function()
{
	expect(function(){hasIntersectionInts(97,101,107,103)}).toThrow(new Error("Некорректный интервал. Левая граница должна быть меньше правой."));
});

});


describe("Проверка пеерсечения интервалов, аргументы объекты", function()
{
it("Работает.Данные верные", function()
{
	expect(hasIntersectionObjects({r:2,g:5},{r:3,g:7})).toBe("не пересекаются");
});	
	
	
it("Работает. Данные не верные, выбрасывает ошибку", function()
{
	expect(function(){hasIntersectionObjects({r:97,g:107},{r:101,g:103})}).toThrow(new Error("Некорректный интервал. Левая граница должна быть меньше правой."));
});
});




describe("Проверка пеерсечения интервалов, аргумент объект, функция поле объекта", function()
{
it("Работает.Данные верные", function()
{
	let A = {
		r:2,
		g:5,
		hasIntersectionObjects: function(Br,Bg){
		let result;
		if (Bg>=A.r && A.g<=Br){
		result = "пересекаются";
		}
		else{
		result = "не пересекаются";
		}
	
		if ( (A.r > Br) || (A.g > Bg)){
		let err = new Error("Некорректный интервал. Левая граница должна быть меньше правой.") // создание исключения
		throw err;
		}
		return result;	
		}
	}
	expect(A.hasIntersectionObjects(3,7)).toBe("не пересекаются");	
});
});
	
it("Работает. Данные не верные, выбрасывает ошибку", function()
{
let A = {
		r:101,
		g:103,
		hasIntersectionObjects: function(Br,Bg){
		let result;
		if (Bg>=A.r && A.g<=Br){
		result = "пересекаются";
		}
		else{
		result = "не пересекаются";
		}
	
		if ( (A.r > Br) || (A.g > Bg)){
		let err = new Error("Некорректный интервал. Левая граница должна быть меньше правой.") // создание исключения
		throw err;
		}
		return result;	
		}
	}

expect(function(){A.hasIntersectionObjects(97,107)}).toThrow(new Error("Некорректный интервал. Левая граница должна быть меньше правой."));
});


describe("Проверка пеерсечения интервалов, аргументы объекты, функция поле объекта", function()
{
it("Работает.Данные верные", function()
{
	let B = {r:3, g:7}
	let A = {
		r:2,
		g:5,
		hasIntersectionObjects: function(B){
		let result;
		if (B.g>=A.r && A.g<=B.r){
		result = "пересекаются";
		}
		else{
		result = "не пересекаются";
		}
	
		if ( (A.r > B.r) || (A.g > B.g)){
		let err = new Error("Некорректный интервал. Левая граница должна быть меньше правой.") // создание исключения
		throw err;
		}
		return result;	
		}
	}
	expect(A.hasIntersectionObjects(B)).toBe("не пересекаются");
});
it("Работает. Данные не верные, выбрасывает ошибку", function()
{
	let B = {r:101, g:103}
	let A = {
		r:97,
		g:107,
		hasIntersectionObjects: function(B){
		let result;
		if (B.g>=A.r && A.g<=B.r){
		result = "пересекаются";
		}
		else{
		result = "не пересекаются";
		}
	
		if ( (A.r > B.r) || (A.g > B.g)){
		let err = new Error("Некорректный интервал. Левая граница должна быть меньше правой.") // создание исключения
		throw err;
		}
		return result;	
		}
	}
	expect(function(){A.hasIntersectionObjects(B)}).toThrow(new Error("Некорректный интервал. Левая граница должна быть меньше правой."));
});

});

describe("Проверка пеерсечения интервалов, используется класс", function()
{
it("Работает.Данные верные", function()
{
	
	let A = new Range();
	A.r = 2;
	A.g = 5;
	let B = new Range();
	B.r = 3;
	B.g = 7;
	let rslt = A.hasIntersection(B);
	expect(A.hasIntersection(B)).toBe("не пересекаются");
});

it("Работает. Данные не верные, выбрасывает ошибку", function()
{
	
	let A = new Range();
	A.r = 97;
	A.g = 107;
	let B = new Range();
	B.r = 101;
	B.g = 103;
	//let rslt = A.hasIntersection(B);
	expect(function(){A.hasIntersection(B)}).toThrow(new Error("Некорректный интервал. Левая граница должна быть меньше правой."));
});
});