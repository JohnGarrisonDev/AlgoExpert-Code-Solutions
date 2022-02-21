/*
Two Number Sum
https://www.algoexpert.io/questions/Two%20Number%20Sum
*/

//Solution
function twoNumberSum(array, targetSum) {
  
	let results = []
	let subs = []
	for(let i= 0; i<array.length; i++){
		if(subs[targetSum - array[i]]===undefined){
			subs[array[i]]=1;
		}
		else{
			return [array[i],targetSum - array[i]];
		}
	}
	return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
