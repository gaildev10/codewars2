//Find  Maximum and Minimum Values of a list

let min = list => {
    let minimum = list[0]
    
    for ( let i = 1; i < list.length; i++){
      if(minimum > list[i] ){
        minimum = list[i]
      }
    }
    return minimum
  }
  
  let max = list => {
    let maximum = list[0]
    
    for ( let i = 1; i < list.length; i++){
      if(maximum < list[i] ){
        maximum = list[i]
      }
    }
    return maximum
  }
  

  // let max = (list) => Math.max(...list)
  // let min = (list) => Math.min(...list)