class InputButtonList extends React.Component {
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

	let inputArr = this.state.value.split(',');
	let OptionArr = [];
	 for (let i =0; i< inputArr.length;i++){
	  OptionArr.push(<option> {inputArr[i]} </option>);
	}
	  this.setState({list:(<select>
			  {OptionArr}
	  </select>)});
	}	
  render() {
	let z = <button onClick={this.handleClick}>
	Активировать
	</button>
//Getdata - обработчик события

	let data = <input onChange={this.handleChange}>
	</input>
	return <div>{z}{data}{this.state.list}</div>;
  }
}

ReactDOM.render(
<InputButtonList/>,
document.getElementById('out7')
);