//Two Fighters One Winner

function declareWinner(fighter1, fighter2, firstAttacker) {
    let player1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    let player2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    if(player1 > player2){ 
    return fighter1.name
        } else if(player2 > player1) {
          return fighter2.name
        }
    else {
      return firstAttacker
    }
  }