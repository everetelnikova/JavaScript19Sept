
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('result')
);

/*const capacity = [3,5,8];
const listCap = capacity.map((number,index) =>
  <li key={index}> {number}</li>
);

ReactDOM.render(
  <ul>{listCap}</ul>,
  document.getElementById('rs')  <ul>{items}</ul>;
);*/

<ul id="list"></ul>
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '8'};
    this.handleChange = this.handleChange.bind(this);
    }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
render() {
let items = this.props.elements.map((element)=> <li>Ёлемент {element}</li>);
return (<form>
        <label>    
          <select value={this.state.value} onChange={this.handleChange}>
            <option value = "items[0]"> 3 </option>
            <option value ="items[1]"> 5 </option>
            <option value ="items[2]"> 8</option>
          </select>
        </label>
        </form>);}
}


ReactDOM.render(
<List elements={[3,5,8]}/>,
document.getElementById('list')
);

/*
class List extends React.Component{
  constructor(props) {
    super(props);
		this.volume = {listCap    
    };
  }	
render(){
	 return (<form>
        <label>    
          <select>
            <option> х</option>
            <option >’ј-’ј!</option>
            <option >’ј!</option>
          </select>
        </label>
        </form>);
}
}
ReactDOM.render(
  <List/>,
 document.getElementById('rslt')
);

*/


// Ёта функци€ отвечает за выбор в селекторах
/*  	function work()
	{		
		let inData1 = document.getElementById("data1");
		let str1  = inData1.value;	
		var K = Object.keys(current);
		let K2 = K.filter(val => val != str1);
		let	sel2 = document.getElementById("data2");
		sel = "<option>" + K2[0] + "</option>" + "<option>" + K2[1] + "</option>";
		sel2.innerHTML = sel;
	}
  
 /// эта отвечает за переливани€ и отображение на странице 
  function trans()
	{
		let inData1 = document.getElementById("data1");
		let str1  = inData1.value;
		let From = Number(str1); 						// емкость, из которой выливаем
		let inData2 = document.getElementById("data2");
		let str2  = inData2.value;
		let To = Number(str2);							// емкость, в которую льем
		let divOut = document.getElementById ("out");
		
		
		let value = current[To];						// получаем текущее значение, из емкости куда льем          
		let FreeSpace = To - value;						// получаем значение, сколько свободного места в емкости в которую льем
		
		if (FreeSpace >=0)  							// заходим в цикл только если есть свободное место куда лить
		{
			if (FreeSpace < current[From])        		// если свободного места меньше, чем кол-во жидкости в емкости из которой переливаем
			{
			 current[From] = current[From] - FreeSpace;  // получаем остаток в емскости из которой переливали
			 current[To] = To;							 // текущее значение в емкости, куда заливали стало максимальным			
			}
		}
														// снова находим текущии значени€, чтобы не пошел в цикл 
		 value = current[To];							// получаем текущее значение, из емкости куда льем          
		 FreeSpace = To - value;						// получаем значение, сколько свободного места в емкости в которую льем
		 
		if (FreeSpace >=0)  							// заходим в цикл только если есть свободное место куда лить
		{
			if (FreeSpace >= current[From]) 			 // если свободного места больше, чем в емкости из которой льем
			{
			 current[To] = current[From] + current[To];
			 current[From] = 0;
			}
		
		}
		result = result + "<tr>" + "<td>"+current[8] +"</td>"  + "<td>"+current[5]+ "</td>"+ "<td>"+current[3] +"</td>" + "</tr>";
		if (current[8] == 4 || current[5]==4 || current[3]==4)
		{
		result = result + "”спех! Ќаконец-то!";
		}
		divOut.innerHTML = result;
		
		var K = Object.keys(current);
		let K3 = K.filter(key => current[key] > 0);          
		let	sel1 = document.getElementById("data1");
		if (K3.length ==1)
		{
		result1 = "<option>" + K3[0] + "</option>";
		}
		if (K3.length ==2)
		{
		result1 = "<option>" + K3[0] + "</option>"+ "<option>" + K3[1] + "</option>";
		}
		if (K3.length ==3)
		{
		result1 = "<option>" + K3[0] + "</option>"+ "<option>" + K3[1] + "</option>"+ "<option>" + K3[2] + "</option>";
		}
		
		
		sel1.innerHTML = result1;		
*/