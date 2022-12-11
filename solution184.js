//Count of positives / sum of negatives
countPositivesSumNegatives = (input) => {
    let result = [0, 0]
    if(input == null || input.length == 0 ){
      return []
    } 
    for(let i of input){
        if( i > 0){
         result[0]++
      } else{
      result[1]+= i
      }
      
    }
      return result
  }