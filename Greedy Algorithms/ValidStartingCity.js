//Valid Starting City
//https://www.algoexpert.io/questions/Valid%20Starting%20City

//My Solution
function validStartingCity(distances, fuel, mpg) {
    let minFuel = 0;
      let fuelLeft = 0;
      let city = 0;
      
      for(let i = 0; i<fuel.length; i++){
          fuel[i] = fuel[i]*mpg
      }
      for(let i = 1; i<fuel.length; i++){
          fuelLeft = fuelLeft+ fuel[i-1]-distances[i-1];
          console.log(fuelLeft);
          if(fuelLeft<minFuel){
              minFuel = fuelLeft;
              city = i;
          }
      }
    return city;
  }
  
  // Do not edit the line below.
  exports.validStartingCity = validStartingCity;
  