//Array of Products
//https://www.algoexpert.io/questions/Array%20Of%20Products

//My Solution
function arrayOfProducts(array) {
	let a = [];
	let b = [];
	let p = 1;
	let results = [];
  for (let i = 0; i<array.length; i++){
		a[i] = p*array[i];
		p = a[i];
	}
	p = 1
	for (let i = array.length -1; i>=0; i--){
		b[i] = p*array[i];
		p = b[i];
	}
	console.log(a);
	console.log(b);
	for(let i = 0; i<a.length; i++){
		if (i==0){
			results.push(b[i+1]);
		}
		else if (i == a.length -1){
			results.push(a[i-1]);
		}
		else{
			results.push(a[i-1]*b[i+1])
		}
	}
	return results;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
