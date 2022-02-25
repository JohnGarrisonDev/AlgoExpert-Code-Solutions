//Task Assignment
//https://www.algoexpert.io/questions/Task%20Assignment


//My Solution
function taskAssignment(k, tasks) {
    let dict = {}
      let results = []
      
      for(let i = 0; i<tasks.length; i++){
          if(dict[tasks[i]] == undefined){
              dict[tasks[i]] = [i]
          }
          else{
              array = dict[tasks[i]]
              array.push(i);
              dict[tasks[i]] = array;
          }
      }
      
      
      tasks.sort((a,b)=>(a-b));
      
      let j = tasks.length-1;
      for(let i=0; i<Math.floor(tasks.length/2);i++){
      
          let a = dict[tasks[i]];
          a=a.pop();
          let b = dict[tasks[j]];
          b=b.pop();
          results.push([a,b]);
          j--;
      }
      
    return results;
  }
  
  // Do not edit the line below.
  exports.taskAssignment = taskAssignment;
  