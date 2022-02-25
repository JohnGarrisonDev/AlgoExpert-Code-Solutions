//Tandem Bicycle
//https://www.algoexpert.io/questions/Tandem%20Bicycle


//My Solution
function calcSpeeds(a,b){
	let sum = 0;
	for (let i = 0; i<a.length; i++){
		sum = sum + Math.max(a[i],b[i]);
	}
	return sum;
}

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  if(fastest){
		redShirtSpeeds.sort((a,b) => (a-b));
		blueShirtSpeeds.sort((a,b) => (b-a));
	}
	else{
		redShirtSpeeds.sort((a,b) => (a-b));
		blueShirtSpeeds.sort((a,b) => (a-b));
	}
  return calcSpeeds(redShirtSpeeds,blueShirtSpeeds);
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
