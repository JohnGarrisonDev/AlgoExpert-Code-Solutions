//Merge Overlapping Intervals
//https://www.algoexpert.io/questions/Merge%20Overlapping%20Intervals

//My Solution
function mergeOverlappingIntervals(array) {
	array.sort((a,b) => a[0]-b[0]);
  let leading = array[0][0];
	let trailing = array[0][1];
	let results = [];
	console.log(array);
	for(let i = 1; i <array.length; i++){
		if (array[i][0] > trailing){
			results.push([leading,trailing]);
			leading = array[i][0]
			trailing = array[i][1]
		}
		else if (array[i][1] > trailing){
			trailing = array[i][1];
		}
	}
	results.push([leading,trailing]);
  return results;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
