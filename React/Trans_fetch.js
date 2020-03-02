var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transport = function (_React$Component) {
	_inherits(Transport, _React$Component);

	function Transport(props) {
		_classCallCheck(this, Transport);

		var _this = _possibleConstructorReturn(this, (Transport.__proto__ || Object.getPrototypeOf(Transport)).call(this, props));

		_this.state = { stat: '145', choice: '', status: '', error: '', left: '', right: '' };
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

		// fetchData() {
		// fetch('boat.php?present='+this.state.stat+"&option="+this.state.choice)
		// .then(response => response.json())
		// .then((data) => {console.log("На левом берегу "+ data.left+" На правом берегу "+ data.right)
		// this.setState({stat: data.id});	
		// })
		// }

	}, {
		key: 'fetchData',
		value: function fetchData() {
			var _this2 = this;

			var fetchPromise = fetch('boat.php?present=' + this.state.stat + "&option=" + this.state.choice);

			fetchPromise.then(function (response) {
				if (response.ok) {
					var jsonPromise = response.json();
					jsonPromise.then(function (data) {
						console.log("На левом берегу " + data.left + " На правом берегу " + data.right);
						_this2.setState({ stat: data.id, status: data.status, left: data.left, right: data.right });
					}, function (error) {
						console.log(error);
					});
				} else {
					var PromiseText = response.text();
					PromiseText.then(function (text) {
						return _this2.setState({ error: text });
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var msg = "";
			if (this.state.status === undefined) {
				msg = "На левом берегу " + this.state.left + " на правом берегу " + this.state.right;
			} else {
				msg = this.state.status;
			}
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
				bttn,
				msg,
				this.state.error
			);
		}
	}]);

	return Transport;
}(React.Component);

ReactDOM.render(React.createElement(Transport, null), document.getElementById('out'));