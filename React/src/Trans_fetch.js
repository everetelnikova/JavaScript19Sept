class Transport extends React.Component {
	constructor(props){
	super(props);  
	this.state={stat:'145',choice:''}; 
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
  
fetchData() {
    fetch('boat.php?present='+this.state.stat+"&option="+this.state.choice)
	.then(response => response.json())
	.then((data) => {console.log("На левом берегу "+ data.left+" На правом берегу "+ data.right)
	this.setState({stat: data.id});	
	})
}		 		
render(){
	
	let data = <input onChange={this.handleChange}></input>
	let bttn = <button onClick={this.handleClick}> Перевезти </button>
	return <div>{data}{bttn}</div>;		
	}
}

ReactDOM.render(
<Transport/>,
document.getElementById('out')
);