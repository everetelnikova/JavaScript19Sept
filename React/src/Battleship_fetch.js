class Battleship extends React.Component {
	constructor(props){
	super(props);  
	this.state={coords:'', //значения ввденные в input
	msg:'', 
	error:'', 
	shoots:[],
	shoots_user:[]
	}; 
	this.handleChange = this.handleChange.bind(this);
	this.handleClickBegin =this.handleClickBegin.bind(this);
	this.handleClickShoot =this.handleClickShoot.bind(this);
	this.fetchDataBegin = this.fetchDataBegin.bind(this);
	this.fetchDataShoot = this.fetchDataShoot.bind(this);
	this.numbers = [0,1,2,3,4,5,6,7,8,9];
	this.letters = ["а","б","в","г","д","е","ж","з","и","к"];
  }


handleChange(event){
		let fld = [[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		]
		let fld_s = [[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		[" "," ", " ", " ", " ", " ", " ", " ", " ", " " ],
		]

	this.setState({coords: event.target.value,fld: fld, fld_s: fld_s });
	}

handleClickBegin(){	
	this.fetchDataBegin();
}

handleClickShoot(){	
	this.fetchDataShoot();
}

fetchDataBegin() {
	let data = this.state.coords.split(',');
	let fetchPromise = fetch('start?present='+data)	
	fetchPromise.then(
	(response) => {if (response.ok){
		let jsonPromise = response.text()		
		jsonPromise.then((data) => {console.log(data);
		this.setState({msg: data});	
		},
		(error)=>{console.log(error)}	
		)	
		}
		else{
		let PromiseText = response.text();
		PromiseText.then((text) => this.setState({error: text}))			
		}
	})
}
	
fetchDataShoot() {
	let data_shoot = this.state.coords.split(',');
	let fetchPromise = fetch('check?present='+data_shoot)	
	fetchPromise.then(
	(response) => {if (response.ok){
		let jsonPromise = response.text()		
		jsonPromise.then((x_data) => {
			let arrData = x_data.split(',');
			if (arrData.length ==1){
				this.setState({msg: x_data});
				let data_shoot_copy = data_shoot.slice();
				data_shoot_copy.push("попал");
				let shoots_user_copy = this.state.shoots_user.slice();
				shoots_user_copy.push(data_shoot_copy)
				this.setState({shoots_user:shoots_user_copy});				
			}
			else{
				let shoots_copy = this.state.shoots.slice();
				shoots_copy.push(arrData);			
				this.setState({shoots:shoots_copy});
				let data_shoot_copy = data_shoot.slice();
				data_shoot_copy.push("промах");
				let shoots_user_copy = this.state.shoots_user.slice();
				shoots_user_copy.push(data_shoot_copy)
				this.setState({shoots_user:shoots_user_copy});				
			}

		},
		(error)=>{console.log(error)}	
		)	
		}
		else{
		let PromiseText = response.text();
		PromiseText.then((text) => this.setState({error: text}))			
		}
	})
}
	
render(){
	
	let data = this.state.shoots_user;
	//let data = dataStrng.split(',');
	let x_data = this.state.shoots;
	let fld_s = this.state.fld_s;
	let fld = this.state.fld;
	let letters = this.letters;
	let numbers = this.numbers;
	let field_of_server ="";
	let field_of_user ="";
	let result_s = "";
	if (data != 0 && x_data.length >0){
	let data_y;
	let str_y;
	let lett = ""; 
	let numm = "";  
	let lett_s = ""; 
	let numm_s = "";
	
	let data_letters = data.filter( function (item,index) { return index %2==0;})
	let data_numbers = data.filter( function (item,index) { return index %2!=0;})  
	let ship_l  = data_letters.filter(function(item, index) {   
	let r = letters.filter(function(n) {return n == item;});
	return r != undefined;});				
	let ship_n  = data_numbers.filter(function(item, index) {   
	let r = numbers.filter(function(n) {return n == item;});
	return r != undefined;}); 
				
				
		if (x_data == 'Игра продолжается' || x_data == 'Победа пользователя!'){
			let rowOffld = "";
			let result = [];
			for  (let i= 0; i < ship_l.length; i++){
			let x = ship_l[i];
			let index_x = letters.indexOf(x);
			let y = ship_n[i];
			fld[index_x][y]= "X"; 			
			}

			for (let z = 0; z < 10; z++){
			rowOffld = numbers[z];	
		
				for (let zz = 0; zz < 10; zz++){
				rowOffld = rowOffld+fld[zz][z];			
				}
			result.push(<div>
						{rowOffld}
					</div>);
			}
			for (let symbol = 0; symbol < 10;symbol++ ){
			lett = lett + letters[symbol];
			}
		field_of_server =<div>
					<p>ПОЛЕ СЕРВЕРА</p>
					<p>{lett}</p>
					<p>{numm}</p>
					<p>{result}</p>
					<p>----------</p>
				</div>
		}
		else 
		{
			let rowOffld = "";
			let result = [];
			for  ( let i= 0; i < ship_l.length; i++){	
				let x = ship_l[i];
				let index_x = letters.indexOf(x);
				let y = ship_n[i];
				fld[index_x][y]= "+"; 			
			}

			for (let z = 0; z < 10; z++){
			rowOffld = numbers[z];		
				for (let zz = 0; zz < 10; zz++){
				rowOffld = rowOffld+fld[zz][z];			
				}
			result.push(<div>
						{rowOffld}
					</div>);
			}
			for (let symbol = 0; symbol < 10;symbol++ ){
			lett = lett + letters[symbol];
			}
		field_of_server=<div>
					<p>ПОЛЕ СЕРВЕРА</p>
					<p>{lett}</p>
					<p>{numm}</p>
					<p>{result}</p>
					<p>----------</p>
				</div>
		

		str_y  = x_data; 
		if (str_y[0] == 'Промах!'){
			let rowOffld_u = "";
			let ship_l_s  = str_y[1];
			let ship_n_s  = str_y[2];
			let index_s = letters.indexOf(ship_l_s);
			fld_s[index_s][ship_n_s]= "+"; 			

			for (let z = 0; z < 10; z++)
			{
			rowOffld_u = numbers[z];	
		
		    for (let zz = 0; zz < 10; zz++)
			{
			rowOffld_u = rowOffld_u+fld_s[zz][z];			
			}
			result_s.push(<div>
						{rowOffld_u}
					</div>);
			}
			for (let symbol = 0; symbol < 10;symbol++ )
			{
			lett_s = lett_s + letters[symbol];
			}
			field_of_user =<div>
					<p>ПОЛЕ ПОЛЬЗОВАТЕЛЯ</p>
					<p>{lett_s}</p>
					<p>{numm_s}</p>
					<p>{result_s}</p>
					<p>----------</p>
				</div>
			}
			
		else  if (str_y[0] == 'Попал!')  {
			let ship_l_s  = str_y[1]; 
			let ship_n_s  = str_y[2];
			let index_s = letters.indexOf(ship_l_s);
			fld_s[index_s][ship_n_s]= "X"; 			

			for (let z = 0; z < 10; z++)
			{
			rowOffld_u = numbers[z];	
		
		    for (let zz = 0; zz < 10; zz++)
			{
			rowOffld_u = rowOffld_u+fld_s[zz][z];			
			}
			result_s.push(<div>
						{rowOffld_u}
					</div>);
			}
			for (let symbol = 0; symbol < 10;symbol++ )
			{
			lett_s = lett_s + letters[symbol];
			}
			field_of_user =<div>
					<p>ПОЛЕ ПОЛЬЗОВАТЕЛЯ</p>
					<p>{lett_s}</p>
					<p>{numm_s}</p>
					<p>{result_s}</p>
					<p>----------</p>
				</div>}		
		}			
	}
	
	let data_coords = <input onChange={this.handleChange}></input>
	let bttnBegin = <button onClick={this.handleClickBegin}> Начать </button>
	let bttnShoot = <button onClick={this.handleClickShoot}> Стрелять </button>
	return <div>{data_coords}{bttnBegin}{bttnShoot}{this.state.error}{this.state.msg}{result_s}{field_of_server}</div>;		
	}
}	

ReactDOM.render(
<Battleship/>,
document.getElementById('out')
);