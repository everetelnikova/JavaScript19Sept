class ListVessels extends React.Component {
  constructor(props){
	super(props);  
	this.state={value:'8'}; 
	this.handleChangeS1 = this.handleChangeS1.bind(this);
	this.handleChangeS2 = this.handleChangeS2.bind(this);
	this.handleClick =this.handleClick.bind(this);
  }
    handleChangeS1(event){
	this.setState({value: event.target.value});
	}
    handleChangeS2(event){
	this.setState({value: event.target.value});
	}
	
	handleClick(){	
	let curr2 = [8,5,3];
	let firstValue = this.state.value;
	let list = [];
	let current2 =[]; 
	list = curr2.filter(val => val != firstValue);
	for (let i =0; i< list.length;i++){
	  current2.push(<option> {list[i]} </option>);
	}
	this.setState({list2:{current2}});
	}	
	
  render() {
	let current1 =[<option>8</option>,
				   <option>5</option>,
				   <option>3</option>];
				
	let sel1 = <select onChange={this.handleChangeS1}>{current1}</select>;
	let sel2 = <select onChange={this.handleChangeS2}>{this.setState.list2}</select>;
	let bttn = <button onClick={this.handleClick}> Перелить </button>
	return <div>{sel1}{sel2}{bttn}</div>;
  }
}

ReactDOM.render(
<ListVessels/>,
document.getElementById('outV1')
);	
	
	
	
