var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task4411 = function (_React$Component) {
	_inherits(Task4411, _React$Component);

	function Task4411(props) {
		_classCallCheck(this, Task4411);

		var _this = _possibleConstructorReturn(this, (Task4411.__proto__ || Object.getPrototypeOf(Task4411)).call(this, props));

		_this.state = { value: '' };
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(Task4411, [{
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState({ value: event.target.value });
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			console.log(this.state.value);
		}
	}, {
		key: 'render',
		value: function render() {
			var z = React.createElement(
				'button',
				{ onClick: this.handleClick },
				'\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043B\u0430\u0437\u0435\u0440\u044B'
			);
			//Getdata - обработчик события

			var data = React.createElement('input', { onChange: this.handleChange });
			return React.createElement(
				'div',
				null,
				z,
				data
			);
		}
	}]);

	return Task4411;
}(React.Component);

ReactDOM.render(React.createElement(Task4411, null), document.getElementById('out4411'));