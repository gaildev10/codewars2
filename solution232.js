// The unknown but known variables: Addition

function theVar (theVariables){
    let alphabet = ' abcdefghijklmnopqrstuvwxyz',
    result = 0
    
    for(let i=0; i<alphabet.length; i++){
      if(theVariables[0] == alphabet[i]){
        result += i
      }
      if(theVariables[2] == alphabet[i]){
        result += i
      }
    }
    return result
  }