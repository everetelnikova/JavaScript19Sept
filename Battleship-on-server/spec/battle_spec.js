
let numbers = [0,1,2,3,4,5,6,7,8,9];					//массив возмжных чисел
let letters = ["а","б","в","г","д","е","ж","з","и","к"];// массив возможных букв
describe("Проверка старта", function()
{
it("works1", function()
{
	expect(true).toBe(true);
	
});

});	
		
describe("Проверка правильности координат выстрела пользователя", function()
{
it("Поле промах", function()
{
	let check = new Battleship(null);
	let shoot = ["в","2","промах"];
	let field = [["","",""],["","",""],["","",""]];
	let expect_Fld = [["","",""],["","",""],["","","+"]];
	check.drawning_flds(shoot, field)
	expect(field).toEqual(expect_Fld);
});	

it("Поле попал", function()
{
	let check = new Battleship(null);
	let shoot = ["в","2","попал"];
	let field = [["","",""],["","",""],["","",""]];
	let expect_Fld = [["","",""],["","",""],["","","X"]];
	check.drawning_flds(shoot, field)
	expect(field).toEqual(expect_Fld);
});
});	