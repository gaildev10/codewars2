//Create Phone Number
function createPhoneNumber(numbers){
    let ptOne = numbers.join('').slice(0,3)
      let ptTwo = numbers.join('').slice(3,6)
      let ptThree = numbers.join('').slice(6)
      return `(${ptOne}) ${ptTwo}-${ptThree}`
    
  }