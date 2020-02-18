
function hasIntersectionInts(Ar,Br,Ag,Bg){
	let result;
	
	if ( (Ar > Br) || (Ag > Bg)){
	let err = new Error("Некорректный интервал. Левая граница должна быть меньше правой.") // создание исключения
	throw err;
	}
	if (Bg>=Ar && Ag<=Br){
		result = "пересекаются";
	}
	else{
		result = "не пересекаются";
	}
	
return result;	
}

function hasIntersectionObjects(A,B){
	let result;
	if ( (A.r > B.r) || (A.g > B.g)){
	let err = new Error("Некорректный интервал. Левая граница должна быть меньше правой.") // создание исключения
	throw err;
	}
	if (B.g>=A.r && A.g<=B.r){
		result = "пересекаются";
	}
	else{
		result = "не пересекаются";
	}
	

return result;	
}

	class Range{
		constructor(r,g){
		this.r = r;
		this.g = g;		
		}
		hasIntersection(x){
			let result;
			if ( (this.r > x.r) || (this.g > x.g)){
			let err = new Error("Некорректный интервал. Левая граница должна быть меньше правой.") // создание исключения
			throw err;
			}
			if (x.g>=this.r && this.g<=x.r){
			result = "пересекаются";
			}
			else{
			result = "не пересекаются";
			}	

		return result;	
		}
	}