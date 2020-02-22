class List extends React.Component {
  render() {
	  return( <select>
				<option> {this.props.a} </option>
				<option> {this.props.b} </option>
				<option> {this.props.c}</option>
			 </select>);
  }
}
const e ="4";
ReactDOM.render(
  <List a={e} b="8" c="7" />,
  document.getElementById('out')
);

class ListArr extends React.Component {
  render() {
	  return( <select>
				<option> {this.props.arr[0]} </option>
				<option> {this.props.arr[1]} </option>
				<option> {this.props.arr[2]}</option>
			 </select>);
  }
}
const arr =[1,2,3];
ReactDOM.render(
  <ListArr arr={arr}/>,
  document.getElementById('out2')
);

class ListForEach extends React.Component {
  render() {
	  let OptionArr = [];
	  for (let i =0; i< this.props.arr.length;i++){
	  OptionArr.push(<option> {this.props.arr[i]} </option>);
	}
	  return( <select>
			  {OptionArr}
			 </select>);
  }
}
ReactDOM.render(
  <ListForEach arr={[0,2,4,5,9,8,7,3]}/>,
  document.getElementById('out3')
);

function activateLasers(){
 console.log('Кнопочка');	
}

let z = <button onClick={activateLasers}>
  Активировать лазеры
</button>
ReactDOM.render(
z,
document.getElementById('out4')
);
//Getdata - обработчик события
function Getdata(event){
 console.log(event.target.value);	
}
let data = <input onChange={Getdata}>
</input>
ReactDOM.render(
data,
document.getElementById('out5')
);

