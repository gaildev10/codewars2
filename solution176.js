//Unscrambled eggs
function unscrambleEggs(word){
    let result = ""
    for(let i = 0; i < word.length; i++){
      if(word[i] == "e" && word[i + 1] == "g" && word[i +2] == "g"){ 
         i += 2
        } else {
          result += word[i]
        }
    }
    return result
  }