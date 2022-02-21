/*
Tournament Winner
https://www.algoexpert.io/questions/Tournament%20Winner
*/


//Solution
function tournamentWinner(competitions, results) {
    let dict = {}
      let curWinner = '';
      let highScore = 0
      let a = ''
      for (let i = 0; i<competitions.length;i++){
          if (results[i] == 1){
              if(dict[competitions[i][0]] === undefined){
                  dict[competitions[i][0]] = 0;
              }
              dict[competitions[i][0]] = dict[competitions[i][0]]+3;
              a = competitions[i][0]
          }
          else{
                  if(dict[competitions[i][1]] === undefined){
                  dict[competitions[i][1]] = 0;
              }
              dict[competitions[i][1]] = dict[competitions[i][1]]+3;
              a = competitions[i][1]
          }
          if(curWinner == a){
              highScore = highScore+3;
          }
          else if (dict[a] > highScore){
              curWinner = a;
              highScore = dict[a];
          }
      }
      console.log(dict);
    return curWinner;
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;
  