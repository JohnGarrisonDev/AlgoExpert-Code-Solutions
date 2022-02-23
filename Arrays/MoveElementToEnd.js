//Move Element To End
//https://www.algoexpert.io/questions/Move%20Element%20To%20End

//MY SOLUTION
function moveElementToEnd(array, toMove) {
    let p = array.length-1;
   let a = 0;
   while(p>a){
       console.log(a+','+p);
       console.log(array);
       if(array[a] == toMove){
           while(array[p] == toMove){
               p--;
               if(p==a){
                   return array
               }
           }
           array[a] = array[p];
           array[p] = toMove;
       }
       else{
           a++;
       }
   }
   return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
