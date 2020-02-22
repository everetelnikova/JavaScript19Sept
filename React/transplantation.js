var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_React$Component) {
	_inherits(Hello, _React$Component);

	function Hello() {
		_classCallCheck(this, Hello);

		return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
	}

	_createClass(Hello, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				"Hello ",
				this.props.name
			);
		}
	}]);

	return Hello;
}(React.Component);

ReactDOM.render(React.createElement(Hello, { name: "World" }), document.getElementById('result'));

function work() {
	var inData1 = document.getElementById("data1");
	var str1 = inData1.value;
	var K = Object.keys(current);
	var K2 = K.filter(function (val) {
		return val != str1;
	});
	var sel2 = document.getElementById("data2");
	sel = "<option>" + K2[0] + "</option>" + "<option>" + K2[1] + "</option>";
	sel2.innerHTML = sel;
}

var current = { 8: 8, // объект с текущими значениями кол-ва жидкости(value) в каждой емскости(ключ)
	5: 0,
	3: 0 };
var result = "<table  border=2px>" + "<tr>" + "<td>" + "8-ми литр" + "</td>" + "<td>" + "5-и литр" + "</td>" + "<td>" + "3-х литр" + "</td>" + "</tr>";

function trans() {
	var inData1 = document.getElementById("data1");
	var str1 = inData1.value;
	var From = Number(str1); // емкость, из которой выливаем
	var inData2 = document.getElementById("data2");
	var str2 = inData2.value;
	var To = Number(str2); // емкость, в которую льем
	var divOut = document.getElementById("out");

	var value = current[To]; // получаем текущее значение, из емкости куда льем          
	var FreeSpace = To - value; // получаем значение, сколько свободного места в емкости в которую льем

	if (FreeSpace >= 0) // заходим в цикл только если есть свободное место куда лить
		{
			if (FreeSpace < current[From]) // если свободного места меньше, чем кол-во жидкости в емкости из которой переливаем
				{
					current[From] = current[From] - FreeSpace; // получаем остаток в емскости из которой переливали
					current[To] = To; // текущее значение в емкости, куда заливали стало максимальным			
				}
		}
	// снова находим текущии значения, чтобы не пошел в цикл 
	value = current[To]; // получаем текущее значение, из емкости куда льем          
	FreeSpace = To - value; // получаем значение, сколько свободного места в емкости в которую льем

	if (FreeSpace >= 0) // заходим в цикл только если есть свободное место куда лить
		{
			if (FreeSpace >= current[From]) // если свободного места больше, чем в емкости из которой льем
				{
					current[To] = current[From] + current[To];
					current[From] = 0;
				}
		}
	result = result + "<tr>" + "<td>" + current[8] + "</td>" + "<td>" + current[5] + "</td>" + "<td>" + current[3] + "</td>" + "</tr>";
	if (current[8] == 4 || current[5] == 4 || current[3] == 4) {
		result = result + "Успех! Наконец-то!";
	}
	divOut.innerHTML = result;

	var K = Object.keys(current);
	var K3 = K.filter(function (key) {
		return current[key] > 0;
	});
	var sel1 = document.getElementById("data1");
	if (K3.length == 1) {
		result1 = "<option>" + K3[0] + "</option>";
	}
	if (K3.length == 2) {
		result1 = "<option>" + K3[0] + "</option>" + "<option>" + K3[1] + "</option>";
	}
	if (K3.length == 3) {
		result1 = "<option>" + K3[0] + "</option>" + "<option>" + K3[1] + "</option>" + "<option>" + K3[2] + "</option>";
	}

	sel1.innerHTML = result1;
}