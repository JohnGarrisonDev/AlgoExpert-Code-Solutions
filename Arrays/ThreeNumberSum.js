//Three Number Sum
//https://www.algoexpert.io/questions/Three%20Number%20Sum

//MY SOLUTION
function threeNumberSum(array, targetSum) {
	results = [];
	array.sort(function(a, b){return a-b});
for(let i = 0; i<array.length; i++){
	for (let j = i+1; j<array.length; j++){
		let diff = targetSum - (array[i] + array[j]);
		if(array.includes(diff,j+1)){
			 results.push(([array[i],array[j],diff].sort(function(a, b){return a-b})));
		}
	}
	console.log(results);
}
	return results;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;