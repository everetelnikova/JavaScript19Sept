class Battleship extends React.Component {
	constructor(props){
	super(props);  
	this.state={coords:'', //значения ввденные в input
	msg:'', 
	error:'', 
	shoots:[],
	shoots_user:[],
	fld: this.fld_init(),
	fld_s: this.fld_init()
	}; 
	this.handleChange = this.handleChange.bind(this);
	this.handleClickBegin =this.handleClickBegin.bind(this);
	this.handleClickShoot =this.handleClickShoot.bind(this);
	this.fetchDataBegin = this.fetchDataBegin.bind(this);
	this.fetchDataShoot = this.fetchDataShoot.bind(this);
	this.drawning_flds = this.drawning_flds.bind(this);
	this.numbers = [0,1,2,3,4,5,6,7,8,9];
	this.letters = ["а","б","в","г","д","е","ж","з","и","к"];
  }
  
  
 fld_init() {
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
  return fld;
 } 
  

handleChange(event){


	this.setState({coords: event.target.value});
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
				let copy_fld_s = this.state.fld_s.slice();
				this.drawning_flds(data_shoot_copy, copy_fld_s)				
				this.setState({fld_s:copy_fld_s});
			}
			else{		
				let copy_fld = this.state.fld.slice();
				this.drawning_flds(arrData, copy_fld)				
				this.setState({fld:copy_fld});				
				
				let data_shoot_copy = data_shoot.slice();
				data_shoot_copy.push("промах");
				let copy_fld_s = this.state.fld_s.slice();
				this.drawning_flds(data_shoot_copy, copy_fld_s)				
				this.setState({fld_s:copy_fld_s});				
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

drawning_flds(shoot, field){
	
	let letters = this.letters;
	let numbers = this.numbers;
	let data_y;
	let str_y;
	let lett = "";  
	let lett_s = ""; 
	let ship_l  = shoot[0];			
	let ship_n  = shoot[1]; 
				
				
		if (shoot[2] == 'попал'){
			let rowOffld = "";
			let result = [];
			let x = ship_l;
			let index_x = letters.indexOf(x);
			let y = ship_n;
			field[index_x][y]= "X"; 			
			
		}
		else 
		{
			let rowOffld = "";
			let result = [];
			let x = ship_l;
			let index_x = letters.indexOf(x);
			let y = ship_n;
			field[index_x][y]= "+"; 			
					
		}			
	
	
}

	
render(){
	let rowOffld_u = "";
	let rowOffld_s = "";
	result_u = [];
	result_s = [];
	let lett_u= "";
	let lett_s= "";
	
	for (let z = 0; z < 10; z++){
			rowOffld_s = this.numbers[z];	
		
				for (let zz = 0; zz < 10; zz++){
				rowOffld_s = rowOffld_s+this.state.fld_s[zz][z];			
				}
			result_s.push(<div>
						{rowOffld_s}
					</div>);
			}
			for (let symbol = 0; symbol < 10;symbol++ ){
			lett_s = lett_s + this.letters[symbol];
			}
		field_of_server =<div>
					<p>ПОЛЕ СЕРВЕРА</p>
					<p>{lett_s}</p>
					<p>{result_s}</p>
					<p>----------</p>
				</div>	
				
	for (let z = 0; z < 10; z++){
			rowOffld_u = this.numbers[z];	
		
				for (let zz = 0; zz < 10; zz++){
				rowOffld_u = rowOffld_u + this.state.fld[zz][z];			
				}
			result_u.push(<div>
						{rowOffld_u}
					</div>);
			}
			for (let symbol = 0; symbol < 10;symbol++ ){
			lett_u = lett_u + this.letters[symbol];
			}
		field_of_user =<div>
					<p>ПОЛЕ Пользователя</p>
					<p>{lett_u}</p>
					<p>{result_u}</p>
					<p>----------</p>
				</div>					
	let data_coords = <input onChange={this.handleChange}></input>
	let bttnBegin = <button onClick={this.handleClickBegin}> Начать </button>
	let bttnShoot = <button onClick={this.handleClickShoot}> Стрелять </button>
	return <div>{data_coords}{bttnBegin}{bttnShoot}{this.state.error}{this.state.msg}{field_of_server}{field_of_user}</div>;		
	}
}	
ReactDOM.render(
<Battleship/>,
document.getElementById('out')
);