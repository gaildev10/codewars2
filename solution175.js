//Don't Give me Five


let dontGiveMeFive = (start, end) => {
    let count = []
    for(let i = start; i<=end; i++){
      let aStr = i.toString()
      if( ! aStr.includes('5')){
        count.push(i)
      }
    }
    return count.length
  }
  
