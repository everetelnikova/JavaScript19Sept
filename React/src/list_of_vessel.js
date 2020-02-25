class ListVessels extends React.Component {
  constructor(props){
	super(props);  
	this.state={from:'8',current:{8:8,5:0,3:0},to:'5'}; 
	this.handleChangeS1 = this.handleChangeS1.bind(this);
	this.handleChangeS2 = this.handleChangeS2.bind(this);
	this.handleClick =this.handleClick.bind(this);
  }
    handleChangeS1(event){
	let selectedIndex = event.target.options.selectedIndex;
	this.setState({from: event.target.options[selectedIndex].getAttribute('data-key')});
	let x = event.target.options[selectedIndex].getAttribute('data-key');
	if(x == 8){this.setState({to:'5'});}
	else {this.setState({to:'8'})}
	}
    handleChangeS2(event){
	let selectedIndex = event.target.options.selectedIndex;
	this.setState({to: event.target.options[selectedIndex].getAttribute('data-key')});
	}
	
	handleClick(){	
	let msg = 'Из ' + this.state.from + 'перелить в ' + this.state.to;
	console.log(msg);

	let value = this.state.current[this.state.to];		
	let FreeSpace = this.state.to - value;				
	let current = this.state.current;
	let From =  this.state.from;
	let To = this.state.to;					
		
		if (FreeSpace >=0)  							
		{
			if (FreeSpace < current[From])        		
			{
			 current[From] = current[From] - FreeSpace; 
			 current[To] = To;							
			this.setState({current:current});
			
			}
		}
														
		 value = current[To];							
		 FreeSpace = To - value;						
		 
		if (FreeSpace >=0)  							
		{
			if (FreeSpace >= current[From]) 			 
			{
			 current[To] = current[From] + current[To];
			 current[From] = 0;
			 this.setState({current:current});
			}
		
		}
	
/////////////////////////////////////////////////////////	
	}	
	
  render() {
	let current1 =[<option key={8} data-key={8}>8/{this.state.current[8]}</option>,
				   <option key={5} data-key={5}>5/{this.state.current[5]}</option>,
				   <option key={3} data-key={3}>3/{this.state.current[3]}</option>];
				   
	let curr2 = [8,5,3];
	let firstValue = this.state.from;
	let list = [];
	let current2 =[]; 
	list = curr2.filter(val => val != firstValue);
	for (let i =0; i< list.length;i++){
	  current2.push(<option key={i} data-key={list[i]}> {list[i]} </option>);
	}
				
	let sel1 = <select onChange={this.handleChangeS1}>{current1}</select>;
	let sel2 = <select onChange={this.handleChangeS2}>{current2}</select>;
	let bttn = <button onClick={this.handleClick}> Перелить </button>
	return <div>{sel1}{sel2}{bttn}</div>;
  }
}

ReactDOM.render(
<ListVessels/>,
document.getElementById('outV1')
);	
	
	
	
