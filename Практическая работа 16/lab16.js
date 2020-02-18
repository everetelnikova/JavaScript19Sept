	
	
	class LiquidPortion{
		constructor(volume, temperature){
		this.volume = volume;
		this.temperature = temperature;
		}		
	}
	
	
	class Force{
		constructor(x,y,value){
		this.x = x;
		this.y = y;
		this.value = value;
		}
	}
	
	
	class Methods{
		mixLiquids(LP1,LP2){
		if ( (LP1.volume <0) || (LP2.volume <0)){
		let err = new Error("Объем не должен быть отрицательным") // создание исключения
		throw err;}
		
		let vol = LP1.volume + LP2.volume;
		let temp = (LP1.temperature* LP1.volume + LP2.temperature* LP2.volume)/vol;	
	
		return new LiquidPortion(vol,temp);	
		}
		
		FindResult(F1,F2){
		if ( (F1.value <0) || (F2.value <0)){
		let err = new Error("Сила не может быть отрицательной") // создание исключения
		throw err;}	
		let aMod = Math.sqrt(Math.pow(F1.x,2)+ Math.pow(F1.y,2) );
		let bMod = Math.sqrt(Math.pow(F2.x,2)+ Math.pow(F2.y,2) );
		let producta_b = F1.x * F2.x + F1.y * F2.y;
		let anglea_b = Math.acos(producta_b/(aMod*bMod));
		let x_last = F1.x + F2.x;
		let y_last = F1.y + F2.y;
		let value_last = Math.sqrt(Math.pow(F1.value,2) + Math.pow(F2.value,2)+ 2*F1.value*F2.value*Math.cos(anglea_b));
		return new Force(x_last,y_last,value_last);
		}
	}