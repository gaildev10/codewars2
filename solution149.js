//Vowel Removal

function shortcut (string) {
    let x = ""
    
    for(let i = 0; i< string.length; i++){
      if(string[i] === "a" ||string[i] === "e" ||string[i] 
         === "i" ||string[i] === "o" ||string[i] === "u"){
        continue
      }
      x+=string[i];
      
    }
    return x
   }