var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transport = function (_React$Component) {
	_inherits(Transport, _React$Component);

	function Transport(props) {
		_classCallCheck(this, Transport);

		var _this = _possibleConstructorReturn(this, (Transport.__proto__ || Object.getPrototypeOf(Transport)).call(this, props));

		_this.state = { stat: '145', choice: '' };
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		_this.fetchData = _this.fetchData.bind(_this);
		return _this;
	}

	_createClass(Transport, [{
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState({ choice: event.target.value });
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			this.fetchData();
		}
	}, {
		key: 'fetchData',
		value: function fetchData() {
			var _this2 = this;

			fetch('boat.php?present=' + this.state.stat + "&option=" + this.state.choice).then(function (response) {
				return response.json();
			}).then(function (data) {
				console.log("На левом берегу " + data.left + " На правом берегу " + data.right);
				_this2.setState({ stat: data.id });
			});
		}
	}, {
		key: 'render',
		value: function render() {

			var data = React.createElement('input', { onChange: this.handleChange });
			var bttn = React.createElement(
				'button',
				{ onClick: this.handleClick },
				' \u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0442\u0438 '
			);
			return React.createElement(
				'div',
				null,
				data,
				bttn
			);
		}
	}]);

	return Transport;
}(React.Component);

ReactDOM.render(React.createElement(Transport, null), document.getElementById('out'));