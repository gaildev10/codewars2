//Number of people on the bus

var number = function(busStops){
    let total = 0
    for(let i = 0; i < busStops.length; i++){
      let stops = busStops[i]
      let peopleOn = stops[0]
      let peopleOff = stops[1]
      
      total += peopleOn
      total -= peopleOff
  
    }
    return total
  }