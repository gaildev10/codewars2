//Merge two arrays

function mergeArrays(a, b) {
    const maxLength = Math.max(a.length, b.length)
    let result = []
    
    for(let i=0; i< maxLength; i++){
      result.push(a[i])
      result.push(b[i])
    }
    return result.filter(value => value !== undefined)
  }