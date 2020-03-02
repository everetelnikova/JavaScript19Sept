class Transport extends React.Component {
	constructor(props){
	super(props);  
	this.state={stat:'145',choice:'', status:'', error: '', left:'', right:''}; 
	this.handleChange = this.handleChange.bind(this);
	this.handleClick =this.handleClick.bind(this);
	this.fetchData = this.fetchData.bind(this);
  }

handleChange(event){
	this.setState({choice: event.target.value});
	}

handleClick(){	
	this.fetchData();
}
  
// fetchData() {
    // fetch('boat.php?present='+this.state.stat+"&option="+this.state.choice)
	// .then(response => response.json())
	// .then((data) => {console.log("На левом берегу "+ data.left+" На правом берегу "+ data.right)
	// this.setState({stat: data.id});	
	// })
// }

fetchData() {
	let fetchPromise = fetch('boat.php?present='+this.state.stat+"&option="+this.state.choice)
	
	fetchPromise.then(
	(response) => {if (response.ok){
		let jsonPromise = response.json()
		jsonPromise.then((data) => {console.log("На левом берегу "+ data.left+" На правом берегу "+ data.right)
		this.setState({stat: data.id, status: data.status, left:data.left, right:data.right});	
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
	let msg = "";
	if (this.state.status === undefined){
	msg = "На левом берегу " + this.state.left + " на правом берегу " + this.state.right;	
	}
	else{
	msg = this.state.status;	
	}
	let data = <input onChange={this.handleChange}></input>
	let bttn = <button onClick={this.handleClick}> Перевезти </button>
	return <div>{data}{bttn}{msg}{this.state.error}</div>;		
	}
}

ReactDOM.render(
<Transport/>,
document.getElementById('out')
);