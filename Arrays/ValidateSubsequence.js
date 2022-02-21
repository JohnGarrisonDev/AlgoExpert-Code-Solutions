/*
Validate Sequence
https://www.algoexpert.io/questions/Validate%20Subsequence
*/
//Solution
function isValidSubsequence(array, sequence) {

	let count = 0;
	
	for(let i = 0; i<array.length; i++){
		if (array[i] == sequence[count]){
		count++;
	}
}
	if(count == sequence.length){
		return true; 
	}
	else{
		return false; 
	}
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;