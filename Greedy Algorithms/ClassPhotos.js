// Class Photos
//https://www.algoexpert.io/questions/Class%20Photos


//My Solution
function confirm(large,small){
	for(let i = 0; i<large.length; i++){
		if(large[i]<=small[i]){
			return false
		}
	}
	return true;
}

function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a,b)=> (a-b));
	blueShirtHeights.sort((a,b)=> (a-b));
  if(redShirtHeights[redShirtHeights.length-1]>blueShirtHeights[blueShirtHeights.length-1]){
		return confirm(redShirtHeights,blueShirtHeights);
	}
	else if (redShirtHeights[redShirtHeights.length-1]<blueShirtHeights[blueShirtHeights.length-1]){
		return confirm(blueShirtHeights,redShirtHeights);
	}
	else{
		return false;
	}
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
