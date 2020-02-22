class Task4411 extends React.Component {
  constructor(props){
	super(props);  
	this.state = {value:''}; 
	this.handleChange = this.handleChange.bind(this);
	this.handleClick = this.handleClick.bind(this);
  }
    handleChange(event){
	this.setState({value: event.target.value});	
	}

    handleClick(){
	console.log(this.state.value);	
	}	
  render() {
	let z = <button onClick={this.handleClick}>
	Активировать лазеры
	</button>
//Getdata - обработчик события

	let data = <input onChange={this.handleChange}>
	</input>
	return <div>{z}{data}</div>;
  }
}

ReactDOM.render(
<Task4411/>,
document.getElementById('out4411')
);