//Survive the attack

function hasSurvived(attackers, defenders){
    let countA = 0;
    let countD = 0;
    
    for (let i=0; i < attackers.length || i < defenders.length; i++) {
      if(attackers[i] > defenders[i] || defenders[i] == undefined) {
        countA ++
      } else if (defenders[i] > attackers[i] || attackers[i] == undefined) {
        countD++
      }
    }
    if (countA == countD){
      let sumA = attackers.reduce((acc, curr) => acc + curr,0),
          sumD = defenders.reduce((acc, curr) => acc + curr,0)
      
      if(sumA > sumD){
        return false
      }
        return true
    }
    return countD > countA
  }