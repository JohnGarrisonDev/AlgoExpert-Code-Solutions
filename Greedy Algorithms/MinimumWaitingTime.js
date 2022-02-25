//Minimum Waiting Time
//https://www.algoexpert.io/questions/Minimum%20Waiting%20Time


function minimumWaitingTime(queries) {
    // Write your code here.
      // assumptions: Longest query last, second longest first, everything in between is going to have to wait. 
      
      queries.sort((a,b)=> (a-b));
      let sum = 0;
      let total = queries.length-1;
      for (let i = 0; i<queries.length-1; i++){
          sum = sum + total*queries[i];
          total--;
      }
      
    return sum;
  }
  
  // Do not edit the line below.
  exports.minimumWaitingTime = minimumWaitingTime;
  