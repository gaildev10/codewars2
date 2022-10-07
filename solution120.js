

function findMultiples(integer, limit) {
    let arr = []
      for(let i = 1; i <=limit; i++){
        let m = i*integer
        if(m <= limit)
          arr.push(m)
      }
      return arr
  }//Find multiples of a number