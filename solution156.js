//Who likes it?
function likes(names) {
    let nLen = names.length
    if(nLen === 0){
      return "no one likes this"
    } else if (nLen === 1 ){
      return `${names[0]} likes this`
    } else if (nLen === 2 ){
      return `${names[0]} and ${names[1]} like this`
    } else if (nLen === 3 ){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
      } else if (nLen > 3){
        return `${names[0]}, ${names[1]} and ${nLen -2} others like this`
      }
  }