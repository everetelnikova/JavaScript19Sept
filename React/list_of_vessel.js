var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListVessels = function (_React$Component) {
	_inherits(ListVessels, _React$Component);

	function ListVessels(props) {
		_classCallCheck(this, ListVessels);

		var _this = _possibleConstructorReturn(this, (ListVessels.__proto__ || Object.getPrototypeOf(ListVessels)).call(this, props));

		_this.state = { from: '8', current: { 8: 8, 5: 0, 3: 0 }, to: '5' };
		_this.handleChangeS1 = _this.handleChangeS1.bind(_this);
		_this.handleChangeS2 = _this.handleChangeS2.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(ListVessels, [{
		key: 'handleChangeS1',
		value: function handleChangeS1(event) {
			var selectedIndex = event.target.options.selectedIndex;
			this.setState({ from: event.target.options[selectedIndex].getAttribute('data-key') });
			var x = event.target.options[selectedIndex].getAttribute('data-key');
			if (x == 8) {
				this.setState({ to: '5' });
			} else {
				this.setState({ to: '8' });
			}
		}
	}, {
		key: 'handleChangeS2',
		value: function handleChangeS2(event) {
			var selectedIndex = event.target.options.selectedIndex;
			this.setState({ to: event.target.options[selectedIndex].getAttribute('data-key') });
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			var msg = 'Из ' + this.state.from + 'перелить в ' + this.state.to;
			console.log(msg);

			var value = this.state.current[this.state.to];
			var FreeSpace = this.state.to - value;
			var current = this.state.current;
			var From = this.state.from;
			var To = this.state.to;

			if (FreeSpace >= 0) {
				if (FreeSpace < current[From]) {
					current[From] = current[From] - FreeSpace;
					current[To] = To;
					this.setState({ current: current });
				}
			}

			value = current[To];
			FreeSpace = To - value;

			if (FreeSpace >= 0) {
				if (FreeSpace >= current[From]) {
					current[To] = current[From] + current[To];
					current[From] = 0;
					this.setState({ current: current });
				}
			}

			/////////////////////////////////////////////////////////	
		}
	}, {
		key: 'render',
		value: function render() {
			var current1 = [React.createElement(
				'option',
				{ key: 8, 'data-key': 8 },
				'8/',
				this.state.current[8]
			), React.createElement(
				'option',
				{ key: 5, 'data-key': 5 },
				'5/',
				this.state.current[5]
			), React.createElement(
				'option',
				{ key: 3, 'data-key': 3 },
				'3/',
				this.state.current[3]
			)];

			var curr2 = [8, 5, 3];
			var firstValue = this.state.from;
			var list = [];
			var current2 = [];
			list = curr2.filter(function (val) {
				return val != firstValue;
			});
			for (var i = 0; i < list.length; i++) {
				current2.push(React.createElement(
					'option',
					{ key: i, 'data-key': list[i] },
					' ',
					list[i],
					' '
				));
			}

			var sel1 = React.createElement(
				'select',
				{ onChange: this.handleChangeS1 },
				current1
			);
			var sel2 = React.createElement(
				'select',
				{ onChange: this.handleChangeS2 },
				current2
			);
			var bttn = React.createElement(
				'button',
				{ onClick: this.handleClick },
				' \u041F\u0435\u0440\u0435\u043B\u0438\u0442\u044C '
			);
			return React.createElement(
				'div',
				null,
				sel1,
				sel2,
				bttn
			);
		}
	}]);

	return ListVessels;
}(React.Component);

ReactDOM.render(React.createElement(ListVessels, null), document.getElementById('outV1'));