var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Battleship = function (_React$Component) {
	_inherits(Battleship, _React$Component);

	function Battleship(props) {
		_classCallCheck(this, Battleship);

		var _this = _possibleConstructorReturn(this, (Battleship.__proto__ || Object.getPrototypeOf(Battleship)).call(this, props));

		_this.state = { coords: '', numbers: '', letters: '', fld: '', fld_s: '', msg: '', error: '', shoots: '' };
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleClickBegin = _this.handleClickBegin.bind(_this);
		_this.handleClickShoot = _this.handleClickShoot.bind(_this);
		_this.fetchDataBegin = _this.fetchDataBegin.bind(_this);
		_this.fetchDataShoot = _this.fetchDataShoot.bind(_this);
		return _this;
	}

	_createClass(Battleship, [{
		key: 'handleChange',
		value: function handleChange(event) {
			var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
			var letters = ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "к"];
			var fld = [[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]];
			var fld_s = [[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]];

			this.setState({ coords: event.target.value, numbers: numbers, letters: letters, fld: fld, fld_s: fld_s });
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
						console.log(x_data);
						_this3.setState({ shoots: x_data });
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
		key: 'render',
		value: function render() {

			var dataStrng = this.state.coords;
			var data = dataStrng.split(',');
			var x_dataStrng = this.state.shoots;
			var x_data = x_dataStrng.split(',');
			var fld_s = this.state.fld_s;
			var fld = this.state.fld;
			var letters = this.state.letters;
			var numbers = this.state.numbers;
			var result = "";
			var result_s = "";
			if (dataStrng != 0 && x_dataStrng != 0) {
				var data_y = void 0;
				var str_y = void 0;
				var lett = "";
				var numm = "";
				var lett_s = "";
				var numm_s = "";

				var data_letters = data.filter(function (item, index) {
					return index % 2 == 0;
				});
				var data_numbers = data.filter(function (item, index) {
					return index % 2 != 0;
				});
				var ship_l = data_letters.filter(function (item, index) {
					var r = letters.filter(function (n) {
						return n == item;
					});
					return r != undefined;
				});
				var ship_n = data_numbers.filter(function (item, index) {
					var r = numbers.filter(function (n) {
						return n == item;
					});
					return r != undefined;
				});

				if (x_data == 'Игра продолжается' || x_data == 'Победа пользователя!') {
					for (var i = 0; i < ship_l.length; i++) {
						var x = ship_l[i];
						var index_x = letters.indexOf(x);
						var y = ship_n[i];
						fld[index_x][y] = "X";
					}

					for (var z = 0; z < 10; z++) {
						result = result + numbers[z];

						for (var zz = 0; zz < 10; zz++) {
							result = result + fld[zz][z];
						}
						result = result + "|" + "</br>";
					}
					for (var symbol = 0; symbol < 10; symbol++) {
						lett = lett + letters[symbol];
					}
					result = " ПОЛЕ СЕРВЕРА " + "</br>" + " " + lett + numm + "</br>" + result + " ----------";
				} else {
					for (var _i = 0; _i < ship_l.length; _i++) {
						var _x = ship_l[_i];
						var _index_x = letters.indexOf(_x);
						var _y = ship_n[_i];
						fld[_index_x][_y] = "+";
					}

					for (var _z = 0; _z < 10; _z++) {
						result = result + numbers[_z];
						for (var _zz = 0; _zz < 10; _zz++) {
							result = result + fld[_zz][_z];
						}
						result = result + "|" + "</br>";
					}
					for (var _symbol = 0; _symbol < 10; _symbol++) {
						lett = lett + letters[_symbol];
					}
					result = " ПОЛЕ СЕРВЕРА " + "</br>" + " " + lett + numm + "</br>" + result + " ----------";

					str_y = x_data;
					if (str_y[0] == 'Промах!') {
						var ship_l_s = str_y[1];
						var ship_n_s = str_y[2];
						var index_s = letters.indexOf(ship_l_s);
						fld_s[index_s][ship_n_s] = "+";

						for (var _z2 = 0; _z2 < 10; _z2++) {
							result_s = result_s + numbers[_z2];

							for (var _zz2 = 0; _zz2 < 10; _zz2++) {
								result_s = result_s + fld_s[_zz2][_z2];
							}
							result_s = result_s + "|" + "</br>";
						}
						for (var _symbol2 = 0; _symbol2 < 10; _symbol2++) {
							lett_s = lett_s + letters[_symbol2];
						}
						result_s = " ПОЛЕ ПОЛЬЗОВАТЕЛЯ " + "</br>" + " " + lett_s + numm_s + "</br>" + result_s + " ----------";
						console.log(result_s);
					} else if (str_y[0] == 'Попал!') {
						var _ship_l_s = str_y[1];
						var _ship_n_s = str_y[2];
						var _index_s = letters.indexOf(_ship_l_s);
						fld_s[_index_s][_ship_n_s] = "X";

						for (var _z3 = 0; _z3 < 10; _z3++) {
							result_s = result_s + numbers[_z3];

							for (var _zz3 = 0; _zz3 < 10; _zz3++) {
								result_s = result_s + fld_s[_zz3][_z3];
							}
							result_s = result_s + "|" + "</br>";
						}
						for (var _symbol3 = 0; _symbol3 < 10; _symbol3++) {
							lett_s = lett_s + letters[_symbol3];
						}
						result_s = " ПОЛЕ ПОЛЬЗОВАТЕЛЯ " + "</br>" + " " + lett_s + numm_s + "</br>" + result_s + " ----------";
					}
				}
			}

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
				result_s,
				result
			);
		}
	}]);

	return Battleship;
}(React.Component);

ReactDOM.render(React.createElement(Battleship, null), document.getElementById('out'));