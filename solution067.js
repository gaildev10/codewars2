//Split the bill

function splitTheBill(x) {
    let total = 0,
        count = 0
    
    for( let i in x){
      count++
      total += x[i]
    }
    let average = total/count
    for(let i in x){
      x[i] = +(x[i] - average).toFixed(2)
    }
  return x


}
