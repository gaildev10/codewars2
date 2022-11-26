//Next Palindromic Number
function nextPal(val) {
    for(let i=val + 1; true; i++){
      if([...String(i)].reverse().join("") == i){
      return i
     }
    }
  }