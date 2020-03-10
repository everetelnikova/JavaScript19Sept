var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Battleship = function (_React$Component) {
	_inherits(Battleship, _React$Component);

	function Battleship(props) {
		_classCallCheck(this, Battleship);

		var _this = _possibleConstructorReturn(this, (Battleship.__proto__ || Object.getPrototypeOf(Battleship)).call(this, props));

		_this.state = { coords: '', //значения ввденные в input
			msg: '',
			error: '',
			shoots: [],
			shoots_user: [],
			fld: _this.fld_init(),
			fld_s: _this.fld_init()
		};
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleClickBegin = _this.handleClickBegin.bind(_this);
		_this.handleClickShoot = _this.handleClickShoot.bind(_this);
		_this.fetchDataBegin = _this.fetchDataBegin.bind(_this);
		_this.fetchDataShoot = _this.fetchDataShoot.bind(_this);
		_this.drawning_flds = _this.drawning_flds.bind(_this);
		_this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		_this.letters = ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "к"];
		return _this;
	}

	_createClass(Battleship, [{
		key: 'fld_init',
		value: function fld_init() {
			var fld = [[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]];
			return fld;
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {

			this.setState({ coords: event.target.value });
		}
	}, {
		key: 'handleClickBegin',
		value: function handleClickBegin() {
			this.fetchDataBegin();
		}
	}, {
		key: 'handleClickShoot',
		value: function handleClickShoot() {
			this.fetchDataShoot();
		}
	}, {
		key: 'fetchDataBegin',
		value: function fetchDataBegin() {
			var _this2 = this;

			var data = this.state.coords.split(',');
			var fetchPromise = fetch('start?present=' + data);
			fetchPromise.then(function (response) {
				if (response.ok) {
					var jsonPromise = response.text();
					jsonPromise.then(function (data) {
						console.log(data);
						_this2.setState({ msg: data });
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
		key: 'fetchDataShoot',
		value: function fetchDataShoot() {
			var _this3 = this;

			var data_shoot = this.state.coords.split(',');
			var fetchPromise = fetch('check?present=' + data_shoot);
			fetchPromise.then(function (response) {
				if (response.ok) {
					var jsonPromise = response.text();
					jsonPromise.then(function (x_data) {
						var arrData = x_data.split(',');
						if (arrData.length == 1) {
							_this3.setState({ msg: x_data });
							var data_shoot_copy = data_shoot.slice();
							data_shoot_copy.push("попал");
							var copy_fld_s = _this3.state.fld_s.slice();
							_this3.drawning_flds(data_shoot_copy, copy_fld_s);
							_this3.setState({ fld_s: copy_fld_s });
						} else {
							var copy_fld = _this3.state.fld.slice();
							_this3.drawning_flds(arrData, copy_fld);
							_this3.setState({ fld: copy_fld });

							var _data_shoot_copy = data_shoot.slice();
							_data_shoot_copy.push("промах");
							var _copy_fld_s = _this3.state.fld_s.slice();
							_this3.drawning_flds(_data_shoot_copy, _copy_fld_s);
							_this3.setState({ fld_s: _copy_fld_s });
						}
					}, function (error) {
						console.log(error);
					});
				} else {
					var PromiseText = response.text();
					PromiseText.then(function (text) {
						return _this3.setState({ error: text });
					});
				}
			});
		}
	}, {
		key: 'drawning_flds',
		value: function drawning_flds(shoot, field) {

			var letters = this.letters;
			var numbers = this.numbers;
			var data_y = void 0;
			var str_y = void 0;
			var lett = "";
			var lett_s = "";
			var ship_l = shoot[0];
			var ship_n = shoot[1];

			if (shoot[2] == 'попал') {
				var rowOffld = "";
				var result = [];
				var x = ship_l;
				var index_x = letters.indexOf(x);
				var y = ship_n;
				field[index_x][y] = "X";
			} else {
				var _rowOffld = "";
				var _result = [];
				var _x = ship_l;
				var _index_x = letters.indexOf(_x);
				var _y = ship_n;
				field[_index_x][_y] = "+";
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var rowOffld_u = "";
			var rowOffld_s = "";
			result_u = [];
			result_s = [];
			var lett_u = "";
			var lett_s = "";

			for (var z = 0; z < 10; z++) {
				rowOffld_s = this.numbers[z];

				for (var zz = 0; zz < 10; zz++) {
					rowOffld_s = rowOffld_s + this.state.fld_s[zz][z];
				}
				result_s.push(React.createElement(
					'div',
					null,
					rowOffld_s
				));
			}
			for (var symbol = 0; symbol < 10; symbol++) {
				lett_s = lett_s + this.letters[symbol];
			}
			field_of_server = React.createElement(
				'div',
				null,
				React.createElement(
					'p',
					null,
					'\u041F\u041E\u041B\u0415 \u0421\u0415\u0420\u0412\u0415\u0420\u0410'
				),
				React.createElement(
					'p',
					null,
					lett_s
				),
				React.createElement(
					'p',
					null,
					result_s
				),
				React.createElement(
					'p',
					null,
					'----------'
				)
			);

			for (var _z = 0; _z < 10; _z++) {
				rowOffld_u = this.numbers[_z];

				for (var _zz = 0; _zz < 10; _zz++) {
					rowOffld_u = rowOffld_u + this.state.fld[_zz][_z];
				}
				result_u.push(React.createElement(
					'div',
					null,
					rowOffld_u
				));
			}
			for (var _symbol = 0; _symbol < 10; _symbol++) {
				lett_u = lett_u + this.letters[_symbol];
			}
			field_of_user = React.createElement(
				'div',
				null,
				React.createElement(
					'p',
					null,
					'\u041F\u041E\u041B\u0415 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F'
				),
				React.createElement(
					'p',
					null,
					lett_u
				),
				React.createElement(
					'p',
					null,
					result_u
				),
				React.createElement(
					'p',
					null,
					'----------'
				)
			);
			var data_coords = React.createElement('input', { onChange: this.handleChange });
			var bttnBegin = React.createElement(
				'button',
				{ onClick: this.handleClickBegin },
				' \u041D\u0430\u0447\u0430\u0442\u044C '
			);
			var bttnShoot = React.createElement(
				'button',
				{ onClick: this.handleClickShoot },
				' \u0421\u0442\u0440\u0435\u043B\u044F\u0442\u044C '
			);
			return React.createElement(
				'div',
				null,
				data_coords,
				bttnBegin,
				bttnShoot,
				this.state.error,
				this.state.msg,
				field_of_server,
				field_of_user
			);
		}
	}]);

	return Battleship;
}(React.Component);

ReactDOM.render(React.createElement(Battleship, null), document.getElementById('out'));