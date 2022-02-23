//Smallest Difference
//https://www.algoexpert.io/questions/Smallest%20Difference

// MY SOLUTION
function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort(function(a, b){return a-b});
	arrayTwo.sort(function(a, b){return a-b});
	let t = -1;
	let results = [];
	let a = 0;
	let b = 0;
	while(a<arrayOne.length && b< arrayTwo.length){
		let diff = Math.abs(arrayOne[a]-arrayTwo[b]);
		console.log(diff)
		if(diff<t || t<0){
			t = diff;
			results[0] = arrayOne[a];
			results[1] = arrayTwo[b];
		}
		if(arrayOne[a]<arrayTwo[b]){
			a++;
		}
		else{
			b++;
		}
	}
	return results;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
