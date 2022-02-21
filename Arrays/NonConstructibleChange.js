// Non-Constructible Change
//https://www.algoexpert.io/questions/Non-Constructible%20Change

//Solution
function nonConstructibleChange(coins) {
    coins.sort((a,b) => a-b);
      let coinCount = 0;
      for (let i = 0; i<coins.length;i++){
          if( coins[i] > coinCount +1 ){
              return coinCount+1;
          }
          else{
              coinCount = coinCount+coins[i]
          }
      }
    return coinCount+1;
  }
  
  // Do not edit the line below.
  exports.nonConstructibleChange = nonConstructibleChange;
  