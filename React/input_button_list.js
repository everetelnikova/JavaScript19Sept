var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputButtonList = function (_React$Component) {
	_inherits(InputButtonList, _React$Component);

	function InputButtonList(props) {
		_classCallCheck(this, InputButtonList);

		var _this = _possibleConstructorReturn(this, (InputButtonList.__proto__ || Object.getPrototypeOf(InputButtonList)).call(this, props));

		_this.state = { value: '' };
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(InputButtonList, [{
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState({ value: event.target.value });
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			var inputArr = this.state.value.split(',');
			var OptionArr = [];
			for (var i = 0; i < inputArr.length; i++) {
				OptionArr.push(React.createElement(
					'option',
					null,
					' ',
					inputArr[i],
					' '
				));
			}
			this.setState({ list: React.createElement(
					'select',
					null,
					OptionArr
				) });
		}
	}, {
		key: 'render',
		value: function render() {
			var z = React.createElement(
				'button',
				{ onClick: this.handleClick },
				'\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C'
			);
			//Getdata - обработчик события

			var data = React.createElement('input', { onChange: this.handleChange });
			return React.createElement(
				'div',
				null,
				z,
				data,
				this.state.list
			);
		}
	}]);

	return InputButtonList;
}(React.Component);

ReactDOM.render(React.createElement(InputButtonList, null), document.getElementById('out7'));