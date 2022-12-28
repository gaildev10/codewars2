//Sum without highest and lowest number
function sumArray(array) {
    if(!array ) return 0
    if(array.length < 3) return 0
   
  let sorted = array.sort((a,b)=> a-b)
  return sorted.slice(1,-1).reduce((t, current)=> t+current,0)
  
  }