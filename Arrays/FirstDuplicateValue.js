//First Duplicate Value
//https://www.algoexpert.io/questions/First%20Duplicate%20Value


//My Solution
function firstDuplicateValue(array) {
    for(let i =0; i<array.length; i++){
          console.log(array);
          console.log(array[Math.abs(array[i])-1]);
          if (array[Math.abs(array[i])-1]<0){
              return Math.abs(array[i]);
          }
  
          array[Math.abs(array[i])-1] = -array[Math.abs(array[i])-1];
      }
    return -1;
  }
  
  // Do not edit the line below.
  exports.firstDuplicateValue = firstDuplicateValue;
  