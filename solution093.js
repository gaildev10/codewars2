//curryingfunctions: multiply all elements in an array

function multiplyAll(array){
    return function (multiplier){
      return array.map(element => element * multiplier)
    }
    
  }