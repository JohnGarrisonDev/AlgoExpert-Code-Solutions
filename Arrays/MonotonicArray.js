//Monotonic Array
//https://www.algoexpert.io/questions/Monotonic%20Array

//My Solution
function isMonotonic(array) {
	let v = true;
	let a = 0;
  if (array.length <=1){
		return true;
	}
	else{
		while(array[a] == array[a+1]){
			if(a+1 == array.length){
				return true;
			}
			a++;
		}
		if(array[a] < array[a+1]){
			v = true;
		}
		else{
			v = false;
		}
		for(let i = a; i<array.length-1;i++){
			if(v){
				if(array[i] > array[i+1]){
					return false;
				}
			}
			else{
				if(array[i]<array[i+1]){
					return false;
				}
			}
		}
		return true;
	}
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
