//Collatz Conjecture (3n+1)
var hotpo = function(n){
    let count = 0
      if(n == 0) return 0; 
    
    while (n > 1){ 
    if(n % 2 === 0){
      n = n / 2
    } else {
      n = 3*n + 1
    }
    count ++
      }
      
    return count
  }