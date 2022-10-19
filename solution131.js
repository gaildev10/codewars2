//odd-even string sort
function sortMyString(s) {
    let odd = '', 
        even = ''
    
    for( let i = 0; i < s.length; i ++){
      if(i % 2){
       odd += s[i]
      } else {
      even += s[i]
      }
    }
    return even + " " + odd 
  }