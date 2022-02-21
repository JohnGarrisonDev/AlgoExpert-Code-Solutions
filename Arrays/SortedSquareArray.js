// Sorted Square Array
// https://www.algoexpert.io/questions/Sorted%20Squared%20Array

//Solution
function sortedSquaredArray(array) {
    for(let i =0; i<array.length; i++){
          array[i] = array[i]*array[i];
      }
    return array.sort((a, b) => a - b);
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;
  