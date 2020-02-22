var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
		_inherits(List, _React$Component);

		function List() {
				_classCallCheck(this, List);

				return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
		}

		_createClass(List, [{
				key: "render",
				value: function render() {
						return React.createElement(
								"select",
								null,
								React.createElement(
										"option",
										null,
										" ",
										this.props.a,
										" "
								),
								React.createElement(
										"option",
										null,
										" ",
										this.props.b,
										" "
								),
								React.createElement(
										"option",
										null,
										" ",
										this.props.c
								)
						);
				}
		}]);

		return List;
}(React.Component);

var e = "4";
ReactDOM.render(React.createElement(List, { a: e, b: "8", c: "7" }), document.getElementById('out'));

var ListArr = function (_React$Component2) {
		_inherits(ListArr, _React$Component2);

		function ListArr() {
				_classCallCheck(this, ListArr);

				return _possibleConstructorReturn(this, (ListArr.__proto__ || Object.getPrototypeOf(ListArr)).apply(this, arguments));
		}

		_createClass(ListArr, [{
				key: "render",
				value: function render() {
						return React.createElement(
								"select",
								null,
								React.createElement(
										"option",
										null,
										" ",
										this.props.arr[0],
										" "
								),
								React.createElement(
										"option",
										null,
										" ",
										this.props.arr[1],
										" "
								),
								React.createElement(
										"option",
										null,
										" ",
										this.props.arr[2]
								)
						);
				}
		}]);

		return ListArr;
}(React.Component);

var arr = [1, 2, 3];
ReactDOM.render(React.createElement(ListArr, { arr: arr }), document.getElementById('out2'));

var ListForEach = function (_React$Component3) {
		_inherits(ListForEach, _React$Component3);

		function ListForEach() {
				_classCallCheck(this, ListForEach);

				return _possibleConstructorReturn(this, (ListForEach.__proto__ || Object.getPrototypeOf(ListForEach)).apply(this, arguments));
		}

		_createClass(ListForEach, [{
				key: "render",
				value: function render() {
						var OptionArr = [];
						for (var i = 0; i < this.props.arr.length; i++) {
								OptionArr.push(React.createElement(
										"option",
										null,
										" ",
										this.props.arr[i],
										" "
								));
						}
						return React.createElement(
								"select",
								null,
								OptionArr
						);
				}
		}]);

		return ListForEach;
}(React.Component);

ReactDOM.render(React.createElement(ListForEach, { arr: [0, 2, 4, 5, 9, 8, 7, 3] }), document.getElementById('out3'));

function activateLasers() {
		console.log('Кнопочка');
}

var z = React.createElement(
		"button",
		{ onClick: activateLasers },
		"\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043B\u0430\u0437\u0435\u0440\u044B"
);
ReactDOM.render(z, document.getElementById('out4'));
//Getdata - обработчик события
function Getdata(event) {
		console.log(event.target.value);
}
var data = React.createElement("input", { onChange: Getdata });
ReactDOM.render(data, document.getElementById('out5'));