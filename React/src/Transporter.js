class Transport extends React.Component {
	constructor(props){
	super(props);  
	this.state={stat:'145',choice:''}; 
	this.handleChange = this.handleChange.bind(this);
	this.handleClick =this.handleClick.bind(this);
	this.handleF =this.handleF.bind(this);
  }

	handleChange(event){
	this.setState({choice: event.target.value});
	}
	
	handleClick(){	
	let slct = this.state.choice;
	let myRequest = new XMLHttpRequest();
	myRequest.onreadystatechange = this.handleF;
	myRequest.open("GET","boat.php?present="+this.state.stat+"&option="+slct,true);  
	myRequest.send(null);		
	}		
	
	handleF(){
	if (myRequest.readyState == 4 ){       
		if (myRequest.status == 200){
		let data = myRequest.responseText;
		let jsdata = JSON.parse(data); 
		console.log(jsdata);
		let id = jsdata.id;
			if(typeof jsdata.status != "undefined"){
			out.innerHTML = jsdata.status;
			}
			if (id != ""){
			this.setState({stat: id});
			}
			else {this.setState({stat:"900"})};
			console.log("<tr>" + "<td width=150>"+jsdata.left+"</td>" + "<td width=150>"+ jsdata.right+"</td>" + "</tr>" + "<br/>");
		}
		else {console.log("mistake");}
	}
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