class Battleship extends React.Component {
	constructor(props){
	super(props);  
	this.state={coords:'', numbers:'',letters:'',fld: '', fld_s:'', msg:'', error:'', shoots:''}; 
	this.handleChange = this.handleChange.bind(this);
	this.handleClickBegin =this.handleClickBegin.bind(this);
	this.handleClickShoot =this.handleClickShoot.bind(this);
	this.fetchDataBegin = this.fetchDataBegin.bind(this);
	this.fetchDataShoot = this.fetchDataShoot.bind(this);
  }

handleChange(event){
		let numbers = [0,1,2,3,4,5,6,7,8,9];
		let letters = ["а","б","в","г","д","е","ж","з","и","к"];
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

	this.setState({coords: event.target.value, numbers: numbers, letters: letters, fld: fld, fld_s: fld_s });
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
		jsonPromise.then((x_data) => {console.log(x_data);		
		this.setState({shoots: x_data});	
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
	
	let dataStrng = this.state.coords;
	let data = dataStrng.split(',');
	let x_dataStrng = this.state.shoots;
	let x_data = x_dataStrng.split(',');
	let fld_s = this.state.fld_s;
	let fld = this.state.fld;
	let letters = this.state.letters;
	let numbers = this.state.numbers;
	let result = "";
	let result_s = "";
	if (dataStrng != 0 && x_dataStrng != 0){
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
			for  (let i= 0; i < ship_l.length; i++){
			let x = ship_l[i];
			let index_x = letters.indexOf(x);
			let y = ship_n[i];
			fld[index_x][y]= "X"; 			
			}

			for (let z = 0; z < 10; z++){
			result =result + numbers[z];	
		
				for (let zz = 0; zz < 10; zz++){
				result = result+fld[zz][z];			
				}
			result = result + "|"+ "</br>";
			}
			for (let symbol = 0; symbol < 10;symbol++ ){
			lett = lett + letters[symbol];
			}
		result =" ПОЛЕ СЕРВЕРА " + "</br>"+" "+ lett + numm+ "</br>"+ result + " ----------" ;	
		}
		else 
		{				
			for  ( let i= 0; i < ship_l.length; i++){	
				let x = ship_l[i];
				let index_x = letters.indexOf(x);
				let y = ship_n[i];
				fld[index_x][y]= "+"; 			
			}

			for (let z = 0; z < 10; z++){
			result =result + numbers[z];		
				for (let zz = 0; zz < 10; zz++){
				result = result+fld[zz][z];			
				}
			result = result + "|"+ "</br>";
			}
			for (let symbol = 0; symbol < 10;symbol++ ){
			lett = lett + letters[symbol];
			}
		result =" ПОЛЕ СЕРВЕРА " + "</br>"+" "+ lett + numm+ "</br>"+ result + " ----------" ;	
		

		str_y  = x_data; 
		if (str_y[0] == 'Промах!'){
			let ship_l_s  = str_y[1];
			let ship_n_s  = str_y[2];
			let index_s = letters.indexOf(ship_l_s);
			fld_s[index_s][ship_n_s]= "+"; 			

			for (let z = 0; z < 10; z++)
			{
			result_s =result_s + numbers[z];	
		
		    for (let zz = 0; zz < 10; zz++)
			{
			result_s = result_s+fld_s[zz][z];			
			}
			result_s = result_s + "|"+ "</br>";
			}
			for (let symbol = 0; symbol < 10;symbol++ )
			{
			lett_s = lett_s + letters[symbol];
			}
			result_s =" ПОЛЕ ПОЛЬЗОВАТЕЛЯ " + "</br>"+" "+ lett_s + numm_s+ "</br>"+ result_s + " ----------" ;
			console.log(result_s);}
			
		else  if (str_y[0] == 'Попал!')  {
			let ship_l_s  = str_y[1]; 
			let ship_n_s  = str_y[2];
			let index_s = letters.indexOf(ship_l_s);
			fld_s[index_s][ship_n_s]= "X"; 			

			for (let z = 0; z < 10; z++)
			{
			result_s =result_s + numbers[z];	
		
		    for (let zz = 0; zz < 10; zz++)
			{
			result_s = result_s+fld_s[zz][z];			
			}
			result_s = result_s + "|"+ "</br>";
			}
			for (let symbol = 0; symbol < 10;symbol++ )
			{
			lett_s = lett_s + letters[symbol];
			}
			result_s =" ПОЛЕ ПОЛЬЗОВАТЕЛЯ " + "</br>"+" "+ lett_s + numm_s+ "</br>"+ result_s + " ----------" ;}		
		}			
	}
	
	let data_coords = <input onChange={this.handleChange}></input>
	let bttnBegin = <button onClick={this.handleClickBegin}> Начать </button>
	let bttnShoot = <button onClick={this.handleClickShoot}> Стрелять </button>
	return <div>{data_coords}{bttnBegin}{bttnShoot}{this.state.error}{this.state.msg}{result_s}{result}</div>;		
	}
}	

ReactDOM.render(
<Battleship/>,
document.getElementById('out')
);