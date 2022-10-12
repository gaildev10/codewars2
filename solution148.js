//Find the Capitals

let capitals = (word)  => { 
    let result = []
    for (let i = 0; i < word.length; i++){ 
    if(word[i].toUpperCase() === word[i]){
      result.push(i)
    }
      }
      return result
      }
    